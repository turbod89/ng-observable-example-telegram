export class InputVenueMessageContent {

    /* fromJson */

    public static fromJson (json) {
        return new InputVenueMessageContent(
                json['latitude'] ? json['latitude'] : null,
                json['longitude'] ? json['longitude'] : null,
                json['title'] ? json['title'] : null,
                json['address'] ? json['address'] : null,
                json['foursquare_id'] ? json['foursquare_id'] : null,
                json['foursquare_type'] ? json['foursquare_type'] : null,
        );
    }


    /* Constructor */

    constructor (
        private latitude: number,
        private longitude: number,
        private title: string,
        private address: string,
        private foursquare_id: string = null,
        private foursquare_type: string = null,
    ) {}


    /* Getters*/

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

    public get_foursquare_id() {
        return this.foursquare_id;
    }

    public get_foursquare_type() {
        return this.foursquare_type;
    }


    /* Setters*/

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

    public set_foursquare_id(foursquare_id: string) {
        this.foursquare_id = foursquare_id;
        return this;
    }

    public set_foursquare_type(foursquare_type: string) {
        this.foursquare_type = foursquare_type;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'latitude': this.get_latitude(),
                'longitude': this.get_longitude(),
                'title': this.get_title(),
                'address': this.get_address(),
                'foursquare_id': this.get_foursquare_id(),
                'foursquare_type': this.get_foursquare_type(),
        };
    }

}
