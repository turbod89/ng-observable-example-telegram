import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultCachedMpeg4Gif {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultCachedMpeg4Gif(
                json['type'] ? json['type'] : null,
                json['id'] ? json['id'] : null,
                json['mpeg4_file_id'] ? json['mpeg4_file_id'] : null,
                json['title'] ? json['title'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private id: string,
        private mpeg4_file_id: string,
        private title: string = null,
        private caption: string = null,
        private parse_mode: string = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private input_message_content: any = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_id() {
        return this.id;
    }

    public get_mpeg4_file_id() {
        return this.mpeg4_file_id;
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

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_mpeg4_file_id(mpeg4_file_id: string) {
        this.mpeg4_file_id = mpeg4_file_id;
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
                'type': this.get_type(),
                'id': this.get_id(),
                'mpeg4_file_id': this.get_mpeg4_file_id(),
                'title': this.get_title(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
        };
    }

}
