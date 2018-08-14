export class LabeledPrice {

    /* fromJson */

    public static fromJson (json) {
        return new LabeledPrice(
                json['label'] ? json['label'] : null,
                json['amount'] ? json['amount'] : null,
        );
    }


    /* Constructor */

    constructor (
        private label: string,
        private amount: number,
    ) {}


    /* Getters*/

    public get_label() {
        return this.label;
    }

    public get_amount() {
        return this.amount;
    }


    /* Setters*/

    public set_label(label: string) {
        this.label = label;
        return this;
    }

    public set_amount(amount: number) {
        this.amount = amount;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'label': this.get_label(),
                'amount': this.get_amount(),
        };
    }

}
