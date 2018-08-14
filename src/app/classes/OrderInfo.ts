import { ShippingAddress } from './ShippingAddress';



export class OrderInfo {

    /* fromJson */

    public static fromJson (json) {
        return new OrderInfo(
                json['name'] ? json['name'] : null,
                json['phone_number'] ? json['phone_number'] : null,
                json['email'] ? json['email'] : null,
                json['shipping_address'] ? ShippingAddress.fromJson(json['shipping_address']) : null,
        );
    }


    /* Constructor */

    constructor (
        private name: string = null,
        private phone_number: string = null,
        private email: string = null,
        private shipping_address: ShippingAddress = null,
    ) {}


    /* Getters*/

    public get_name() {
        return this.name;
    }

    public get_phone_number() {
        return this.phone_number;
    }

    public get_email() {
        return this.email;
    }

    public get_shipping_address() {
        return this.shipping_address;
    }


    /* Setters*/

    public set_name(name: string) {
        this.name = name;
        return this;
    }

    public set_phone_number(phone_number: string) {
        this.phone_number = phone_number;
        return this;
    }

    public set_email(email: string) {
        this.email = email;
        return this;
    }

    public set_shipping_address(shipping_address: ShippingAddress) {
        this.shipping_address = shipping_address;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'name': this.get_name(),
                'phone_number': this.get_phone_number(),
                'email': this.get_email(),
                'shipping_address': this.get_shipping_address().toArray(deep - 1),
        };
    }

}
