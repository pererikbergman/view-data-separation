"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
class Stage {
    constructor() {
        this.sprites = new Map();
        this.nextSpriteId = 0;
    }
    static getInstance() {
        if (!Stage.instance) {
            Stage.instance = new Stage();
        }
        return Stage.instance;
    }
    addSprite(sprite) {
        const id = this.nextSpriteId++;
        this.sprites.set(id, sprite);
        return id;
    }
    removeSprite(sprite) {
        for (const [id, storedSprite] of this.sprites) {
            if (storedSprite === sprite) {
                this.sprites.delete(id);
                break; // Exit the loop once the sprite is found and deleted
            }
        }
    }
}
exports.Stage = Stage;
