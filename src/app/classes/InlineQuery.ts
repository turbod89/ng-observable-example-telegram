import { User } from './User';
import { Location } from './Location';



export class InlineQuery {

    /* fromJson */

    public static fromJson (json) {
        return new InlineQuery(
                json['id'] ? json['id'] : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['query'] ? json['query'] : null,
                json['offset'] ? json['offset'] : null,
                json['location'] ? Location.fromJson(json['location']) : null,
        );
    }


    /* Constructor */

    constructor (
        private id: string,
        private from: User,
        private query: string,
        private offset: string,
        private location: Location = null,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_from() {
        return this.from;
    }

    public get_query() {
        return this.query;
    }

    public get_offset() {
        return this.offset;
    }

    public get_location() {
        return this.location;
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

    public set_query(query: string) {
        this.query = query;
        return this;
    }

    public set_offset(offset: string) {
        this.offset = offset;
        return this;
    }

    public set_location(location: Location) {
        this.location = location;
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
                'query': this.get_query(),
                'offset': this.get_offset(),
                'location': this.get_location().toArray(deep - 1),
        };
    }

}
