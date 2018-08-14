export class InputMediaAudio {

    /* fromJson */

    public static fromJson (json) {
        return new InputMediaAudio(
                json['type'] ? json['type'] : null,
                json['media'] ? json['media'] : null,
                json['thumb'] ? json['thumb'] : null,
                json['caption'] ? json['caption'] : null,
                json['parse_mode'] ? json['parse_mode'] : null,
                json['duration'] ? json['duration'] : null,
                json['performer'] ? json['performer'] : null,
                json['title'] ? json['title'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private media: string,
        private thumb: any = null,
        private caption: string = null,
        private parse_mode: string = null,
        private duration: number = null,
        private performer: string = null,
        private title: string = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_media() {
        return this.media;
    }

    public get_thumb() {
        return this.thumb;
    }

    public get_caption() {
        return this.caption;
    }

    public get_parse_mode() {
        return this.parse_mode;
    }

    public get_duration() {
        return this.duration;
    }

    public get_performer() {
        return this.performer;
    }

    public get_title() {
        return this.title;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_media(media: string) {
        this.media = media;
        return this;
    }

    public set_thumb(thumb: any) {
        this.thumb = thumb;
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

    public set_duration(duration: number) {
        this.duration = duration;
        return this;
    }

    public set_performer(performer: string) {
        this.performer = performer;
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
                'media': this.get_media(),
                'thumb': this.get_thumb(),
                'caption': this.get_caption(),
                'parse_mode': this.get_parse_mode(),
                'duration': this.get_duration(),
                'performer': this.get_performer(),
                'title': this.get_title(),
        };
    }

}
