import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultAudio {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultAudio(
                json['type'] ? json['type'] : null,
                json['id'] ? json['id'] : null,
                json['audio_url'] ? json['audio_url'] : null,
                json['title'] ? json['title'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['performer'] ? json['performer'] : null,
                json['audio_duration'] ? json['audio_duration'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private id: string,
        private audio_url: string,
        private title: string,
        private caption: string = null,
        private parse_mode: string = null,
        private performer: string = null,
        private audio_duration: number = null,
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

    public get_audio_url() {
        return this.audio_url;
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

    public get_performer() {
        return this.performer;
    }

    public get_audio_duration() {
        return this.audio_duration;
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

    public set_audio_url(audio_url: string) {
        this.audio_url = audio_url;
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

    public set_performer(performer: string) {
        this.performer = performer;
        return this;
    }

    public set_audio_duration(audio_duration: number) {
        this.audio_duration = audio_duration;
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
                'audio_url': this.get_audio_url(),
                'title': this.get_title(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'performer': this.get_performer(),
                'audio_duration': this.get_audio_duration(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
        };
    }

}
