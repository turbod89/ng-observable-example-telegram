import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultVoice {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultVoice(
                json['type'] ? json['type'] : null,
                json['id'] ? json['id'] : null,
                json['voice_url'] ? json['voice_url'] : null,
                json['title'] ? json['title'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['voice_duration'] ? json['voice_duration'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private id: string,
        private voice_url: string,
        private title: string,
        private caption: string = null,
        private parse_mode: string = null,
        private voice_duration: number = null,
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

    public get_voice_url() {
        return this.voice_url;
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

    public get_voice_duration() {
        return this.voice_duration;
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

    public set_voice_url(voice_url: string) {
        this.voice_url = voice_url;
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

    public set_voice_duration(voice_duration: number) {
        this.voice_duration = voice_duration;
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
                'voice_url': this.get_voice_url(),
                'title': this.get_title(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'voice_duration': this.get_voice_duration(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
        };
    }

}
