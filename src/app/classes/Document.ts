import { PhotoSize } from './PhotoSize';



export class Document {

    /* fromJson */

    public static fromJson (json) {
        return new Document(
                json['file_id'] ? json['file_id'] : null,
                json['thumb'] ? PhotoSize.fromJson(json['thumb']) : null,
                json['file_name'] ? json['file_name'] : null,
                json['mime_type'] ? json['mime_type'] : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private thumb: PhotoSize = null,
        private file_name: string = null,
        private mime_type: string = null,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_thumb() {
        return this.thumb;
    }

    public get_file_name() {
        return this.file_name;
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

    public set_thumb(thumb: PhotoSize) {
        this.thumb = thumb;
        return this;
    }

    public set_file_name(file_name: string) {
        this.file_name = file_name;
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
                'thumb': this.get_thumb().toArray(deep - 1),
                'file_name': this.get_file_name(),
                'mime_type': this.get_mime_type(),
                'file_size': this.get_file_size(),
        };
    }

}
