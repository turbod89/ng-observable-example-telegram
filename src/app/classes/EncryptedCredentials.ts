export class EncryptedCredentials {

    /* fromJson */

    public static fromJson (json) {
        return new EncryptedCredentials(
                json['data'] ? json['data'] : null,
                json['hash'] ? json['hash'] : null,
                json['secret'] ? json['secret'] : null,
        );
    }


    /* Constructor */

    constructor (
        private data: string,
        private hash: string,
        private secret: string,
    ) {}


    /* Getters*/

    public get_data() {
        return this.data;
    }

    public get_hash() {
        return this.hash;
    }

    public get_secret() {
        return this.secret;
    }


    /* Setters*/

    public set_data(data: string) {
        this.data = data;
        return this;
    }

    public set_hash(hash: string) {
        this.hash = hash;
        return this;
    }

    public set_secret(secret: string) {
        this.secret = secret;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'data': this.get_data(),
                'hash': this.get_hash(),
                'secret': this.get_secret(),
        };
    }

}
