import { User } from './User';
import { OrderInfo } from './OrderInfo';



export class PreCheckoutQuery {

    /* fromJson */

    public static fromJson (json) {
        return new PreCheckoutQuery(
                json['id'] ? json['id'] : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['currency'] ? json['currency'] : null,
                json['total_amount'] ? json['total_amount'] : null,
                json['invoice_payload'] ? json['invoice_payload'] : null,
                json['shipping_option_id'] ? json['shipping_option_id'] : null,
                json['order_info'] ? OrderInfo.fromJson(json['order_info']) : null,
        );
    }


    /* Constructor */

    constructor (
        private id: string,
        private from: User,
        private currency: string,
        private total_amount: number,
        private invoice_payload: string,
        private shipping_option_id: string = null,
        private order_info: OrderInfo = null,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_from() {
        return this.from;
    }

    public get_currency() {
        return this.currency;
    }

    public get_total_amount() {
        return this.total_amount;
    }

    public get_invoice_payload() {
        return this.invoice_payload;
    }

    public get_shipping_option_id() {
        return this.shipping_option_id;
    }

    public get_order_info() {
        return this.order_info;
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

    public set_currency(currency: string) {
        this.currency = currency;
        return this;
    }

    public set_total_amount(total_amount: number) {
        this.total_amount = total_amount;
        return this;
    }

    public set_invoice_payload(invoice_payload: string) {
        this.invoice_payload = invoice_payload;
        return this;
    }

    public set_shipping_option_id(shipping_option_id: string) {
        this.shipping_option_id = shipping_option_id;
        return this;
    }

    public set_order_info(order_info: OrderInfo) {
        this.order_info = order_info;
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
                'currency': this.get_currency(),
                'total_amount': this.get_total_amount(),
                'invoice_payload': this.get_invoice_payload(),
                'shipping_option_id': this.get_shipping_option_id(),
                'order_info': this.get_order_info().toArray(deep - 1),
        };
    }

}
