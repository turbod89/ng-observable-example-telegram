export class InputTextMessageContent {

    /* fromJson */

    public static fromJson (json) {
        return new InputTextMessageContent(
                json['message_text'] ? json['message_text'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['disable_web_page_preview'] ? json['disable_web_page_preview'] : null,
        );
    }


    /* Constructor */

    constructor (
        private message_text: string,
        private parse_mode: string = null,
        private disable_web_page_preview: boolean = null,
    ) {}


    /* Getters*/

    public get_message_text() {
        return this.message_text;
    }

    public get_parse_mode() {
        return this.parse_mode;
    }

    public get_disable_web_page_preview() {
        return this.disable_web_page_preview;
    }


    /* Setters*/

    public set_message_text(message_text: string) {
        this.message_text = message_text;
        return this;
    }

    public set_parse_mode(parse_mode: string) {
        this.parse_mode = parse_mode;
        return this;
    }

    public set_disable_web_page_preview(disable_web_page_preview: boolean) {
        this.disable_web_page_preview = disable_web_page_preview;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'message_text': this.get_message_text(),
                'parse_mode': this.get_parse_mode(),
                'disable_web_page_preview': this.get_disable_web_page_preview(),
        };
    }

}
