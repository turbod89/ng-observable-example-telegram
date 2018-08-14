export class InputLocationMessageContent {

    /* fromJson */

    public static fromJson (json) {
        return new InputLocationMessageContent(
                json['latitude'] ? json['latitude'] : null,
                json['longitude'] ? json['longitude'] : null,
                json['live_period'] ? json['live_period'] : null,
        );
    }


    /* Constructor */

    constructor (
        private latitude: number,
        private longitude: number,
        private live_period: number = null,
    ) {}


    /* Getters*/

    public get_latitude() {
        return this.latitude;
    }

    public get_longitude() {
        return this.longitude;
    }

    public get_live_period() {
        return this.live_period;
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

    public set_live_period(live_period: number) {
        this.live_period = live_period;
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
                'live_period': this.get_live_period(),
        };
    }

}
