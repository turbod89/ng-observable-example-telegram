import { KeyboardButton } from './KeyboardButton';



export class ReplyKeyboardMarkup {

    /* fromJson */

    public static fromJson (json) {
        return new ReplyKeyboardMarkup(
                json['keyboard'] ? json['keyboard'].map( element => element.map( element => KeyboardButton.fromJson(element) ) ) : null,
                json['resize_keyboard'] ? json['resize_keyboard'] : null,
                json['one_time_keyboard'] ? json['one_time_keyboard'] : null,
                json['selective'] ? json['selective'] : null,
        );
    }


    /* Constructor */

    constructor (
        private keyboard: KeyboardButton[][],
        private resize_keyboard: boolean = null,
        private one_time_keyboard: boolean = null,
        private selective: boolean = null,
    ) {}


    /* Getters*/

    public get_keyboard() {
        return this.keyboard;
    }

    public get_resize_keyboard() {
        return this.resize_keyboard;
    }

    public get_one_time_keyboard() {
        return this.one_time_keyboard;
    }

    public get_selective() {
        return this.selective;
    }


    /* Setters*/

    public set_keyboard(keyboard: KeyboardButton[][]) {
        this.keyboard = keyboard;
        return this;
    }

    public set_resize_keyboard(resize_keyboard: boolean) {
        this.resize_keyboard = resize_keyboard;
        return this;
    }

    public set_one_time_keyboard(one_time_keyboard: boolean) {
        this.one_time_keyboard = one_time_keyboard;
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
                'keyboard': this.get_keyboard().map( element => element.map( element => element.toArray(deep - 1) ) ),
                'resize_keyboard': this.get_resize_keyboard(),
                'one_time_keyboard': this.get_one_time_keyboard(),
                'selective': this.get_selective(),
        };
    }

}
