import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultDocument {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultDocument(
                json['mime_type'] ? json['mime_type'] : null,
                json['type'] ? json['type'] : null,
                json['title'] ? json['title'] : null,
                json['id'] ? json['id'] : null,
                json['document_url'] ? json['document_url'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['caption'] ? json['caption'] : null,
                json['description'] ? json['description'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
                json['thumb_url'] ? json['thumb_url'] : null,
                json['thumb_width'] ? json['thumb_width'] : null,
                json['thumb_height'] ? json['thumb_height'] : null,
        );
    }


    /* Constructor */

    constructor (
        private mime_type: string,
        private type: string,
        private title: string,
        private id: string,
        private document_url: string,
        private parse_mode: string = null,
        private caption: string = null,
        private description: string = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private input_message_content: any = null,
        private thumb_url: string = null,
        private thumb_width: number = null,
        private thumb_height: number = null,
    ) {}


    /* Getters*/

    public get_mime_type() {
        return this.mime_type;
    }

    public get_type() {
        return this.type;
    }

    public get_title() {
        return this.title;
    }

    public get_id() {
        return this.id;
    }

    public get_document_url() {
        return this.document_url;
    }

    public get_parse_mode() {
        return this.parse_mode;
    }

    public get_caption() {
        return this.caption;
    }

    public get_description() {
        return this.description;
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

    public get_thumb_height() {
        return this.thumb_height;
    }


    /* Setters*/

    public set_mime_type(mime_type: string) {
        this.mime_type = mime_type;
        return this;
    }

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_document_url(document_url: string) {
        this.document_url = document_url;
        return this;
    }

    public set_parse_mode(parse_mode: string) {
        this.parse_mode = parse_mode;
        return this;
    }

    public set_caption(caption: string) {
        this.caption = caption;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
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

    public set_thumb_height(thumb_height: number) {
        this.thumb_height = thumb_height;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'mime_type': this.get_mime_type(),
                'type': this.get_type(),
                'title': this.get_title(),
                'id': this.get_id(),
                'document_url': this.get_document_url(),
                'parse_mode': this.get_parse_mode(),
                'caption': this.get_caption(),
                'description': this.get_description(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
                'thumb_url': this.get_thumb_url(),
                'thumb_width': this.get_thumb_width(),
                'thumb_height': this.get_thumb_height(),
        };
    }

}
