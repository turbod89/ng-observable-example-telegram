export class PassportElementErrorFiles {

    /* fromJson */

    public static fromJson (json) {
        return new PassportElementErrorFiles(
                json['source'] ? json['source'] : null,
                json['type'] ? json['type'] : null,
                json['file_hashes'] ? json['file_hashes'] : null,
                json['message'] ? json['message'] : null,
        );
    }


    /* Constructor */

    constructor (
        private source: string,
        private type: string,
        private file_hashes: String[],
        private message: string,
    ) {}


    /* Getters*/

    public get_source() {
        return this.source;
    }

    public get_type() {
        return this.type;
    }

    public get_file_hashes() {
        return this.file_hashes;
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

    public set_file_hashes(file_hashes: String[]) {
        this.file_hashes = file_hashes;
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
                'file_hashes': this.get_file_hashes(),
                'message': this.get_message(),
        };
    }

}
