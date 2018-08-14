import { Chat } from './Chat';
import { PassportData } from './PassportData';
import { User } from './User';
import { MessageEntity } from './MessageEntity';
import { Audio } from './Audio';
import { Document } from './Document';
import { Animation } from './Animation';
import { Game } from './Game';
import { PhotoSize } from './PhotoSize';
import { Sticker } from './Sticker';
import { Voice } from './Voice';
import { VideoNote } from './VideoNote';
import { Contact } from './Contact';
import { Location } from './Location';
import { Venue } from './Venue';
import { Invoice } from './Invoice';
import { SuccessfulPayment } from './SuccessfulPayment';
import { Video } from './Video';



export class Message {

    /* fromJson */

    public static fromJson (json) {
        return new Message(
                json['message_id'] ? json['message_id'] : null,
                json['date'] ? json['date'] : null,
                json['chat'] ? Chat.fromJson(json['chat']) : null,
                json['passport_data'] ? PassportData.fromJson(json['passport_data']) : null,
                json['forward_from'] ? User.fromJson(json['forward_from']) : null,
                json['forward_from_chat'] ? Chat.fromJson(json['forward_from_chat']) : null,
                json['forward_from_message_id'] ? json['forward_from_message_id'] : null,
                json['forward_signature'] ? json['forward_signature'] : null,
                json['forward_date'] ? json['forward_date'] : null,
                json['reply_to_message'] ? Message.fromJson(json['reply_to_message']) : null,
                json['edit_date'] ? json['edit_date'] : null,
                json['media_group_id'] ? json['media_group_id'] : null,
                json['author_signature'] ? json['author_signature'] : null,
                json['text'] ? json['text'] : null,
                json['entities'] ? json['entities'].map( element => MessageEntity.fromJson(element) ) : null,
                json['caption_entities'] ? json['caption_entities'].map( element => MessageEntity.fromJson(element) ) : null,
                json['audio'] ? Audio.fromJson(json['audio']) : null,
                json['document'] ? Document.fromJson(json['document']) : null,
                json['animation'] ? Animation.fromJson(json['animation']) : null,
                json['game'] ? Game.fromJson(json['game']) : null,
                json['photo'] ? json['photo'].map( element => PhotoSize.fromJson(element) ) : null,
                json['sticker'] ? Sticker.fromJson(json['sticker']) : null,
                json['from'] ? User.fromJson(json['from']) : null,
                json['voice'] ? Voice.fromJson(json['voice']) : null,
                json['video_note'] ? VideoNote.fromJson(json['video_note']) : null,
                json['caption'] ? json['caption'] : null,
                json['contact'] ? Contact.fromJson(json['contact']) : null,
                json['location'] ? Location.fromJson(json['location']) : null,
                json['venue'] ? Venue.fromJson(json['venue']) : null,
                json['new_chat_members'] ? json['new_chat_members'].map( element => User.fromJson(element) ) : null,
                json['left_chat_member'] ? User.fromJson(json['left_chat_member']) : null,
                json['new_chat_title'] ? json['new_chat_title'] : null,
                json['new_chat_photo'] ? json['new_chat_photo'].map( element => PhotoSize.fromJson(element) ) : null,
                json['delete_chat_photo'] ? json['delete_chat_photo'] : null,
                json['group_chat_created'] ? json['group_chat_created'] : null,
                json['supergroup_chat_created'] ? json['supergroup_chat_created'] : null,
                json['channel_chat_created'] ? json['channel_chat_created'] : null,
                json['migrate_to_chat_id'] ? json['migrate_to_chat_id'] : null,
                json['migrate_from_chat_id'] ? json['migrate_from_chat_id'] : null,
                json['pinned_message'] ? Message.fromJson(json['pinned_message']) : null,
                json['invoice'] ? Invoice.fromJson(json['invoice']) : null,
                json['successful_payment'] ? SuccessfulPayment.fromJson(json['successful_payment']) : null,
                json['connected_website'] ? json['connected_website'] : null,
                json['video'] ? Video.fromJson(json['video']) : null,
        );
    }


