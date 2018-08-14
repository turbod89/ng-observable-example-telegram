export class PassportFile {

    /* fromJson */

    public static fromJson (json) {
        return new PassportFile(
                json['file_id'] ? json['file_id'] : null,
                json['file_size'] ? json['file_size'] : null,
                json['file_date'] ? json['file_date'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private file_size: number,
        private file_date: number,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_file_size() {
        return this.file_size;
    }

    public get_file_date() {
        return this.file_date;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_file_size(file_size: number) {
        this.file_size = file_size;
        return this;
    }

    public set_file_date(file_date: number) {
        this.file_date = file_date;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'file_id': this.get_file_id(),
                'file_size': this.get_file_size(),
                'file_date': this.get_file_date(),
        };
    }

}
