import { PhotoSize } from './PhotoSize';



export class UserProfilePhotos {

    /* fromJson */

    public static fromJson (json) {
        return new UserProfilePhotos(
                json['total_count'] ? json['total_count'] : null,
                json['photos'] ? json['photos'].map( element => element.map( element => PhotoSize.fromJson(element) ) ) : null,
        );
    }


    /* Constructor */

    constructor (
        private total_count: number,
        private photos: PhotoSize[][],
    ) {}


    /* Getters*/

    public get_total_count() {
        return this.total_count;
    }

    public get_photos() {
        return this.photos;
    }


    /* Setters*/

    public set_total_count(total_count: number) {
        this.total_count = total_count;
        return this;
    }

    public set_photos(photos: PhotoSize[][]) {
        this.photos = photos;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'total_count': this.get_total_count(),
                'photos': this.get_photos().map( element => element.map( element => element.toArray(deep - 1) ) ),
        };
    }

}
