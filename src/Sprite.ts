
export class Sprite {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    // Getter for x position
    get x(): number {
        return this._x;
    }

    // Setter for x position
    set x(value: number) {
        this._x = value;
    }

    // Getter for y position
    get y(): number {
        return this._y;
    }

    // Setter for y position
    set y(value: number) {
        this._y = value;
    }
}
