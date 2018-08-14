export class ShippingAddress {

    /* fromJson */

    public static fromJson (json) {
        return new ShippingAddress(
                json['country_code'] ? json['country_code'] : null,
                json['state'] ? json['state'] : null,
                json['city'] ? json['city'] : null,
                json['street_line1'] ? json['street_line1'] : null,
                json['street_line2'] ? json['street_line2'] : null,
                json['post_code'] ? json['post_code'] : null,
        );
    }


    /* Constructor */

    constructor (
        private country_code: string,
        private state: string,
        private city: string,
        private street_line1: string,
        private street_line2: string,
        private post_code: string,
    ) {}


    /* Getters*/

    public get_country_code() {
        return this.country_code;
    }

    public get_state() {
        return this.state;
    }

    public get_city() {
        return this.city;
    }

    public get_street_line1() {
        return this.street_line1;
    }

    public get_street_line2() {
        return this.street_line2;
    }

    public get_post_code() {
        return this.post_code;
    }


    /* Setters*/

    public set_country_code(country_code: string) {
        this.country_code = country_code;
        return this;
    }

    public set_state(state: string) {
        this.state = state;
        return this;
    }

    public set_city(city: string) {
        this.city = city;
        return this;
    }

    public set_street_line1(street_line1: string) {
        this.street_line1 = street_line1;
        return this;
    }

    public set_street_line2(street_line2: string) {
        this.street_line2 = street_line2;
        return this;
    }

    public set_post_code(post_code: string) {
        this.post_code = post_code;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'country_code': this.get_country_code(),
                'state': this.get_state(),
                'city': this.get_city(),
                'street_line1': this.get_street_line1(),
                'street_line2': this.get_street_line2(),
                'post_code': this.get_post_code(),
        };
    }

}
