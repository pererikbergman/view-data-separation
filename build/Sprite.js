"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprite = void 0;
class Sprite {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    // Getter for x position
    get x() {
        return this._x;
    }
    // Setter for x position
    set x(value) {
        this._x = value;
    }
    // Getter for y position
    get y() {
        return this._y;
    }
    // Setter for y position
    set y(value) {
        this._y = value;
    }
}
exports.Sprite = Sprite;
