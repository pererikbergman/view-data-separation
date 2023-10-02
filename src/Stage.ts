import { Sprite } from "./Sprite";

export class Stage {
    private static instance: Stage;
    private sprites: Map<number, Sprite> = new Map();
    private nextSpriteId: number = 0;

    private constructor() {}

    static getInstance(): Stage {
        if (!Stage.instance) {
            Stage.instance = new Stage();
        }
        return Stage.instance;
    }

    addSprite(sprite: Sprite): number {
        const id = this.nextSpriteId++;
        this.sprites.set(id, sprite);
        return id;
    }

    removeSprite(sprite: Sprite): void {
        for (const [id, storedSprite] of this.sprites) {
            if (storedSprite === sprite) {
                this.sprites.delete(id);
                break;  // Exit the loop once the sprite is found and deleted
            }
        }
    }
}
