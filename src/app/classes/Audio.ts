import { PhotoSize } from './PhotoSize';



export class Audio {

    /* fromJson */

    public static fromJson (json) {
        return new Audio(
                json['file_id'] ? json['file_id'] : null,
                json['duration'] ? json['duration'] : null,
                json['performer'] ? json['performer'] : null,
                json['title'] ? json['title'] : null,
                json['mime_type'] ? json['mime_type'] : null,
                json['file_size'] ? json['file_size'] : null,
                json['thumb'] ? PhotoSize.fromJson(json['thumb']) : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private duration: number,
        private performer: string = null,
        private title: string = null,
        private mime_type: string = null,
        private file_size: number = null,
        private thumb: PhotoSize = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_duration() {
        return this.duration;
    }

    public get_performer() {
        return this.performer;
    }

    public get_title() {
        return this.title;
    }

    public get_mime_type() {
        return this.mime_type;
    }

    public get_file_size() {
        return this.file_size;
    }

    public get_thumb() {
        return this.thumb;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_duration(duration: number) {
        this.duration = duration;
        return this;
    }

    public set_performer(performer: string) {
        this.performer = performer;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
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

    public set_thumb(thumb: PhotoSize) {
        this.thumb = thumb;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'file_id': this.get_file_id(),
                'duration': this.get_duration(),
                'performer': this.get_performer(),
                'title': this.get_title(),
                'mime_type': this.get_mime_type(),
                'file_size': this.get_file_size(),
                'thumb': this.get_thumb().toArray(deep - 1),
        };
    }

}
