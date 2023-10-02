"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableArray = void 0;
class ObservableArray {
    constructor() {
        this.items = [];
        this.observers = [];
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
    add(item) {
        this.items.push(item);
        this.notifyItemAdded(item);
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    get(index) {
        return this.items[index];
    }
    notifyItemAdded(item) {
        for (const observer of this.observers) {
            observer.onItemAdded(item);
        }
    }
}
exports.ObservableArray = ObservableArray;
