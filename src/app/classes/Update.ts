import { Message } from './Message';
import { InlineQuery } from './InlineQuery';
import { ChosenInlineResult } from './ChosenInlineResult';
import { CallbackQuery } from './CallbackQuery';
import { ShippingQuery } from './ShippingQuery';
import { PreCheckoutQuery } from './PreCheckoutQuery';



export class Update {

    /* fromJson */

    public static fromJson (json) {
        return new Update(
                json['update_id'] ? json['update_id'] : null,
                json['message'] ? Message.fromJson(json['message']) : null,
                json['edited_message'] ? Message.fromJson(json['edited_message']) : null,
                json['channel_post'] ? Message.fromJson(json['channel_post']) : null,
                json['edited_channel_post'] ? Message.fromJson(json['edited_channel_post']) : null,
                json['inline_query'] ? InlineQuery.fromJson(json['inline_query']) : null,
                json['chosen_inline_result'] ? ChosenInlineResult.fromJson(json['chosen_inline_result']) : null,
                json['callback_query'] ? CallbackQuery.fromJson(json['callback_query']) : null,
                json['shipping_query'] ? ShippingQuery.fromJson(json['shipping_query']) : null,
                json['pre_checkout_query'] ? PreCheckoutQuery.fromJson(json['pre_checkout_query']) : null,
        );
    }


    /* Constructor */

    constructor (
        private update_id: number,
        private message: Message = null,
        private edited_message: Message = null,
        private channel_post: Message = null,
        private edited_channel_post: Message = null,
        private inline_query: InlineQuery = null,
        private chosen_inline_result: ChosenInlineResult = null,
        private callback_query: CallbackQuery = null,
        private shipping_query: ShippingQuery = null,
        private pre_checkout_query: PreCheckoutQuery = null,
    ) {}


    /* Getters*/

    public get_update_id() {
        return this.update_id;
    }

    public get_message() {
        return this.message;
    }

    public get_edited_message() {
        return this.edited_message;
    }

    public get_channel_post() {
        return this.channel_post;
    }

    public get_edited_channel_post() {
        return this.edited_channel_post;
    }

    public get_inline_query() {
        return this.inline_query;
    }

    public get_chosen_inline_result() {
        return this.chosen_inline_result;
    }

    public get_callback_query() {
        return this.callback_query;
    }

    public get_shipping_query() {
        return this.shipping_query;
    }

    public get_pre_checkout_query() {
        return this.pre_checkout_query;
    }


    /* Setters*/

    public set_update_id(update_id: number) {
        this.update_id = update_id;
        return this;
    }

    public set_message(message: Message) {
        this.message = message;
        return this;
    }

    public set_edited_message(edited_message: Message) {
        this.edited_message = edited_message;
        return this;
    }

    public set_channel_post(channel_post: Message) {
        this.channel_post = channel_post;
        return this;
    }

    public set_edited_channel_post(edited_channel_post: Message) {
        this.edited_channel_post = edited_channel_post;
        return this;
    }

    public set_inline_query(inline_query: InlineQuery) {
        this.inline_query = inline_query;
        return this;
    }

    public set_chosen_inline_result(chosen_inline_result: ChosenInlineResult) {
        this.chosen_inline_result = chosen_inline_result;
        return this;
    }

    public set_callback_query(callback_query: CallbackQuery) {
        this.callback_query = callback_query;
        return this;
    }

    public set_shipping_query(shipping_query: ShippingQuery) {
        this.shipping_query = shipping_query;
        return this;
    }

    public set_pre_checkout_query(pre_checkout_query: PreCheckoutQuery) {
        this.pre_checkout_query = pre_checkout_query;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'update_id': this.get_update_id(),
                'message': this.get_message().toArray(deep - 1),
                'edited_message': this.get_edited_message().toArray(deep - 1),
                'channel_post': this.get_channel_post().toArray(deep - 1),
                'edited_channel_post': this.get_edited_channel_post().toArray(deep - 1),
                'inline_query': this.get_inline_query().toArray(deep - 1),
                'chosen_inline_result': this.get_chosen_inline_result().toArray(deep - 1),
                'callback_query': this.get_callback_query().toArray(deep - 1),
                'shipping_query': this.get_shipping_query().toArray(deep - 1),
                'pre_checkout_query': this.get_pre_checkout_query().toArray(deep - 1),
        };
    }

}
