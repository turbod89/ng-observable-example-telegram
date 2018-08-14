import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultVenue {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultVenue(
                json['type'] ? json['type'] : null,
                json['latitude'] ? json['latitude'] : null,
                json['longitude'] ? json['longitude'] : null,
                json['title'] ? json['title'] : null,
                json['address'] ? json['address'] : null,
                json['id'] ? json['id'] : null,
                json['thumb_height'] ? json['thumb_height'] : null,
                json['foursquare_type'] ? json['foursquare_type'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
                json['input_message_content'] ? json['input_message_content'] : null,
                json['thumb_url'] ? json['thumb_url'] : null,
                json['thumb_width'] ? json['thumb_width'] : null,
                json['foursquare_id'] ? json['foursquare_id'] : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private latitude: number,
        private longitude: number,
        private title: string,
        private address: string,
        private id: string,
        private thumb_height: number = null,
        private foursquare_type: string = null,
        private reply_markup: InlineKeyboardMarkup = null,
        private input_message_content: any = null,
        private thumb_url: string = null,
        private thumb_width: number = null,
        private foursquare_id: string = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_latitude() {
        return this.latitude;
    }

    public get_longitude() {
        return this.longitude;
    }

    public get_title() {
        return this.title;
    }

    public get_address() {
        return this.address;
    }

    public get_id() {
        return this.id;
    }

    public get_thumb_height() {
        return this.thumb_height;
    }

    public get_foursquare_type() {
        return this.foursquare_type;
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

    public get_foursquare_id() {
        return this.foursquare_id;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_latitude(latitude: number) {
        this.latitude = latitude;
        return this;
    }

    public set_longitude(longitude: number) {
        this.longitude = longitude;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_address(address: string) {
        this.address = address;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_thumb_height(thumb_height: number) {
        this.thumb_height = thumb_height;
        return this;
    }

    public set_foursquare_type(foursquare_type: string) {
        this.foursquare_type = foursquare_type;
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

    public set_foursquare_id(foursquare_id: string) {
        this.foursquare_id = foursquare_id;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'latitude': this.get_latitude(),
                'longitude': this.get_longitude(),
                'title': this.get_title(),
                'address': this.get_address(),
                'id': this.get_id(),
                'thumb_height': this.get_thumb_height(),
                'foursquare_type': this.get_foursquare_type(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
                'input_message_content': this.get_input_message_content(),
                'thumb_url': this.get_thumb_url(),
                'thumb_width': this.get_thumb_width(),
                'foursquare_id': this.get_foursquare_id(),
        };
    }

}
