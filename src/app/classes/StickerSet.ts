import { Sticker } from './Sticker';



export class StickerSet {

    /* fromJson */

    public static fromJson (json) {
        return new StickerSet(
                json['name'] ? json['name'] : null,
                json['title'] ? json['title'] : null,
                json['contains_masks'] ? json['contains_masks'] : null,
                json['stickers'] ? json['stickers'].map( element => Sticker.fromJson(element) ) : null,
        );
    }


    /* Constructor */

    constructor (
        private name: string,
        private title: string,
        private contains_masks: boolean,
        private stickers: Sticker[],
    ) {}


    /* Getters*/

    public get_name() {
        return this.name;
    }

    public get_title() {
        return this.title;
    }

    public get_contains_masks() {
        return this.contains_masks;
    }

    public get_stickers() {
        return this.stickers;
    }


    /* Setters*/

    public set_name(name: string) {
        this.name = name;
        return this;
    }

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_contains_masks(contains_masks: boolean) {
        this.contains_masks = contains_masks;
        return this;
    }

    public set_stickers(stickers: Sticker[]) {
        this.stickers = stickers;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'name': this.get_name(),
                'title': this.get_title(),
                'contains_masks': this.get_contains_masks(),
                'stickers': this.get_stickers().map( element => element.toArray(deep - 1) ),
        };
    }

}
