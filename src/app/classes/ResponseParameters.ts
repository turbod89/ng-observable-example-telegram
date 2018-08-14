export class ResponseParameters {

    /* fromJson */

    public static fromJson (json) {
        return new ResponseParameters(
                json['migrate_to_chat_id'] ? json['migrate_to_chat_id'] : null,
                json['retry_after'] ? json['retry_after'] : null,
        );
    }


    /* Constructor */

    constructor (
        private migrate_to_chat_id: number = null,
        private retry_after: number = null,
    ) {}


    /* Getters*/

    public get_migrate_to_chat_id() {
        return this.migrate_to_chat_id;
    }

    public get_retry_after() {
        return this.retry_after;
    }


    /* Setters*/

    public set_migrate_to_chat_id(migrate_to_chat_id: number) {
        this.migrate_to_chat_id = migrate_to_chat_id;
        return this;
    }

    public set_retry_after(retry_after: number) {
        this.retry_after = retry_after;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'migrate_to_chat_id': this.get_migrate_to_chat_id(),
                'retry_after': this.get_retry_after(),
        };
    }

}
