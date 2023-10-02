"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(id, x, y, width, height, color, text) {
        this.observers = [];
        this._id = id;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this._text = text;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(property, oldValue, newValue) {
        for (const observer of this.observers) {
            observer.onPropertyChanged(property, oldValue, newValue);
        }
    }
    set id(value) {
        const oldValue = this._id;
        this._id = value;
        this.notifyObservers('id', oldValue, value);
    }
    get id() {
        return this._id;
    }
    set x(value) {
        const oldValue = this._x;
        this._x = value;
        this.notifyObservers('x', oldValue, value);
    }
    get x() {
        return this._x;
    }
    set y(value) {
        const oldValue = this._y;
        this._y = value;
        this.notifyObservers('y', oldValue, value);
    }
    get y() {
        return this._y;
    }
    set width(value) {
        const oldValue = this._width;
        this._width = value;
        this.notifyObservers('width', oldValue, value);
    }
    get width() {
        return this._width;
    }
    set height(value) {
        const oldValue = this._height;
        this._height = value;
        this.notifyObservers('height', oldValue, value);
    }
    get height() {
        return this._height;
    }
    set color(value) {
        const oldValue = this._color;
        this._color = value;
        this.notifyObservers('color', oldValue, value);
    }
    get color() {
        return this._color;
    }
    set text(value) {
        const oldValue = this._text;
        this._text = value;
        this.notifyObservers('text', oldValue, value);
    }
    get text() {
        return this._text;
    }
    delete() {
        this.notifyEntityDeleted();
    }
    notifyEntityDeleted() {
        for (const observer of this.observers) {
            observer.onEntityDeleted(this);
        }
    }
}
exports.Entity = Entity;