    /* Constructor */

    constructor (
        private message_id: number,
        private date: number,
        private chat: Chat,
        private passport_data: PassportData = null,
        private forward_from: User = null,
        private forward_from_chat: Chat = null,
        private forward_from_message_id: number = null,
        private forward_signature: string = null,
        private forward_date: number = null,
        private reply_to_message: Message = null,
        private edit_date: number = null,
        private media_group_id: string = null,
        private author_signature: string = null,
        private text: string = null,
        private entities: MessageEntity[] = null,
        private caption_entities: MessageEntity[] = null,
        private audio: Audio = null,
        private document: Document = null,
        private animation: Animation = null,
        private game: Game = null,
        private photo: PhotoSize[] = null,
        private sticker: Sticker = null,
        private from: User = null,
        private voice: Voice = null,
        private video_note: VideoNote = null,
        private caption: string = null,
        private contact: Contact = null,
        private location: Location = null,
        private venue: Venue = null,
        private new_chat_members: User[] = null,
        private left_chat_member: User = null,
        private new_chat_title: string = null,
        private new_chat_photo: PhotoSize[] = null,
        private delete_chat_photo: boolean = null,
        private group_chat_created: boolean = null,
        private supergroup_chat_created: boolean = null,
        private channel_chat_created: boolean = null,
        private migrate_to_chat_id: number = null,
        private migrate_from_chat_id: number = null,
        private pinned_message: Message = null,
        private invoice: Invoice = null,
        private successful_payment: SuccessfulPayment = null,
        private connected_website: string = null,
        private video: Video = null,
    ) {}


    /* Getters*/

    public get_message_id() {
        return this.message_id;
    }

    public get_date() {
        return this.date;
    }

    public get_chat() {
        return this.chat;
    }

    public get_passport_data() {
        return this.passport_data;
    }

    public get_forward_from() {
        return this.forward_from;
    }

    public get_forward_from_chat() {
        return this.forward_from_chat;
    }

    public get_forward_from_message_id() {
        return this.forward_from_message_id;
    }

    public get_forward_signature() {
        return this.forward_signature;
    }

    public get_forward_date() {
        return this.forward_date;
    }

    public get_reply_to_message() {
        return this.reply_to_message;
    }

    public get_edit_date() {
        return this.edit_date;
    }

    public get_media_group_id() {
        return this.media_group_id;
    }

    public get_author_signature() {
        return this.author_signature;
    }

    public get_text() {
        return this.text;
    }

    public get_entities() {
        return this.entities;
    }

    public get_caption_entities() {
        return this.caption_entities;
    }

    public get_audio() {
        return this.audio;
    }

    public get_document() {
        return this.document;
    }

    public get_animation() {
        return this.animation;
    }

    public get_game() {
        return this.game;
    }

    public get_photo() {
        return this.photo;
    }

    public get_sticker() {
        return this.sticker;
    }

    public get_from() {
        return this.from;
    }

    public get_voice() {
        return this.voice;
    }

    public get_video_note() {
        return this.video_note;
    }

    public get_caption() {
        return this.caption;
    }

    public get_contact() {
        return this.contact;
    }

    public get_location() {
        return this.location;
    }

    public get_venue() {
        return this.venue;
    }

    public get_new_chat_members() {
        return this.new_chat_members;
    }

    public get_left_chat_member() {
        return this.left_chat_member;
    }

    public get_new_chat_title() {
        return this.new_chat_title;
    }

    public get_new_chat_photo() {
        return this.new_chat_photo;
    }

    public get_delete_chat_photo() {
        return this.delete_chat_photo;
    }

    public get_group_chat_created() {
        return this.group_chat_created;
    }

    public get_supergroup_chat_created() {
        return this.supergroup_chat_created;
    }

    public get_channel_chat_created() {
        return this.channel_chat_created;
    }

