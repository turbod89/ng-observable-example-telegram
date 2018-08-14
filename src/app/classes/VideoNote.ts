import { PhotoSize } from './PhotoSize';



export class VideoNote {

    /* fromJson */

    public static fromJson (json) {
        return new VideoNote(
                json['file_id'] ? json['file_id'] : null,
                json['length'] ? json['length'] : null,
                json['duration'] ? json['duration'] : null,
                json['thumb'] ? PhotoSize.fromJson(json['thumb']) : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private length: number,
        private duration: number,
        private thumb: PhotoSize = null,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_length() {
        return this.length;
    }

    public get_duration() {
        return this.duration;
    }

    public get_thumb() {
        return this.thumb;
    }

    public get_file_size() {
        return this.file_size;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_length(length: number) {
        this.length = length;
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
                'length': this.get_length(),
                'duration': this.get_duration(),
                'thumb': this.get_thumb().toArray(deep - 1),
                'file_size': this.get_file_size(),
        };
    }

}
