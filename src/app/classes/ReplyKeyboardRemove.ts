export class ReplyKeyboardRemove {

    /* fromJson */

    public static fromJson (json) {
        return new ReplyKeyboardRemove(
                json['remove_keyboard'] ? json['remove_keyboard'] : null,
                json['selective'] ? json['selective'] : null,
        );
    }


    /* Constructor */

    constructor (
        private remove_keyboard: boolean,
        private selective: boolean = null,
    ) {}


    /* Getters*/

    public get_remove_keyboard() {
        return this.remove_keyboard;
    }

    public get_selective() {
        return this.selective;
    }


    /* Setters*/

    public set_remove_keyboard(remove_keyboard: boolean) {
        this.remove_keyboard = remove_keyboard;
        return this;
    }

    public set_selective(selective: boolean) {
        this.selective = selective;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'remove_keyboard': this.get_remove_keyboard(),
                'selective': this.get_selective(),
        };
    }

}