    public get_migrate_to_chat_id() {
        return this.migrate_to_chat_id;
    }

    public get_migrate_from_chat_id() {
        return this.migrate_from_chat_id;
    }

    public get_pinned_message() {
        return this.pinned_message;
    }

    public get_invoice() {
        return this.invoice;
    }

    public get_successful_payment() {
        return this.successful_payment;
    }

    public get_connected_website() {
        return this.connected_website;
    }

    public get_video() {
        return this.video;
    }


    /* Setters*/

    public set_message_id(message_id: number) {
        this.message_id = message_id;
        return this;
    }

    public set_date(date: number) {
        this.date = date;
        return this;
    }

    public set_chat(chat: Chat) {
        this.chat = chat;
        return this;
    }

    public set_passport_data(passport_data: PassportData) {
        this.passport_data = passport_data;
        return this;
    }

    public set_forward_from(forward_from: User) {
        this.forward_from = forward_from;
        return this;
    }

    public set_forward_from_chat(forward_from_chat: Chat) {
        this.forward_from_chat = forward_from_chat;
        return this;
    }

    public set_forward_from_message_id(forward_from_message_id: number) {
        this.forward_from_message_id = forward_from_message_id;
        return this;
    }

    public set_forward_signature(forward_signature: string) {
        this.forward_signature = forward_signature;
        return this;
    }

    public set_forward_date(forward_date: number) {
        this.forward_date = forward_date;
        return this;
    }

    public set_reply_to_message(reply_to_message: Message) {
        this.reply_to_message = reply_to_message;
        return this;
    }

    public set_edit_date(edit_date: number) {
        this.edit_date = edit_date;
        return this;
    }

    public set_media_group_id(media_group_id: string) {
        this.media_group_id = media_group_id;
        return this;
    }

    public set_author_signature(author_signature: string) {
        this.author_signature = author_signature;
        return this;
    }

    public set_text(text: string) {
        this.text = text;
        return this;
    }

    public set_entities(entities: MessageEntity[]) {
        this.entities = entities;
        return this;
    }

    public set_caption_entities(caption_entities: MessageEntity[]) {
        this.caption_entities = caption_entities;
        return this;
    }

    public set_audio(audio: Audio) {
        this.audio = audio;
        return this;
    }

    public set_document(document: Document) {
        this.document = document;
        return this;
    }

    public set_animation(animation: Animation) {
        this.animation = animation;
        return this;
    }

    public set_game(game: Game) {
        this.game = game;
        return this;
    }

    public set_photo(photo: PhotoSize[]) {
        this.photo = photo;
        return this;
    }

    public set_sticker(sticker: Sticker) {
        this.sticker = sticker;
        return this;
    }

    public set_from(from: User) {
        this.from = from;
        return this;
    }

    public set_voice(voice: Voice) {
        this.voice = voice;
        return this;
    }

    public set_video_note(video_note: VideoNote) {
        this.video_note = video_note;
        return this;
    }

    public set_caption(caption: string) {
        this.caption = caption;
        return this;
    }

    public set_contact(contact: Contact) {
        this.contact = contact;
        return this;
    }

    public set_location(location: Location) {
        this.location = location;
        return this;
    }

    public set_venue(venue: Venue) {
        this.venue = venue;
        return this;
    }

    public set_new_chat_members(new_chat_members: User[]) {
        this.new_chat_members = new_chat_members;
        return this;
    }

    public set_left_chat_member(left_chat_member: User) {
        this.left_chat_member = left_chat_member;
        return this;
    }

    public set_new_chat_title(new_chat_title: string) {
        this.new_chat_title = new_chat_title;
        return this;
    }

    public set_new_chat_photo(new_chat_photo: PhotoSize[]) {
        this.new_chat_photo = new_chat_photo;
        return this;
    }

    public set_delete_chat_photo(delete_chat_photo: boolean) {
        this.delete_chat_photo = delete_chat_photo;
        return this;
    }

