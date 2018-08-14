import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultArticle {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultArticle(
                json['type'] ? json['type'] : null,
                json['title'] ? json['title'] : null,
                json['input_message_content'] ? json['input_message_content'] : null,
                json['id'] ? json['id'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['thumb_height'] ? json['thumb_height'] : null,
                json['hide_url'] ? json['hide_url'] : null,
                json['description'] ? json['description'] : null,
                json['thumb_url'] ? json['thumb_url'] : null,
                json['thumb_width'] ? json['thumb_width'] : null,
                json['url'] ? json['url'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private title: string,
        private input_message_content: any,
        private id: string,
        private reply_markup: InlineKeyboardMarkup = null,
        private thumb_height: number = null,
        private hide_url: boolean = null,
        private description: string = null,
        private thumb_url: string = null,
        private thumb_width: number = null,
        private url: string = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_title() {
        return this.title;
    }

    public get_input_message_content() {
        return this.input_message_content;
    }

    public get_id() {
        return this.id;
    }

    public get_reply_markup() {
        return this.reply_markup;
    }

    public get_thumb_height() {
        return this.thumb_height;
    }

    public get_hide_url() {
        return this.hide_url;
    }

    public get_description() {
        return this.description;
    }

    public get_thumb_url() {
        return this.thumb_url;
    }

    public get_thumb_width() {
        return this.thumb_width;
    }

    public get_url() {
        return this.url;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_input_message_content(input_message_content: any) {
        this.input_message_content = input_message_content;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_reply_markup(reply_markup: InlineKeyboardMarkup) {
        this.reply_markup = reply_markup;
        return this;
    }

    public set_thumb_height(thumb_height: number) {
        this.thumb_height = thumb_height;
        return this;
    }

    public set_hide_url(hide_url: boolean) {
        this.hide_url = hide_url;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
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

    public set_url(url: string) {
        this.url = url;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'title': this.get_title(),
                'input_message_content': this.get_input_message_content(),
                'id': this.get_id(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'thumb_height': this.get_thumb_height(),
                'hide_url': this.get_hide_url(),
                'description': this.get_description(),
                'thumb_url': this.get_thumb_url(),
                'thumb_width': this.get_thumb_width(),
                'url': this.get_url(),
        };
    }

}
