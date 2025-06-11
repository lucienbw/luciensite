import Phaser from 'phaser';

export class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('preloader');
    }

    preload() {
        this.load.image("guy-idle", "game/guy-idle.png");
        this.load.image("guy-walk1", "game/guy-walk1.png");
        this.load.image("guy-walk2", "game/guy-walk2.png");
        this.load.image("coin", "game/coin.png");
        this.load.image("win-screen", "game/win-screen.png");

        this.load.image("tiles", "game/tile-set.png");
        this.load.tilemapTiledJSON("map", "game/good-level.tmj");

        this.load.spritesheet("guy-sheet", "game/guy-sheet.png",{
            frameWidth: 32,
            frameHeight: 32,
        });
    }

    create ()
    {
        this.scene.start('game')
    }
}
