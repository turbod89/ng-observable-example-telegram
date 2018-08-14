import { PhotoSize } from './PhotoSize';



export class Video {

    /* fromJson */

    public static fromJson (json) {
        return new Video(
                json['file_id'] ? json['file_id'] : null,
                json['width'] ? json['width'] : null,
                json['height'] ? json['height'] : null,
                json['duration'] ? json['duration'] : null,
                json['thumb'] ? PhotoSize.fromJson(json['thumb']) : null,
                json['mime_type'] ? json['mime_type'] : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private width: number,
        private height: number,
        private duration: number,
        private thumb: PhotoSize = null,
        private mime_type: string = null,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_width() {
        return this.width;
    }

    public get_height() {
        return this.height;
    }

    public get_duration() {
        return this.duration;
    }

    public get_thumb() {
        return this.thumb;
    }

    public get_mime_type() {
        return this.mime_type;
    }

    public get_file_size() {
        return this.file_size;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_width(width: number) {
        this.width = width;
        return this;
    }

    public set_height(height: number) {
        this.height = height;
        return this;
    }

    public set_duration(duration: number) {
        this.duration = duration;
        return this;
    }

    public set_thumb(thumb: PhotoSize) {
        this.thumb = thumb;
        return this;
    }

    public set_mime_type(mime_type: string) {
        this.mime_type = mime_type;
        return this;
    }

    public set_file_size(file_size: number) {
        this.file_size = file_size;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'file_id': this.get_file_id(),
                'width': this.get_width(),
                'height': this.get_height(),
                'duration': this.get_duration(),
                'thumb': this.get_thumb().toArray(deep - 1),
                'mime_type': this.get_mime_type(),
                'file_size': this.get_file_size(),
        };
    }

}
