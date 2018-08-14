import { User } from './User';



export class MessageEntity {

    /* fromJson */

    public static fromJson (json) {
        return new MessageEntity(
                json['type'] ? json['type'] : null,
                json['offset'] ? json['offset'] : null,
                json['length'] ? json['length'] : null,
                json['url'] ? json['url'] : null,
                json['user'] ? User.fromJson(json['user']) : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private offset: number,
        private length: number,
        private url: string = null,
        private user: User = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_offset() {
        return this.offset;
    }

    public get_length() {
        return this.length;
    }

    public get_url() {
        return this.url;
    }

    public get_user() {
        return this.user;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_offset(offset: number) {
        this.offset = offset;
        return this;
    }

    public set_length(length: number) {
        this.length = length;
        return this;
    }

    public set_url(url: string) {
        this.url = url;
        return this;
    }

    public set_user(user: User) {
        this.user = user;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'offset': this.get_offset(),
                'length': this.get_length(),
                'url': this.get_url(),
                'user': this.get_user().toArray(deep - 1),
        };
    }

}
