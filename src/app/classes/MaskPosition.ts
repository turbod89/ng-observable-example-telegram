export class MaskPosition {

    /* fromJson */

    public static fromJson (json) {
        return new MaskPosition(
                json['point'] ? json['point'] : null,
                json['x_shift'] ? json['x_shift'] : null,
                json['y_shift'] ? json['y_shift'] : null,
                json['scale'] ? json['scale'] : null,
        );
    }


    /* Constructor */

    constructor (
        private point: string,
        private x_shift: number,
        private y_shift: number,
        private scale: number,
    ) {}


    /* Getters*/

    public get_point() {
        return this.point;
    }

    public get_x_shift() {
        return this.x_shift;
    }

    public get_y_shift() {
        return this.y_shift;
    }

    public get_scale() {
        return this.scale;
    }


    /* Setters*/

    public set_point(point: string) {
        this.point = point;
        return this;
    }

    public set_x_shift(x_shift: number) {
        this.x_shift = x_shift;
        return this;
    }

    public set_y_shift(y_shift: number) {
        this.y_shift = y_shift;
        return this;
    }

    public set_scale(scale: number) {
        this.scale = scale;
        return this;
    }


    /* toArray */

    public toArray (deep: number = -1) {

        if (deep === 0) {
            return {};
        }

        return {
                'point': this.get_point(),
                'x_shift': this.get_x_shift(),
                'y_shift': this.get_y_shift(),
                'scale': this.get_scale(),
        };
    }

}
