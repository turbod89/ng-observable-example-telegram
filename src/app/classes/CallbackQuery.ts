import { User } from './User';
import { Message } from './Message';



export class CallbackQuery {

    /* fromJson */

    public static fromJson (json) {
        return new CallbackQuery(
                json['id'] ? json['id'] : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['chat_instance'] ? json['chat_instance'] : null,
                json['message'] ? Message.fromJson(json['message']) : null,
                json['inline_message_id'] ? json['inline_message_id'] : null,
                json['data'] ? json['data'] : null,
                json['game_short_name'] ? json['game_short_name'] : null,
        );
    }


    /* Constructor */

    constructor (
        private id: string,
        private from: User,
        private chat_instance: string,
        private message: Message = null,
        private inline_message_id: string = null,
        private data: string = null,
        private game_short_name: string = null,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_from() {
        return this.from;
    }

    public get_chat_instance() {
        return this.chat_instance;
    }

    public get_message() {
        return this.message;
    }

    public get_inline_message_id() {
        return this.inline_message_id;
    }

    public get_data() {
        return this.data;
    }

    public get_game_short_name() {
        return this.game_short_name;
    }


    /* Setters*/

    public set_id(id: string) {
        this.id = id;
        return this;
    }

    public set_from(from: User) {
        this.from = from;
        return this;
    }

    public set_chat_instance(chat_instance: string) {
        this.chat_instance = chat_instance;
        return this;
    }

    public set_message(message: Message) {
        this.message = message;
        return this;
    }

    public set_inline_message_id(inline_message_id: string) {
        this.inline_message_id = inline_message_id;
        return this;
    }

    public set_data(data: string) {
        this.data = data;
        return this;
    }

    public set_game_short_name(game_short_name: string) {
        this.game_short_name = game_short_name;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'id': this.get_id(),
                'from': this.get_from().toArray(deep - 1),
                'chat_instance': this.get_chat_instance(),
                'message': this.get_message().toArray(deep - 1),
                'inline_message_id': this.get_inline_message_id(),
                'data': this.get_data(),
                'game_short_name': this.get_game_short_name(),
        };
    }

}
