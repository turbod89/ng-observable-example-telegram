export class Contact {

    /* fromJson */

    public static fromJson (json) {
        return new Contact(
                json['phone_number'] ? json['phone_number'] : null,
                json['first_name'] ? json['first_name'] : null,
                json['last_name'] ? json['last_name'] : null,
                json['user_id'] ? json['user_id'] : null,
                json['vcard'] ? json['vcard'] : null,
        );
    }


    /* Constructor */

    constructor (
        private phone_number: string,
        private first_name: string,
        private last_name: string = null,
        private user_id: number = null,
        private vcard: string = null,
    ) {}


    /* Getters*/

    public get_phone_number() {
        return this.phone_number;
    }

    public get_first_name() {
        return this.first_name;
    }

    public get_last_name() {
        return this.last_name;
    }

    public get_user_id() {
        return this.user_id;
    }

    public get_vcard() {
        return this.vcard;
    }


    /* Setters*/

    public set_phone_number(phone_number: string) {
        this.phone_number = phone_number;
        return this;
    }

    public set_first_name(first_name: string) {
        this.first_name = first_name;
        return this;
    }

    public set_last_name(last_name: string) {
        this.last_name = last_name;
        return this;
    }

    public set_user_id(user_id: number) {
        this.user_id = user_id;
        return this;
    }

    public set_vcard(vcard: string) {
        this.vcard = vcard;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'phone_number': this.get_phone_number(),
                'first_name': this.get_first_name(),
                'last_name': this.get_last_name(),
                'user_id': this.get_user_id(),
                'vcard': this.get_vcard(),
        };
    }

}
