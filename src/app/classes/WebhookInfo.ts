export class WebhookInfo {

    /* fromJson */

    public static fromJson (json) {
        return new WebhookInfo(
                json['url'] ? json['url'] : null,
                json['has_custom_certificate'] ? json['has_custom_certificate'] : null,
                json['pending_update_count'] ? json['pending_update_count'] : null,
                json['last_error_date'] ? json['last_error_date'] : null,
                json['last_error_message'] ? json['last_error_message'] : null,
                json['max_connections'] ? json['max_connections'] : null,
                json['allowed_updates'] ? json['allowed_updates'] : null,
        );
    }


    /* Constructor */

    constructor (
        private url: string,
        private has_custom_certificate: boolean,
        private pending_update_count: number,
        private last_error_date: number = null,
        private last_error_message: string = null,
        private max_connections: number = null,
        private allowed_updates: String[] = null,
    ) {}


    /* Getters*/

    public get_url() {
        return this.url;
    }

    public get_has_custom_certificate() {
        return this.has_custom_certificate;
    }

    public get_pending_update_count() {
        return this.pending_update_count;
    }

    public get_last_error_date() {
        return this.last_error_date;
    }

    public get_last_error_message() {
        return this.last_error_message;
    }

    public get_max_connections() {
        return this.max_connections;
    }

    public get_allowed_updates() {
        return this.allowed_updates;
    }


    /* Setters*/

    public set_url(url: string) {
        this.url = url;
        return this;
    }

    public set_has_custom_certificate(has_custom_certificate: boolean) {
        this.has_custom_certificate = has_custom_certificate;
        return this;
    }

    public set_pending_update_count(pending_update_count: number) {
        this.pending_update_count = pending_update_count;
        return this;
    }

    public set_last_error_date(last_error_date: number) {
        this.last_error_date = last_error_date;
        return this;
    }

    public set_last_error_message(last_error_message: string) {
        this.last_error_message = last_error_message;
        return this;
    }

    public set_max_connections(max_connections: number) {
        this.max_connections = max_connections;
        return this;
    }

    public set_allowed_updates(allowed_updates: String[]) {
        this.allowed_updates = allowed_updates;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'url': this.get_url(),
                'has_custom_certificate': this.get_has_custom_certificate(),
                'pending_update_count': this.get_pending_update_count(),
                'last_error_date': this.get_last_error_date(),
                'last_error_message': this.get_last_error_message(),
                'max_connections': this.get_max_connections(),
                'allowed_updates': this.get_allowed_updates(),
        };
    }

}
