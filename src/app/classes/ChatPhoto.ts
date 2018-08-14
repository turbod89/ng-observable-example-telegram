export class ChatPhoto {

    /* fromJson */

    public static fromJson (json) {
        return new ChatPhoto(
                json['small_file_id'] ? json['small_file_id'] : null,
                json['big_file_id'] ? json['big_file_id'] : null,
        );
    }


    /* Constructor */

    constructor (
        private small_file_id: string,
        private big_file_id: string,
    ) {}


    /* Getters*/

    public get_small_file_id() {
        return this.small_file_id;
    }

    public get_big_file_id() {
        return this.big_file_id;
    }


    /* Setters*/

    public set_small_file_id(small_file_id: string) {
        this.small_file_id = small_file_id;
        return this;
    }

    public set_big_file_id(big_file_id: string) {
        this.big_file_id = big_file_id;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'small_file_id': this.get_small_file_id(),
                'big_file_id': this.get_big_file_id(),
        };
    }

}
