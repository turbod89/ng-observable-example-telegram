import { LabeledPrice } from './LabeledPrice';



export class ShippingOption {

    /* fromJson */

    public static fromJson (json) {
        return new ShippingOption(
                json['id'] ? json['id'] : null,
                json['title'] ? json['title'] : null,
                json['prices'] ? json['prices'].map( element => LabeledPrice.fromJson(element) ) : null,
        );
    }


    /* Constructor */

    constructor (
        private id: string,
        private title: string,
        private prices: LabeledPrice[],
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_title() {
        return this.title;
    }

    public get_prices() {
        return this.prices;
    }


    /* Setters*/

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_prices(prices: LabeledPrice[]) {
        this.prices = prices;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'id': this.get_id(),
                'title': this.get_title(),
                'prices': this.get_prices().map( element => element.toArray(deep - 1) ),
        };
    }

}
