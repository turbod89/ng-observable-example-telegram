import { User } from './User';
import { Location } from './Location';



export class ChosenInlineResult {

    /* fromJson */

    public static fromJson (json) {
        return new ChosenInlineResult(
                json['result_id'] ? json['result_id'] : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['query'] ? json['query'] : null,
                json['location'] ? Location.fromJson(json['location']) : null,
                json['inline_message_id'] ? json['inline_message_id'] : null,
        );
    }


    /* Constructor */

    constructor (
        private result_id: string,
        private from: User,
        private query: string,
        private location: Location = null,
        private inline_message_id: string = null,
    ) {}


    /* Getters*/

    public get_result_id() {
        return this.result_id;
    }

    public get_from() {
        return this.from;
    }

    public get_query() {
        return this.query;
    }

    public get_location() {
        return this.location;
    }

    public get_inline_message_id() {
        return this.inline_message_id;
    }


    /* Setters*/

    public set_result_id(result_id: string) {
        this.result_id = result_id;
        return this;
    }

    public set_from(from: User) {
        this.from = from;
        return this;
    }

    public set_query(query: string) {
        this.query = query;
        return this;
    }

    public set_location(location: Location) {
        this.location = location;
        return this;
    }

    public set_inline_message_id(inline_message_id: string) {
        this.inline_message_id = inline_message_id;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'result_id': this.get_result_id(),
                'from': this.get_from().toArray(deep - 1),
                'query': this.get_query(),
                'location': this.get_location().toArray(deep - 1),
                'inline_message_id': this.get_inline_message_id(),
        };
    }

}
