import Phaser from 'phaser';

export class Game extends Phaser.Scene
{
    player!: Phaser.Physics.Arcade.Sprite;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor ()
    {
        super('game');
    }

    preload () {
        this.cursors = this.input.keyboard!.createCursorKeys();
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map'});
        const tileset = map.addTilesetImage('good-set', 'tiles')!;


        const groundLayer = map.createLayer('Ground', tileset)!;
        groundLayer.setCollision(1, true);
        map.createLayer('Sky', tileset);

        this.player = this.physics.add.sprite(32,192, 'guy-idle');
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, groundLayer);

        const coin = this.physics.add.sprite(14*32 + 16, 4*32 + -16, "coin");
        coin.setGravity(0,80)

        this.physics.add.overlap(this.player, coin, () => this.scene.start('win'));
        this.physics.add.collider(coin, groundLayer);
        
        this.anims.create({
            key:"walk",
            frames: this.anims.generateFrameNumbers("guy-sheet", {frames:[1,2]}),
            frameRate:4,
            repeat: -1,
        })

        this.anims.create({
            key:"idle",
            frames: this.anims.generateFrameNumbers("guy-sheet", {frames:[0]}),
            frameRate:4,
            repeat: -1,
        })
        
    }

    update(): void {
        if (!this.cursors)
        {
            console.log("nothing");
            return

        }
        const speed = 100;
        const jumpHeight = -200;
        if (this.cursors.left?.isDown)
        {
            this.player.setVelocity(-speed,this.player.body?.velocity.y);
            if (this.player.anims.currentAnim?.key != "walk")
            {
                this.player.play("walk");
            }
            this.player.scaleX = -1;
            this.player.body!.offset.x = 32;
        } 
        else if (this.cursors.right?.isDown) 
        {
            this.player.setVelocity(speed,this.player.body?.velocity.y);
            if (this.player.anims.currentAnim?.key != "walk")
            {
                this.player.play("walk");
            }
            this.player.body!.offset.x = 0;

            this.player.scaleX = 1;
        }
        else
        {
            this.player.setVelocity(0, this.player.body?.velocity.y);
            this.player.play("idle");
        }
        if (this.cursors.space?.isDown && this.player.body?.velocity.y == 0)
        {
            this.player.setVelocity(this.player.body!.velocity.x, jumpHeight);
        }
    }
}
