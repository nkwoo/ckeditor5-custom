import {Plugin} from '@ckeditor/ckeditor5-core';
import VideoBlock from './videoblock';
import './theme/video.css';

export default class Video extends Plugin {
    /**
     * @inheritDoc
     */
    public static get requires() {
        return [VideoBlock] as const;
    }

    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return 'Video' as const;
    }
}
