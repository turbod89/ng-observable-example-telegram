import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultContact {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultContact(
                json['type'] ? json['type'] : null,
                json['phone_number'] ? json['phone_number'] : null,
                json['first_name'] ? json['first_name'] : null,
                json['id'] ? json['id'] : null,
                json['last_name'] ? json['last_name'] : null,
                json['thumb_height'] ? json['thumb_height'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
                json['thumb_url'] ? json['thumb_url'] : null,
                json['thumb_width'] ? json['thumb_width'] : null,
                json['vcard'] ? json['vcard'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private phone_number: string,
        private first_name: string,
        private id: string,
        private last_name: string = null,
        private thumb_height: number = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private input_message_content: any = null,
        private thumb_url: string = null,
        private thumb_width: number = null,
        private vcard: string = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_phone_number() {
        return this.phone_number;
    }

    public get_first_name() {
        return this.first_name;
    }

    public get_id() {
        return this.id;
    }

    public get_last_name() {
        return this.last_name;
    }

    public get_thumb_height() {
        return this.thumb_height;
    }

    public get_reply_markup() {
        return this.reply_markup;
    }

    public get_input_message_content() {
        return this.input_message_content;
    }

    public get_thumb_url() {
        return this.thumb_url;
    }

    public get_thumb_width() {
        return this.thumb_width;
    }

    public get_vcard() {
        return this.vcard;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_phone_number(phone_number: string) {
        this.phone_number = phone_number;
        return this;
    }

    public set_first_name(first_name: string) {
        this.first_name = first_name;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_last_name(last_name: string) {
        this.last_name = last_name;
        return this;
    }

    public set_thumb_height(thumb_height: number) {
        this.thumb_height = thumb_height;
        return this;
    }

    public set_reply_markup(reply_markup: InlineKeyboardMarkup) {
        this.reply_markup = reply_markup;
        return this;
    }

    public set_input_message_content(input_message_content: any) {
        this.input_message_content = input_message_content;
        return this;
    }

    public set_thumb_url(thumb_url: string) {
        this.thumb_url = thumb_url;
        return this;
    }

    public set_thumb_width(thumb_width: number) {
        this.thumb_width = thumb_width;
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
                'type': this.get_type(),
                'phone_number': this.get_phone_number(),
                'first_name': this.get_first_name(),
                'id': this.get_id(),
                'last_name': this.get_last_name(),
                'thumb_height': this.get_thumb_height(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
                'thumb_url': this.get_thumb_url(),
                'thumb_width': this.get_thumb_width(),
                'vcard': this.get_vcard(),
        };
    }

}
