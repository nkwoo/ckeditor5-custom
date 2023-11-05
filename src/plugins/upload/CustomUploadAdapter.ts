import {Plugin} from "@ckeditor/ckeditor5-core";
import {UploadAdapter, UploadResponse} from "@ckeditor/ckeditor5-upload/src/filerepository";
import {FileLoader} from "@ckeditor/ckeditor5-upload";
import {CustomUpload} from "./CustomUpload";

export default class CustomUploadAdapter implements UploadAdapter {
    loader: FileLoader;
    options: CustomUpload;
    xhr: XMLHttpRequest | null = null;

    constructor(loader: FileLoader, options: CustomUpload) {
        this.loader = loader;
        this.options = options;
    }

    upload(): Promise<UploadResponse> {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                const uploadFile = file!;

                this._validFile(reject, uploadFile);
                this._initRequest();
                this._initListeners(resolve, reject, uploadFile);
                this._sendRequest(uploadFile);
        }));
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    _validFile(reject: (reason?: any) => void, file: File) {
        const imageMaxSize = this.options.image.maxSize || 1 * 1024 * 1024;
        const videoMaxSize = this.options.video.maxSize || 1 * 1024 * 1024;

        if (file.type.startsWith('image') && file.size > imageMaxSize) {
            reject(`이미지는 최대 ${Math.trunc(imageMaxSize / 1024 / 1024)}MB 까지 올릴 수 있습니다.`);
        }

        if (file.type.startsWith('video') && file.size > videoMaxSize) {
            reject(`동영상은 최대 ${Math.trunc(imageMaxSize / 1024 / 1024)}MB 까지 올릴 수 있습니다.`);
        }
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', this.options.uploadUrl, true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve: { (value: UploadResponse | PromiseLike<UploadResponse>): void; (arg0: any): void; }, reject: { (reason?: any): void; (arg0: string | undefined): any; }, file: File) {
        const xhr = this.xhr!;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response as UploadResponse;
            if (!response || response.message) {
                return reject(response && response.message ? response.message : genericErrorText);
            }

            resolve({default: response.fileUrl});
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    _sendRequest(file: File) {
        const xhr = this.xhr!;

        const headers = this.options.headers || {};

        const withCredentials = this.options.withCredentials || false;
        for (const headerName of Object.keys(headers)) {
            xhr.setRequestHeader(headerName, headers[headerName]);
        }

        xhr.withCredentials = withCredentials;

        const data = new FormData();

        data.append('upload', file);

        xhr.send(data);
    }
}
