import { EncryptedPassportElement } from './EncryptedPassportElement';
import { EncryptedCredentials } from './EncryptedCredentials';



export class PassportData {

    /* fromJson */

    public static fromJson (json) {
        return new PassportData(
                json['data'] ? json['data'].map( element => EncryptedPassportElement.fromJson(element) ) : null,
                json['credentials'] ? EncryptedCredentials.fromJson(json['credentials']) : null,
        );
    }


    /* Constructor */

    constructor (
        private data: EncryptedPassportElement[],
        private credentials: EncryptedCredentials,
    ) {}


    /* Getters*/

    public get_data() {
        return this.data;
    }

    public get_credentials() {
        return this.credentials;
    }


    /* Setters*/

    public set_data(data: EncryptedPassportElement[]) {
        this.data = data;
        return this;
    }

    public set_credentials(credentials: EncryptedCredentials) {
        this.credentials = credentials;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'data': this.get_data().map( element => element.toArray(deep - 1) ),
                'credentials': this.get_credentials().toArray(deep - 1),
        };
    }

}
