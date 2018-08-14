import { User } from './User';
import { ShippingAddress } from './ShippingAddress';



export class ShippingQuery {

    /* fromJson */

    public static fromJson (json) {
        return new ShippingQuery(
                json['id'] ? json['id'] : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['invoice_payload'] ? json['invoice_payload'] : null,
                json['shipping_address'] ? ShippingAddress.fromJson(json['shipping_address']) : null,
        );
    }


    /* Constructor */

    constructor (
        private id: string,
        private from: User,
        private invoice_payload: string,
        private shipping_address: ShippingAddress,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_from() {
        return this.from;
    }

    public get_invoice_payload() {
        return this.invoice_payload;
    }

    public get_shipping_address() {
        return this.shipping_address;
    }


    /* Setters*/

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_from(from: User) {
        this.from = from;
        return this;
    }

    public set_invoice_payload(invoice_payload: string) {
        this.invoice_payload = invoice_payload;
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
                'id': this.get_id(),
                'from': this.get_from().toArray(deep - 1),
                'invoice_payload': this.get_invoice_payload(),
                'shipping_address': this.get_shipping_address().toArray(deep - 1),
        };
    }

}
