import { InlineKeyboardButton } from './InlineKeyboardButton';



export class InlineKeyboardMarkup {

    /* fromJson */

    public static fromJson (json) {
        return new InlineKeyboardMarkup(
                json['inline_keyboard'] ? json['inline_keyboard'].map( element => element.map( element => InlineKeyboardButton.fromJson(element) ) ) : null,
        );
    }


    /* Constructor */

    constructor (
        private inline_keyboard: InlineKeyboardButton[][],
    ) {}


    /* Getters*/

    public get_inline_keyboard() {
        return this.inline_keyboard;
    }


    /* Setters*/

    public set_inline_keyboard(inline_keyboard: InlineKeyboardButton[][]) {
        this.inline_keyboard = inline_keyboard;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'inline_keyboard': this.get_inline_keyboard().map( element => element.map( element => element.toArray(deep - 1) ) ),
        };
    }

}
