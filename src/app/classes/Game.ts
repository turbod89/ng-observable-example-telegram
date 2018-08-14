import { PhotoSize } from './PhotoSize';
import { MessageEntity } from './MessageEntity';
import { Animation } from './Animation';



export class Game {

    /* fromJson */

    public static fromJson (json) {
        return new Game(
                json['title'] ? json['title'] : null,
                json['description'] ? json['description'] : null,
                json['photo'] ? json['photo'].map( element => PhotoSize.fromJson(element) ) : null,
                json['text'] ? json['text'] : null,
                json['text_entities'] ? json['text_entities'].map( element => MessageEntity.fromJson(element) ) : null,
                json['animation'] ? Animation.fromJson(json['animation']) : null,
        );
    }


    /* Constructor */

    constructor (
        private title: string,
        private description: string,
        private photo: PhotoSize[],
        private text: string = null,
        private text_entities: MessageEntity[] = null,
        private animation: Animation = null,
    ) {}


    /* Getters*/

    public get_title() {
        return this.title;
    }

    public get_description() {
        return this.description;
    }

    public get_photo() {
        return this.photo;
    }

    public get_text() {
        return this.text;
    }

    public get_text_entities() {
        return this.text_entities;
    }

    public get_animation() {
        return this.animation;
    }


    /* Setters*/

    public set_title(title: string) {
        this.title = title;
        return this;
    }

    public set_description(description: string) {
        this.description = description;
        return this;
    }

    public set_photo(photo: PhotoSize[]) {
        this.photo = photo;
        return this;
    }

    public set_text(text: string) {
        this.text = text;
        return this;
    }

    public set_text_entities(text_entities: MessageEntity[]) {
        this.text_entities = text_entities;
        return this;
    }

    public set_animation(animation: Animation) {
        this.animation = animation;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'title': this.get_title(),
                'description': this.get_description(),
                'photo': this.get_photo().map( element => element.toArray(deep - 1) ),
                'text': this.get_text(),
                'text_entities': this.get_text_entities().map( element => element.toArray(deep - 1) ),
                'animation': this.get_animation().toArray(deep - 1),
        };
    }

}
