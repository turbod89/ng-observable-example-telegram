import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultMpeg4Gif {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultMpeg4Gif(
                json['thumb_url'] ? json['thumb_url'] : null,
                json['type'] ? json['type'] : null,
                json['mpeg4_url'] ? json['mpeg4_url'] : null,
                json['id'] ? json['id'] : null,
                json['mpeg4_height'] ? json['mpeg4_height'] : null,
                json['mpeg4_duration'] ? json['mpeg4_duration'] : null,
                json['mpeg4_width'] ? json['mpeg4_width'] : null,
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
        private mpeg4_url: string,
        private id: string,
        private mpeg4_height: number = null,
        private mpeg4_duration: number = null,
        private mpeg4_width: number = null,
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

    public get_mpeg4_url() {
        return this.mpeg4_url;
    }

    public get_id() {
        return this.id;
    }

    public get_mpeg4_height() {
        return this.mpeg4_height;
    }

    public get_mpeg4_duration() {
        return this.mpeg4_duration;
    }

    public get_mpeg4_width() {
        return this.mpeg4_width;
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

    public set_mpeg4_url(mpeg4_url: string) {
        this.mpeg4_url = mpeg4_url;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_mpeg4_height(mpeg4_height: number) {
        this.mpeg4_height = mpeg4_height;
        return this;
    }

    public set_mpeg4_duration(mpeg4_duration: number) {
        this.mpeg4_duration = mpeg4_duration;
        return this;
    }

    public set_mpeg4_width(mpeg4_width: number) {
        this.mpeg4_width = mpeg4_width;
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
                'mpeg4_url': this.get_mpeg4_url(),
                'id': this.get_id(),
                'mpeg4_height': this.get_mpeg4_height(),
                'mpeg4_duration': this.get_mpeg4_duration(),
                'mpeg4_width': this.get_mpeg4_width(),
                'title': this.get_title(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
        };
    }

}
