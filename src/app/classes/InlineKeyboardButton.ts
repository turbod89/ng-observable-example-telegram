export class InlineKeyboardButton {

    /* fromJson */

    public static fromJson (json) {
        return new InlineKeyboardButton(
                json['text'] ? json['text'] : null,
                json['url'] ? json['url'] : null,
                json['callback_data'] ? json['callback_data'] : null,
                json['switch_inline_query'] ? json['switch_inline_query'] : null,
                json['switch_inline_query_current_chat'] ? json['switch_inline_query_current_chat'] : null,
                json['callback_game'] ? json['callback_game'] : null,
                json['pay'] ? json['pay'] : null,
        );
    }


    /* Constructor */

    constructor (
        private text: string,
        private url: string = null,
        private callback_data: string = null,
        private switch_inline_query: string = null,
        private switch_inline_query_current_chat: string = null,
        private callback_game: any = null,
        private pay: boolean = null,
    ) {}


    /* Getters*/

    public get_text() {
        return this.text;
    }

    public get_url() {
        return this.url;
    }

    public get_callback_data() {
        return this.callback_data;
    }

    public get_switch_inline_query() {
        return this.switch_inline_query;
    }

    public get_switch_inline_query_current_chat() {
        return this.switch_inline_query_current_chat;
    }

    public get_callback_game() {
        return this.callback_game;
    }

    public get_pay() {
        return this.pay;
    }


    /* Setters*/

    public set_text(text: string) {
        this.text = text;
        return this;
    }

    public set_url(url: string) {
        this.url = url;
        return this;
    }

    public set_callback_data(callback_data: string) {
        this.callback_data = callback_data;
        return this;
    }

    public set_switch_inline_query(switch_inline_query: string) {
        this.switch_inline_query = switch_inline_query;
        return this;
    }

    public set_switch_inline_query_current_chat(switch_inline_query_current_chat: string) {
        this.switch_inline_query_current_chat = switch_inline_query_current_chat;
        return this;
    }

    public set_callback_game(callback_game: any) {
        this.callback_game = callback_game;
        return this;
    }

    public set_pay(pay: boolean) {
        this.pay = pay;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'text': this.get_text(),
                'url': this.get_url(),
                'callback_data': this.get_callback_data(),
                'switch_inline_query': this.get_switch_inline_query(),
                'switch_inline_query_current_chat': this.get_switch_inline_query_current_chat(),
                'callback_game': this.get_callback_game(),
                'pay': this.get_pay(),
        };
    }

}
