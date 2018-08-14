export class PhotoSize {

    /* fromJson */

    public static fromJson (json) {
        return new PhotoSize(
                json['file_id'] ? json['file_id'] : null,
                json['width'] ? json['width'] : null,
                json['height'] ? json['height'] : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private width: number,
        private height: number,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_width() {
        return this.width;
    }

    public get_height() {
        return this.height;
    }

    public get_file_size() {
        return this.file_size;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_width(width: number) {
        this.width = width;
        return this;
    }

    public set_height(height: number) {
        this.height = height;
        return this;
    }

    public set_file_size(file_size: number) {
        this.file_size = file_size;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'file_id': this.get_file_id(),
                'width': this.get_width(),
                'height': this.get_height(),
                'file_size': this.get_file_size(),
        };
    }

}
