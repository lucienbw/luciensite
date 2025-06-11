import { Game as MainGame } from './scenes/Game';
import { AUTO } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { WinScreen } from './scenes/Win';
import { useEffect } from 'react';

export const eventEmitter = new Phaser.Events.EventEmitter();

const config : Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 16*32,
    height: 10*32,
    parent: 'game-container',
    scene: [
        Preloader,
        MainGame,
        WinScreen,
    ],
    scale: {
        zoom: 1,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500, x: 0 },
            debug: false
        }
    }
};

const GameComponent = () => {
    useEffect(() => {
        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true)
        }
    }, [])

    return(
        <div id="game-container" />
    )
}
export default GameComponent