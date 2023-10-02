import { Entity } from "./Entity";

export interface ArrayObserver {
    onItemAdded(item: Entity): void;
}

export class ObservableArray {
    private items: Entity[] = [];
    private observers: ArrayObserver[] = [];

    addObserver(observer: ArrayObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: ArrayObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    add(item: Entity): void {
        this.items.push(item);
        this.notifyItemAdded(item);
    }

    remove(item: Entity): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    get(index: number): Entity | undefined {
        return this.items[index];
    }

    private notifyItemAdded(item: Entity): void {
        for (const observer of this.observers) {
            observer.onItemAdded(item);
        }
    }
}
