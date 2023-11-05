export type CustomUpload = {
    uploadUrl: string,
    image: {
        maxSize: number
    },
    video: {
        maxSize: number
    },
    headers: {[key: string]: string},
    withCredentials: false
}
