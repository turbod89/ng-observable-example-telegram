import { ChatPhoto } from './ChatPhoto';
import { Message } from './Message';



export class Chat {

    /* fromJson */

    public static fromJson (json) {
        return new Chat(
                json['id'] ? json['id'] : null,
                json['type'] ? json['type'] : null,
                json['title'] ? json['title'] : null,
                json['username'] ? json['username'] : null,
                json['first_name'] ? json['first_name'] : null,
                json['last_name'] ? json['last_name'] : null,
                json['can_set_sticker_set'] ? json['can_set_sticker_set'] : null,
                json['photo'] ? ChatPhoto.fromJson(json['photo']) : null,
                json['description'] ? json['description'] : null,
                json['invite_link'] ? json['invite_link'] : null,
                json['pinned_message'] ? Message.fromJson(json['pinned_message']) : null,
                json['sticker_set_name'] ? json['sticker_set_name'] : null,
                json['all_members_are_administrators'] ? json['all_members_are_administrators'] : null,
        );
    }


    /* Constructor */

    constructor (
        private id: number,
        private type: string,
        private title: string = null,
        private username: string = null,
        private first_name: string = null,
        private last_name: string = null,
        private can_set_sticker_set: boolean = null,
        private photo: ChatPhoto = null,
        private description: string = null,
        private invite_link: string = null,
        private pinned_message: Message = null,
        private sticker_set_name: string = null,
        private all_members_are_administrators: boolean = null,
    ) {}


    /* Getters*/

    public get_id() {
        return this.id;
    }

    public get_type() {
        return this.type;
    }

    public get_title() {
        return this.title;
    }

    public get_username() {
        return this.username;
    }

    public get_first_name() {
        return this.first_name;
    }

    public get_last_name() {
        return this.last_name;
    }

    public get_can_set_sticker_set() {
        return this.can_set_sticker_set;
    }

    public get_photo() {
        return this.photo;
    }

    public get_description() {
        return this.description;
    }

    public get_invite_link() {
        return this.invite_link;
    }

    public get_pinned_message() {
        return this.pinned_message;
    }

    public get_sticker_set_name() {
        return this.sticker_set_name;
    }

    public get_all_members_are_administrators() {
        return this.all_members_are_administrators;
    }


    /* Setters*/

    public set_id(id: number) {
        this.id = id;
        return this;
    }

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_username(username: string) {
        this.username = username;
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

    public set_can_set_sticker_set(can_set_sticker_set: boolean) {
        this.can_set_sticker_set = can_set_sticker_set;
        return this;
    }

    public set_photo(photo: ChatPhoto) {
        this.photo = photo;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
        return this;
    }

    public set_invite_link(invite_link: string) {
        this.invite_link = invite_link;
        return this;
    }

    public set_pinned_message(pinned_message: Message) {
        this.pinned_message = pinned_message;
        return this;
    }

    public set_sticker_set_name(sticker_set_name: string) {
        this.sticker_set_name = sticker_set_name;
        return this;
    }

    public set_all_members_are_administrators(all_members_are_administrators: boolean) {
        this.all_members_are_administrators = all_members_are_administrators;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'id': this.get_id(),
                'type': this.get_type(),
                'title': this.get_title(),
                'username': this.get_username(),
                'first_name': this.get_first_name(),
                'last_name': this.get_last_name(),
                'can_set_sticker_set': this.get_can_set_sticker_set(),
                'photo': this.get_photo().toArray(deep - 1),
                'description': this.get_description(),
                'invite_link': this.get_invite_link(),
                'pinned_message': this.get_pinned_message().toArray(deep - 1),
                'sticker_set_name': this.get_sticker_set_name(),
                'all_members_are_administrators': this.get_all_members_are_administrators(),
        };
    }

}
