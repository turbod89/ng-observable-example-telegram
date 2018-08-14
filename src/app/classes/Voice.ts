export class Voice {

    /* fromJson */

    public static fromJson (json) {
        return new Voice(
                json['file_id'] ? json['file_id'] : null,
                json['duration'] ? json['duration'] : null,
                json['mime_type'] ? json['mime_type'] : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private duration: number,
        private mime_type: string = null,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_duration() {
        return this.duration;
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

    public set_duration(duration: number) {
        this.duration = duration;
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
                'duration': this.get_duration(),
                'mime_type': this.get_mime_type(),
                'file_size': this.get_file_size(),
        };
    }

}
