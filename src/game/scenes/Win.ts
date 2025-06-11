import Phaser from 'phaser';
import { eventEmitter } from '../GamePlayer';
//import { addItem } from '../../components/Inventory';

export class WinScreen extends Phaser.Scene
{
    constructor ()
    {
        super('win');
    }

    create ()
    {
        this.add.image(32*8,160, 'win-screen');
        eventEmitter.emit('gameWon');
    }
}