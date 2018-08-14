export class Location {

    /* fromJson */

    public static fromJson (json) {
        return new Location(
                json['longitude'] ? json['longitude'] : null,
                json['latitude'] ? json['latitude'] : null,
        );
    }


    /* Constructor */

    constructor (
        private longitude: number,
        private latitude: number,
    ) {}


    /* Getters*/

    public get_longitude() {
        return this.longitude;
    }

    public get_latitude() {
        return this.latitude;
    }


    /* Setters*/

    public set_longitude(longitude: number) {
        this.longitude = longitude;
        return this;
    }

    public set_latitude(latitude: number) {
        this.latitude = latitude;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'longitude': this.get_longitude(),
                'latitude': this.get_latitude(),
        };
    }

}
