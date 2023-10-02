"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const ObservableArray_1 = require("./ObservableArray");
const Stage_1 = require("./Stage");
const Sprite_1 = require("./Sprite");
const state = Stage_1.Stage.getInstance();
class EntityArrayObserver {
    onItemAdded(item) {
        console.log(`Entity with ID ${item.id} has been added to the array.`);
        const sprite = new Sprite_1.Sprite(item.x, item.y);
        state.addSprite(sprite);
        const observer = {
            onPropertyChanged: (property, oldValue, newValue) => {
                console.log(`Entity ${item.id}: Property ${property} changed from ${oldValue} to ${newValue}.`);
                if (property === 'x') {
                    sprite.x = newValue;
                }
                else if (property === 'y') {
                    sprite.y = newValue;
                }
            },
            onEntityDeleted: (entity) => {
                entity.removeObserver(observer);
                console.log(`Entity ${entity.id} has been deleted.`);
                state.removeSprite(sprite);
            }
        };
        item.addObserver(observer);
    }
}
/** Testing **/
const array = new ObservableArray_1.ObservableArray();
const observer = new EntityArrayObserver();
array.addObserver(observer);
const entity = new Entity_1.Entity(1, 0, 0, 100, 100, 'red', 'Hello, World!');
array.add(entity);
entity.delete();
array.remove(entity);
