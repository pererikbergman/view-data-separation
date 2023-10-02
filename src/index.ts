import { Entity } from "./Entity";
import { ObservableArray, ArrayObserver } from "./ObservableArray";
import { Stage } from "./Stage";
import { Sprite } from "./Sprite";

const state = Stage.getInstance();

class EntityArrayObserver implements ArrayObserver {
    onItemAdded(item: Entity): void {
        console.log(`Entity with ID ${item.id} has been added to the array.`);
        const sprite = new Sprite(item.x, item.y);
        state.addSprite(sprite);

        const observer = {
            onPropertyChanged: (property: string, oldValue: any, newValue: any) => {
                console.log(`Entity ${item.id}: Property ${property} changed from ${oldValue} to ${newValue}.`);
                if (property === 'x') {
                    sprite.x = newValue;
                } else if (property === 'y') {
                    sprite.y = newValue;
                }
            },
            onEntityDeleted: (entity: Entity) => {
                entity.removeObserver(observer);  
                console.log(`Entity ${entity.id} has been deleted.`);
                state.removeSprite(sprite);
            }
        };

        item.addObserver(observer);
    }
}


/** Testing **/

const array = new ObservableArray();
const observer = new EntityArrayObserver();

array.addObserver(observer);

const entity = new Entity(1, 0, 0, 100, 100, 'red', 'Hello, World!');
array.add(entity);
entity.delete();
array.remove(entity);

