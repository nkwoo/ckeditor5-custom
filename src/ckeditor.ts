/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {ClassicEditor} from "@ckeditor/ckeditor5-editor-classic";
import {Alignment} from '@ckeditor/ckeditor5-alignment';
import {Autoformat} from '@ckeditor/ckeditor5-autoformat';
import {Bold, Italic, Strikethrough, Underline} from '@ckeditor/ckeditor5-basic-styles';
import {BlockQuote} from '@ckeditor/ckeditor5-block-quote';
import {CloudServices} from '@ckeditor/ckeditor5-cloud-services';
import {Essentials} from '@ckeditor/ckeditor5-essentials';
import {FontBackgroundColor, FontColor, FontFamily, FontSize} from '@ckeditor/ckeditor5-font';
import {Heading} from '@ckeditor/ckeditor5-heading';
import {HorizontalLine} from '@ckeditor/ckeditor5-horizontal-line';
import {GeneralHtmlSupport} from '@ckeditor/ckeditor5-html-support';
import {
    AutoImage,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload
} from '@ckeditor/ckeditor5-image';
import {Indent} from '@ckeditor/ckeditor5-indent';
import {Link, LinkImage} from '@ckeditor/ckeditor5-link';
import {List} from '@ckeditor/ckeditor5-list';
import {MediaEmbed, MediaEmbedToolbar} from '@ckeditor/ckeditor5-media-embed';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';
import {PasteFromOffice} from '@ckeditor/ckeditor5-paste-from-office';
import {RemoveFormat} from '@ckeditor/ckeditor5-remove-format';
import {SourceEditing} from '@ckeditor/ckeditor5-source-editing';
import {
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText
} from '@ckeditor/ckeditor5-special-characters';
import {Table, TableToolbar} from '@ckeditor/ckeditor5-table';
import {TextTransformation} from '@ckeditor/ckeditor5-typing';
import {SimpleUploadAdapter} from '@ckeditor/ckeditor5-upload';
import {HtmlEmbed} from "@ckeditor/ckeditor5-html-embed";
import {Video, VideoResize, VideoStyle, VideoToolbar, VideoUpload} from "./plugins/video-upload";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.


class Editors extends ClassicEditor {
    public static override builtinPlugins = [
        Alignment,
        AutoImage,
        Autoformat,
        BlockQuote,
        Bold,
        CloudServices,
        Essentials,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        GeneralHtmlSupport,
        Heading,
        HorizontalLine,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Indent,
        Italic,
        Link,
        LinkImage,
        List,
        HtmlEmbed,
        MediaEmbed,
        MediaEmbedToolbar,
        Paragraph,
        PasteFromOffice,
        RemoveFormat,
        // Base64UploadAdapter,
        SimpleUploadAdapter,
        SourceEditing,
        SpecialCharacters,
        SpecialCharactersArrows,
        SpecialCharactersCurrency,
        SpecialCharactersEssentials,
        SpecialCharactersLatin,
        SpecialCharactersMathematical,
        SpecialCharactersText,
        Strikethrough,
        Table,
        TableToolbar,
        TextTransformation,
        Underline,
        Video,
        VideoUpload,
        VideoToolbar,
        VideoResize,
        VideoStyle
    ];

    public static override defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'sourceEditing',
                'undo',
                'redo',
                '|',
                'fontBackgroundColor',
                'fontColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'alignment',
                '|',
                'numberedList',
                'bulletedList',
                '|',
                'outdent',
                'indent',
                '-',
                'fontFamily',
                'fontSize',
                'removeFormat',
                '|',
                'blockQuote',
                'specialCharacters',
                'horizontalLine',
                'insertTable',
                'link',
                'imageInsert',
                'mediaEmbed',
                'videoUpload',
                'htmlEmbed',
            ],
            shouldNotGroupWhenFull: true
        },
        language: 'ko',
        video: {
            resizeUnit: '%',
            resizeOptions: [
                {
                    name: 'videoResize:original',
                    value: null,
                    label: 'Original',
                    icon: 'original'
                },
                {
                    name: 'videoResize:25',
                    value: 25,
                    label: '25%',
                    icon: 'small'
                },
                {
                    name: 'videoResize:50',
                    value: 50,
                    label: '50%',
                    icon: 'medium'
                },
                {
                    name: 'videoResize:75',
                    value: 75,
                    label: '75%',
                    icon: 'large'
                },
                {
                    name: 'videoResize:100',
                    value: 100,
                    label: '100%',
                    icon: 'large'
                }
            ],
            toolbar: [
                'videoResize',
                '|',
                'videoStyle:alignLeft',
                'videoStyle:alignCenter',
                'videoStyle:alignRight'
            ],
            styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
            upload: {
                types: ['mp4'],
                allowMultipleFiles: false,
            }
        },
        image: {
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        htmlEmbed: {
            showPreviews: true
        }
    };
}

export default Editors;
