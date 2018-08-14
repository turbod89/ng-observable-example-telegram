import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultGif {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultGif(
                json['thumb_url'] ? json['thumb_url'] : null,
                json['type'] ? json['type'] : null,
                json['gif_url'] ? json['gif_url'] : null,
                json['id'] ? json['id'] : null,
                json['gif_height'] ? json['gif_height'] : null,
                json['gif_duration'] ? json['gif_duration'] : null,
                json['gif_width'] ? json['gif_width'] : null,
                json['title'] ? json['title'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
        );
    }


    /* Constructor */

    constructor (
        private thumb_url: string,
        private type: string,
        private gif_url: string,
        private id: string,
        private gif_height: number = null,
        private gif_duration: number = null,
        private gif_width: number = null,
        private title: string = null,
        private caption: string = null,
        private parse_mode: string = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private input_message_content: any = null,
    ) {}


    /* Getters*/

    public get_thumb_url() {
        return this.thumb_url;
    }

    public get_type() {
        return this.type;
    }

    public get_gif_url() {
        return this.gif_url;
    }

    public get_id() {
        return this.id;
    }

    public get_gif_height() {
        return this.gif_height;
    }

    public get_gif_duration() {
        return this.gif_duration;
    }

    public get_gif_width() {
        return this.gif_width;
    }

    public get_title() {
        return this.title;
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

    public get_input_message_content() {
        return this.input_message_content;
    }


    /* Setters*/

    public set_thumb_url(thumb_url: string) {
        this.thumb_url = thumb_url;
        return this;
    }

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_gif_url(gif_url: string) {
        this.gif_url = gif_url;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_gif_height(gif_height: number) {
        this.gif_height = gif_height;
        return this;
    }

    public set_gif_duration(gif_duration: number) {
        this.gif_duration = gif_duration;
        return this;
    }

    public set_gif_width(gif_width: number) {
        this.gif_width = gif_width;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
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

    public set_input_message_content(input_message_content: any) {
        this.input_message_content = input_message_content;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'thumb_url': this.get_thumb_url(),
                'type': this.get_type(),
                'gif_url': this.get_gif_url(),
                'id': this.get_id(),
                'gif_height': this.get_gif_height(),
                'gif_duration': this.get_gif_duration(),
                'gif_width': this.get_gif_width(),
                'title': this.get_title(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
        };
    }

}
