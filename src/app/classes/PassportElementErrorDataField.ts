export class PassportElementErrorDataField {

    /* fromJson */

    public static fromJson (json) {
        return new PassportElementErrorDataField(
                json['source'] ? json['source'] : null,
                json['type'] ? json['type'] : null,
                json['field_name'] ? json['field_name'] : null,
                json['data_hash'] ? json['data_hash'] : null,
                json['message'] ? json['message'] : null,
        );
    }


    /* Constructor */

    constructor (
        private source: string,
        private type: string,
        private field_name: string,
        private data_hash: string,
        private message: string,
    ) {}


    /* Getters*/

    public get_source() {
        return this.source;
    }

    public get_type() {
        return this.type;
    }

    public get_field_name() {
        return this.field_name;
    }

    public get_data_hash() {
        return this.data_hash;
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

    public set_field_name(field_name: string) {
        this.field_name = field_name;
        return this;
    }

    public set_data_hash(data_hash: string) {
        this.data_hash = data_hash;
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
                'field_name': this.get_field_name(),
                'data_hash': this.get_data_hash(),
                'message': this.get_message(),
        };
    }

}
