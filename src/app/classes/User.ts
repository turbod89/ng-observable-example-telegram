export class User {

    /* fromJson */

    public static fromJson (json) {
        return new User(
                json['id'] ? json['id'] : null,
                json['is_bot'] ? json['is_bot'] : null,
                json['first_name'] ? json['first_name'] : null,
                json['last_name'] ? json['last_name'] : null,
                json['username'] ? json['username'] : null,
                json['language_code'] ? json['language_code'] : null,
        );
    }


    /* Constructor */

    constructor (
        private id: number,
        private is_bot: boolean,
        private first_name: string,
        private last_name: string = null,
        private username: string = null,
        private language_code: string = null,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_is_bot() {
        return this.is_bot;
    }

    public get_first_name() {
        return this.first_name;
    }

    public get_last_name() {
        return this.last_name;
    }

    public get_username() {
        return this.username;
    }

    public get_language_code() {
        return this.language_code;
    }


    /* Setters*/

    public set_id(id: number) {
        this.id = id;
        return this;
    }

    public set_is_bot(is_bot: boolean) {
        this.is_bot = is_bot;
        return this;
    }

    public set_first_name(first_name: string) {
        this.first_name = first_name;
        return this;
    }

    public set_last_name(last_name: string) {
        this.last_name = last_name;
        return this;
    }

    public set_username(username: string) {
        this.username = username;
        return this;
    }

    public set_language_code(language_code: string) {
        this.language_code = language_code;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'id': this.get_id(),
                'is_bot': this.get_is_bot(),
                'first_name': this.get_first_name(),
                'last_name': this.get_last_name(),
                'username': this.get_username(),
                'language_code': this.get_language_code(),
        };
    }

}
