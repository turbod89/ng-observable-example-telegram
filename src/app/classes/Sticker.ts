import { PhotoSize } from './PhotoSize';
import { MaskPosition } from './MaskPosition';



export class Sticker {

    /* fromJson */

    public static fromJson (json) {
        return new Sticker(
                json['file_id'] ? json['file_id'] : null,
                json['width'] ? json['width'] : null,
                json['height'] ? json['height'] : null,
                json['thumb'] ? PhotoSize.fromJson(json['thumb']) : null,
                json['emoji'] ? json['emoji'] : null,
                json['set_name'] ? json['set_name'] : null,
                json['mask_position'] ? MaskPosition.fromJson(json['mask_position']) : null,
                json['file_size'] ? json['file_size'] : null,
        );
    }


    /* Constructor */

    constructor (
        private file_id: string,
        private width: number,
        private height: number,
        private thumb: PhotoSize = null,
        private emoji: string = null,
        private set_name: string = null,
        private mask_position: MaskPosition = null,
        private file_size: number = null,
    ) {}


    /* Getters*/

    public get_file_id() {
        return this.file_id;
    }

    public get_width() {
        return this.width;
    }

    public get_height() {
        return this.height;
    }

    public get_thumb() {
        return this.thumb;
    }

    public get_emoji() {
        return this.emoji;
    }

    public get_set_name() {
        return this.set_name;
    }

    public get_mask_position() {
        return this.mask_position;
    }

    public get_file_size() {
        return this.file_size;
    }


    /* Setters*/

    public set_file_id(file_id: string) {
        this.file_id = file_id;
        return this;
    }

    public set_width(width: number) {
        this.width = width;
        return this;
    }

    public set_height(height: number) {
        this.height = height;
        return this;
    }

    public set_thumb(thumb: PhotoSize) {
        this.thumb = thumb;
        return this;
    }

    public set_emoji(emoji: string) {
        this.emoji = emoji;
        return this;
    }

    public set_set_name(set_name: string) {
        this.set_name = set_name;
        return this;
    }

    public set_mask_position(mask_position: MaskPosition) {
        this.mask_position = mask_position;
        return this;
    }

    public set_file_size(file_size: number) {
        this.file_size = file_size;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'file_id': this.get_file_id(),
                'width': this.get_width(),
                'height': this.get_height(),
                'thumb': this.get_thumb().toArray(deep - 1),
                'emoji': this.get_emoji(),
                'set_name': this.get_set_name(),
                'mask_position': this.get_mask_position().toArray(deep - 1),
                'file_size': this.get_file_size(),
        };
    }

}
