import { PassportFile } from './PassportFile';



export class EncryptedPassportElement {

    /* fromJson */

    public static fromJson (json) {
        return new EncryptedPassportElement(
                json['type'] ? json['type'] : null,
                json['data'] ? json['data'] : null,
                json['phone_number'] ? json['phone_number'] : null,
                json['email'] ? json['email'] : null,
                json['files'] ? json['files'].map( element => PassportFile.fromJson(element) ) : null,
                json['front_side'] ? PassportFile.fromJson(json['front_side']) : null,
                json['reverse_side'] ? PassportFile.fromJson(json['reverse_side']) : null,
                json['selfie'] ? PassportFile.fromJson(json['selfie']) : null,
        );
    }


    /* Constructor */

    constructor (
        private type: string,
        private data: string = null,
        private phone_number: string = null,
        private email: string = null,
        private files: PassportFile[] = null,
        private front_side: PassportFile = null,
        private reverse_side: PassportFile = null,
        private selfie: PassportFile = null,
    ) {}


    /* Getters*/

    public get_type() {
        return this.type;
    }

    public get_data() {
        return this.data;
    }

    public get_phone_number() {
        return this.phone_number;
    }

    public get_email() {
        return this.email;
    }

    public get_files() {
        return this.files;
    }

    public get_front_side() {
        return this.front_side;
    }

    public get_reverse_side() {
        return this.reverse_side;
    }

    public get_selfie() {
        return this.selfie;
    }


    /* Setters*/

    public set_type(type: string) {
        this.type = type;
        return this;
    }

    public set_data(data: string) {
        this.data = data;
        return this;
    }

    public set_phone_number(phone_number: string) {
        this.phone_number = phone_number;
        return this;
    }

    public set_email(email: string) {
        this.email = email;
        return this;
    }

    public set_files(files: PassportFile[]) {
        this.files = files;
        return this;
    }

    public set_front_side(front_side: PassportFile) {
        this.front_side = front_side;
        return this;
    }

    public set_reverse_side(reverse_side: PassportFile) {
        this.reverse_side = reverse_side;
        return this;
    }

    public set_selfie(selfie: PassportFile) {
        this.selfie = selfie;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'type': this.get_type(),
                'data': this.get_data(),
                'phone_number': this.get_phone_number(),
                'email': this.get_email(),
                'files': this.get_files().map( element => element.toArray(deep - 1) ),
                'front_side': this.get_front_side().toArray(deep - 1),
                'reverse_side': this.get_reverse_side().toArray(deep - 1),
                'selfie': this.get_selfie().toArray(deep - 1),
        };
    }

}
