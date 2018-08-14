import { User } from './User';



export class GameHighScore {

    /* fromJson */

    public static fromJson (json) {
        return new GameHighScore(
                json['position'] ? json['position'] : null,
                json['user'] ? User.fromJson(json['user']) : null,
                json['score'] ? json['score'] : null,
        );
    }


    /* Constructor */

    constructor (
        private position: number,
        private user: User,
        private score: number,
    ) {}


    /* Getters*/

    public get_position() {
        return this.position;
    }

    public get_user() {
        return this.user;
    }

    public get_score() {
        return this.score;
    }


    /* Setters*/

    public set_position(position: number) {
        this.position = position;
        return this;
    }

    public set_user(user: User) {
        this.user = user;
        return this;
    }

    public set_score(score: number) {
        this.score = score;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'position': this.get_position(),
                'user': this.get_user().toArray(deep - 1),
                'score': this.get_score(),
        };
    }

}
