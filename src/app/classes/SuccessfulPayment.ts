import { OrderInfo } from './OrderInfo';



export class SuccessfulPayment {

    /* fromJson */

    public static fromJson (json) {
        return new SuccessfulPayment(
                json['currency'] ? json['currency'] : null,
                json['total_amount'] ? json['total_amount'] : null,
                json['invoice_payload'] ? json['invoice_payload'] : null,
                json['telegram_payment_charge_id'] ? json['telegram_payment_charge_id'] : null,
                json['provider_payment_charge_id'] ? json['provider_payment_charge_id'] : null,
                json['shipping_option_id'] ? json['shipping_option_id'] : null,
                json['order_info'] ? OrderInfo.fromJson(json['order_info']) : null,
        );
    }


    /* Constructor */

    constructor (
        private currency: string,
        private total_amount: number,
        private invoice_payload: string,
        private telegram_payment_charge_id: string,
        private provider_payment_charge_id: string,
        private shipping_option_id: string = null,
        private order_info: OrderInfo = null,
    ) {}


    /* Getters*/

    public get_currency() {
        return this.currency;
    }

    public get_total_amount() {
        return this.total_amount;
    }

    public get_invoice_payload() {
        return this.invoice_payload;
    }

    public get_telegram_payment_charge_id() {
        return this.telegram_payment_charge_id;
    }

    public get_provider_payment_charge_id() {
        return this.provider_payment_charge_id;
    }

    public get_shipping_option_id() {
        return this.shipping_option_id;
    }

    public get_order_info() {
        return this.order_info;
    }


    /* Setters*/

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

    public set_telegram_payment_charge_id(telegram_payment_charge_id: string) {
        this.telegram_payment_charge_id = telegram_payment_charge_id;
        return this;
    }

    public set_provider_payment_charge_id(provider_payment_charge_id: string) {
        this.provider_payment_charge_id = provider_payment_charge_id;
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
                'currency': this.get_currency(),
                'total_amount': this.get_total_amount(),
                'invoice_payload': this.get_invoice_payload(),
                'telegram_payment_charge_id': this.get_telegram_payment_charge_id(),
                'provider_payment_charge_id': this.get_provider_payment_charge_id(),
                'shipping_option_id': this.get_shipping_option_id(),
                'order_info': this.get_order_info().toArray(deep - 1),
        };
    }

}
