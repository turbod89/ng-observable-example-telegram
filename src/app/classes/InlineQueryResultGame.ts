import { InlineKeyboardMarkup } from './InlineKeyboardMarkup';



export class InlineQueryResultGame {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQueryResultGame(
                json['type'] ? json['type'] : null,
                json['id'] ? json['id'] : null,
                json['game_short_name'] ? json['game_short_name'] : null,
                json['reply_markup'] ? InlineKeyboardMarkup.fromJson(json['reply_markup']) : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private id: string,
        private game_short_name: string,
        private reply_markup: InlineKeyboardMarkup = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_id() {
        return this.id;
    }

    public get_game_short_name() {
        return this.game_short_name;
    }

    public get_reply_markup() {
        return this.reply_markup;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_game_short_name(game_short_name: string) {
        this.game_short_name = game_short_name;
        return this;
    }

    public set_reply_markup(reply_markup: InlineKeyboardMarkup) {
        this.reply_markup = reply_markup;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'id': this.get_id(),
                'game_short_name': this.get_game_short_name(),
                'reply_markup': this.get_reply_markup().toArray(deep - 1),
        };
    }

}
