interface Observer {
    onPropertyChanged(property: string, oldValue: any, newValue: any): void;
    onEntityDeleted(entity: Entity): void;
}

export class Entity {
    private _id: number;
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _color: string;
    private _text: string;
    private observers: Observer[] = [];

    constructor(
        id: number,
        x: number,
        y: number,
        width: number,
        height: number,
        color: string,
        text: string
    ) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this._text = text;
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    private notifyObservers(property: string, oldValue: any, newValue: any): void {
        for (const observer of this.observers) {
            observer.onPropertyChanged(property, oldValue, newValue);
        }
    }

    set id(value: number) {
        const oldValue = this._id;
        this._id = value;
        this.notifyObservers('id', oldValue, value);
    }

    get id(): number {
        return this._id;
    }

    set x(value: number) {
        const oldValue = this._x;
        this._x = value;
        this.notifyObservers('x', oldValue, value);
    }

    get x(): number {
        return this._x;
    }

    set y(value: number) {
        const oldValue = this._y;
        this._y = value;
        this.notifyObservers('y', oldValue, value);
    }

    get y(): number {
        return this._y;
    }

    set width(value: number) {
        const oldValue = this._width;
        this._width = value;
        this.notifyObservers('width', oldValue, value);
    }

    get width(): number {
        return this._width;
    }

    set height(value: number) {
        const oldValue = this._height;
        this._height = value;
        this.notifyObservers('height', oldValue, value);
    }

    get height(): number {
        return this._height;
    }

    set color(value: string) {
        const oldValue = this._color;
        this._color = value;
        this.notifyObservers('color', oldValue, value);
    }

    get color(): string {
        return this._color;
    }

    set text(value: string) {
        const oldValue = this._text;
        this._text = value;
        this.notifyObservers('text', oldValue, value);
    }

    get text(): string {
        return this._text;
    }

    delete(): void {
        this.notifyEntityDeleted();
    }

    private notifyEntityDeleted(): void {
        for (const observer of this.observers) {
            observer.onEntityDeleted(this);
        }
    }
}
