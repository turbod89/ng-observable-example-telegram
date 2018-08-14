export class PassportElementErrorFile {

    /* fromJson */

    public static fromJson (json) {
        return new PassportElementErrorFile(
                json['source'] ? json['source'] : null,
                json['type'] ? json['type'] : null,
                json['file_hash'] ? json['file_hash'] : null,
                json['message'] ? json['message'] : null,
        );
    }


    /* Constructor */

    constructor (
        private source: string,
        private type: string,
        private file_hash: string,
        private message: string,
    ) {}


    /* Getters*/

    public get_source() {
        return this.source;
    }

    public get_type() {
        return this.type;
    }

    public get_file_hash() {
        return this.file_hash;
    }

    public get_message() {
        return this.message;
    }


    /* Setters*/

    public set_source(source: string) {
        this.source = source;
        return this;
    }

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_file_hash(file_hash: string) {
        this.file_hash = file_hash;
        return this;
    }

    public set_message(message: string) {
        this.message = message;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'source': this.get_source(),
                'type': this.get_type(),
                'file_hash': this.get_file_hash(),
                'message': this.get_message(),
        };
    }

}
