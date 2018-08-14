export class ForceReply {

    /* fromJson */

    public static fromJson (json) {
        return new ForceReply(
                json['force_reply'] ? json['force_reply'] : null,
                json['selective'] ? json['selective'] : null,
        );
    }


    /* Constructor */

    constructor (
        private force_reply: boolean,
        private selective: boolean = null,
    ) {}


    /* Getters*/

    public get_force_reply() {
        return this.force_reply;
    }

    public get_selective() {
        return this.selective;
    }


    /* Setters*/

    public set_force_reply(force_reply: boolean) {
        this.force_reply = force_reply;
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
                'force_reply': this.get_force_reply(),
                'selective': this.get_selective(),
        };
    }

}
