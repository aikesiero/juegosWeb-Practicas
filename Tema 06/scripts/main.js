import EscenaBase from './escenaBase.js';

// Configuración general del juego
const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 640,
    backgroundColor: '#87CEEB',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }, // Gravedad en el eje y
            debug: true // Muestra información de depuración
        }
    },
    scene: [EscenaBase]
};

// Crear el juego con la configuracion
const game = new Phaser.Game(config);