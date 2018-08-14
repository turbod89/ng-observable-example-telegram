export class KeyboardButton {

    /* fromJson */

    public static fromJson (json) {
        return new KeyboardButton(
                json['text'] ? json['text'] : null,
                json['request_contact'] ? json['request_contact'] : null,
                json['request_location'] ? json['request_location'] : null,
        );
    }


    /* Constructor */

    constructor (
        private text: string,
        private request_contact: boolean = null,
        private request_location: boolean = null,
    ) {}


    /* Getters*/

    public get_text() {
        return this.text;
    }

    public get_request_contact() {
        return this.request_contact;
    }

    public get_request_location() {
        return this.request_location;
    }


    /* Setters*/

    public set_text(text: string) {
        this.text = text;
        return this;
    }

    public set_request_contact(request_contact: boolean) {
        this.request_contact = request_contact;
        return this;
    }

    public set_request_location(request_location: boolean) {
        this.request_location = request_location;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'text': this.get_text(),
                'request_contact': this.get_request_contact(),
                'request_location': this.get_request_location(),
        };
    }

}
