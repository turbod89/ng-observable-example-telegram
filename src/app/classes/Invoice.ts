export class Invoice {

    /* fromJson */

    public static fromJson (json) {
        return new Invoice(
                json['title'] ? json['title'] : null,
                json['description'] ? json['description'] : null,
                json['start_parameter'] ? json['start_parameter'] : null,
                json['currency'] ? json['currency'] : null,
                json['total_amount'] ? json['total_amount'] : null,
        );
    }


    /* Constructor */

    constructor (
        private title: string,
        private description: string,
        private start_parameter: string,
        private currency: string,
        private total_amount: number,
    ) {}


    /* Getters*/

    public get_title() {
        return this.title;
    }

    public get_description() {
        return this.description;
    }

    public get_start_parameter() {
        return this.start_parameter;
    }

    public get_currency() {
        return this.currency;
    }

    public get_total_amount() {
        return this.total_amount;
    }


    /* Setters*/

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
        return this;
    }

    public set_start_parameter(start_parameter: string) {
        this.start_parameter = start_parameter;
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


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'title': this.get_title(),
                'description': this.get_description(),
                'start_parameter': this.get_start_parameter(),
                'currency': this.get_currency(),
                'total_amount': this.get_total_amount(),
        };
    }

}