    public set_group_chat_created(group_chat_created: boolean) {
        this.group_chat_created = group_chat_created;
        return this;
    }

    public set_supergroup_chat_created(supergroup_chat_created: boolean) {
        this.supergroup_chat_created = supergroup_chat_created;
        return this;
    }

    public set_channel_chat_created(channel_chat_created: boolean) {
        this.channel_chat_created = channel_chat_created;
        return this;
    }

    public set_migrate_to_chat_id(migrate_to_chat_id: number) {
        this.migrate_to_chat_id = migrate_to_chat_id;
        return this;
    }

    public set_migrate_from_chat_id(migrate_from_chat_id: number) {
        this.migrate_from_chat_id = migrate_from_chat_id;
        return this;
    }

    public set_pinned_message(pinned_message: Message) {
        this.pinned_message = pinned_message;
        return this;
    }

    public set_invoice(invoice: Invoice) {
        this.invoice = invoice;
        return this;
    }

    public set_successful_payment(successful_payment: SuccessfulPayment) {
        this.successful_payment = successful_payment;
        return this;
    }

    public set_connected_website(connected_website: string) {
        this.connected_website = connected_website;
        return this;
    }

    public set_video(video: Video) {
        this.video = video;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'message_id': this.get_message_id(),
                'date': this.get_date(),
                'chat': this.get_chat().toArray(deep - 1),
                'passport_data': this.get_passport_data().toArray(deep - 1),
                'forward_from': this.get_forward_from().toArray(deep - 1),
                'forward_from_chat': this.get_forward_from_chat().toArray(deep - 1),
                'forward_from_message_id': this.get_forward_from_message_id(),
                'forward_signature': this.get_forward_signature(),
                'forward_date': this.get_forward_date(),
                'reply_to_message': this.get_reply_to_message().toArray(deep - 1),
                'edit_date': this.get_edit_date(),
                'media_group_id': this.get_media_group_id(),
                'author_signature': this.get_author_signature(),
                'text': this.get_text(),
                'entities': this.get_entities().map( element => element.toArray(deep - 1) ),
                'caption_entities': this.get_caption_entities().map( element => element.toArray(deep - 1) ),
                'audio': this.get_audio().toArray(deep - 1),
                'document': this.get_document().toArray(deep - 1),
                'animation': this.get_animation().toArray(deep - 1),
                'game': this.get_game().toArray(deep - 1),
                'photo': this.get_photo().map( element => element.toArray(deep - 1) ),
                'sticker': this.get_sticker().toArray(deep - 1),
                'from': this.get_from().toArray(deep - 1),
                'voice': this.get_voice().toArray(deep - 1),
                'video_note': this.get_video_note().toArray(deep - 1),
                'caption': this.get_caption(),
                'contact': this.get_contact().toArray(deep - 1),
                'location': this.get_location().toArray(deep - 1),
                'venue': this.get_venue().toArray(deep - 1),
                'new_chat_members': this.get_new_chat_members().map( element => element.toArray(deep - 1) ),
                'left_chat_member': this.get_left_chat_member().toArray(deep - 1),
                'new_chat_title': this.get_new_chat_title(),
                'new_chat_photo': this.get_new_chat_photo().map( element => element.toArray(deep - 1) ),
                'delete_chat_photo': this.get_delete_chat_photo(),
                'group_chat_created': this.get_group_chat_created(),
                'supergroup_chat_created': this.get_supergroup_chat_created(),
                'channel_chat_created': this.get_channel_chat_created(),
                'migrate_to_chat_id': this.get_migrate_to_chat_id(),
                'migrate_from_chat_id': this.get_migrate_from_chat_id(),
                'pinned_message': this.get_pinned_message().toArray(deep - 1),
                'invoice': this.get_invoice().toArray(deep - 1),
                'successful_payment': this.get_successful_payment().toArray(deep - 1),
                'connected_website': this.get_connected_website(),
                'video': this.get_video().toArray(deep - 1),
        };
    }

}
