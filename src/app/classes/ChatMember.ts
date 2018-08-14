import { User } from './User';



export class ChatMember {

    /* fromJson */

    public static fromJson (json) {
        return new ChatMember(
                json['user'] ? User.fromJson(json['user']) : null,
                json['status'] ? json['status'] : null,
                json['until_date'] ? json['until_date'] : null,
                json['can_be_edited'] ? json['can_be_edited'] : null,
                json['can_change_info'] ? json['can_change_info'] : null,
                json['can_post_messages'] ? json['can_post_messages'] : null,
                json['can_edit_messages'] ? json['can_edit_messages'] : null,
                json['can_delete_messages'] ? json['can_delete_messages'] : null,
                json['can_add_web_page_previews'] ? json['can_add_web_page_previews'] : null,
                json['can_restrict_members'] ? json['can_restrict_members'] : null,
                json['can_pin_messages'] ? json['can_pin_messages'] : null,
                json['can_promote_members'] ? json['can_promote_members'] : null,
                json['can_send_messages'] ? json['can_send_messages'] : null,
                json['can_send_media_messages'] ? json['can_send_media_messages'] : null,
                json['can_send_other_messages'] ? json['can_send_other_messages'] : null,
                json['can_invite_users'] ? json['can_invite_users'] : null,
        );
    }


    /* Constructor */

    constructor (
        private user: User,
        private status: string,
        private until_date: number = null,
        private can_be_edited: boolean = null,
        private can_change_info: boolean = null,
        private can_post_messages: boolean = null,
        private can_edit_messages: boolean = null,
        private can_delete_messages: boolean = null,
        private can_add_web_page_previews: boolean = null,
        private can_restrict_members: boolean = null,
        private can_pin_messages: boolean = null,
        private can_promote_members: boolean = null,
        private can_send_messages: boolean = null,
        private can_send_media_messages: boolean = null,
        private can_send_other_messages: boolean = null,
        private can_invite_users: boolean = null,
    ) {}


    /* Getters*/

    public get_user() {
        return this.user;
    }

    public get_status() {
        return this.status;
    }

    public get_until_date() {
        return this.until_date;
    }

    public get_can_be_edited() {
        return this.can_be_edited;
    }

    public get_can_change_info() {
        return this.can_change_info;
    }

    public get_can_post_messages() {
        return this.can_post_messages;
    }

    public get_can_edit_messages() {
        return this.can_edit_messages;
    }

    public get_can_delete_messages() {
        return this.can_delete_messages;
    }

    public get_can_add_web_page_previews() {
        return this.can_add_web_page_previews;
    }

    public get_can_restrict_members() {
        return this.can_restrict_members;
    }

    public get_can_pin_messages() {
        return this.can_pin_messages;
    }

    public get_can_promote_members() {
        return this.can_promote_members;
    }

    public get_can_send_messages() {
        return this.can_send_messages;
    }

    public get_can_send_media_messages() {
        return this.can_send_media_messages;
    }

    public get_can_send_other_messages() {
        return this.can_send_other_messages;
    }

    public get_can_invite_users() {
        return this.can_invite_users;
    }


    /* Setters*/

    public set_user(user: User) {
        this.user = user;
        return this;
    }

    public set_status(status: string) {
        this.status = status;
        return this;
    }

    public set_until_date(until_date: number) {
        this.until_date = until_date;
        return this;
    }

    public set_can_be_edited(can_be_edited: boolean) {
        this.can_be_edited = can_be_edited;
        return this;
    }

    public set_can_change_info(can_change_info: boolean) {
        this.can_change_info = can_change_info;
        return this;
    }

    public set_can_post_messages(can_post_messages: boolean) {
        this.can_post_messages = can_post_messages;
        return this;
    }

    public set_can_edit_messages(can_edit_messages: boolean) {
        this.can_edit_messages = can_edit_messages;
        return this;
    }

    public set_can_delete_messages(can_delete_messages: boolean) {
        this.can_delete_messages = can_delete_messages;
        return this;
    }

    public set_can_add_web_page_previews(can_add_web_page_previews: boolean) {
        this.can_add_web_page_previews = can_add_web_page_previews;
        return this;
    }

    public set_can_restrict_members(can_restrict_members: boolean) {
        this.can_restrict_members = can_restrict_members;
        return this;
    }

    public set_can_pin_messages(can_pin_messages: boolean) {
        this.can_pin_messages = can_pin_messages;
        return this;
    }

    public set_can_promote_members(can_promote_members: boolean) {
        this.can_promote_members = can_promote_members;
        return this;
    }

    public set_can_send_messages(can_send_messages: boolean) {
        this.can_send_messages = can_send_messages;
        return this;
    }

    public set_can_send_media_messages(can_send_media_messages: boolean) {
        this.can_send_media_messages = can_send_media_messages;
        return this;
    }

    public set_can_send_other_messages(can_send_other_messages: boolean) {
        this.can_send_other_messages = can_send_other_messages;
        return this;
    }

    public set_can_invite_users(can_invite_users: boolean) {
        this.can_invite_users = can_invite_users;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'user': this.get_user().toArray(deep - 1),
                'status': this.get_status(),
                'until_date': this.get_until_date(),
                'can_be_edited': this.get_can_be_edited(),
                'can_change_info': this.get_can_change_info(),
                'can_post_messages': this.get_can_post_messages(),
                'can_edit_messages': this.get_can_edit_messages(),
                'can_delete_messages': this.get_can_delete_messages(),
                'can_add_web_page_previews': this.get_can_add_web_page_previews(),
                'can_restrict_members': this.get_can_restrict_members(),
                'can_pin_messages': this.get_can_pin_messages(),
                'can_promote_members': this.get_can_promote_members(),
                'can_send_messages': this.get_can_send_messages(),
                'can_send_media_messages': this.get_can_send_media_messages(),
                'can_send_other_messages': this.get_can_send_other_messages(),
                'can_invite_users': this.get_can_invite_users(),
        };
    }

}
