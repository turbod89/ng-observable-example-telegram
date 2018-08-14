import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultPhoto {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultPhoto(
                json['type'] ? json['type'] : null,
                json['photo_url'] ? json['photo_url'] : null,
                json['thumb_url'] ? json['thumb_url'] : null,
                json['id'] ? json['id'] : null,
                json['photo_width'] ? json['photo_width'] : null,
                json['photo_height'] ? json['photo_height'] : null,
                json['input_message_content'] ? json['input_message_content'] : null,
                json['description'] ? json['description'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['title'] ? json['title'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private photo_url: string,
        private thumb_url: string,
        private id: string,
        private photo_width: number = null,
        private photo_height: number = null,
        private input_message_content: any = null,
        private description: string = null,
        private caption: string = null,
        private parse_mode: string = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private title: string = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_photo_url() {
        return this.photo_url;
    }

    public get_thumb_url() {
        return this.thumb_url;
    }

    public get_id() {
        return this.id;
    }

    public get_photo_width() {
        return this.photo_width;
    }

    public get_photo_height() {
        return this.photo_height;
    }

    public get_input_message_content() {
        return this.input_message_content;
    }

    public get_description() {
        return this.description;
    }

    public get_caption() {
        return this.caption;
    }

    public get_parse_mode() {
        return this.parse_mode;
    }

    public get_reply_markup() {
        return this.reply_markup;
    }

    public get_title() {
        return this.title;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_photo_url(photo_url: string) {
        this.photo_url = photo_url;
        return this;
    }

    public set_thumb_url(thumb_url: string) {
        this.thumb_url = thumb_url;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_photo_width(photo_width: number) {
        this.photo_width = photo_width;
        return this;
    }

    public set_photo_height(photo_height: number) {
        this.photo_height = photo_height;
        return this;
    }

    public set_input_message_content(input_message_content: any) {
        this.input_message_content = input_message_content;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
        return this;
    }

    public set_caption(caption: string) {
        this.caption = caption;
        return this;
    }

    public set_parse_mode(parse_mode: string) {
        this.parse_mode = parse_mode;
        return this;
    }

    public set_reply_markup(reply_markup: InlineKeyboardMarkup) {
        this.reply_markup = reply_markup;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'photo_url': this.get_photo_url(),
                'thumb_url': this.get_thumb_url(),
                'id': this.get_id(),
                'photo_width': this.get_photo_width(),
                'photo_height': this.get_photo_height(),
                'input_message_content': this.get_input_message_content(),
                'description': this.get_description(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'title': this.get_title(),
        };
    }

}
