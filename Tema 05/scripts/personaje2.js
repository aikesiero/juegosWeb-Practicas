export default class Personaje2 {
    constructor(scene, x, y){
        this.scene = scene

        // Crear sprite y activar físicas
        this.sprite = scene.physics.add.sprite(x, y, 'personaje2');
        this.sprite.setCollideWorldBounds(true); // No salir de los bordes

        // Hacer cque rebote automáticamente con los límites
        this.sprite.setBounce(1);

        // Darle una velocidad inicial en diagonal
        this.sprite.setVelocity(150,20);

    }

    update() {
        // En este caso no necesitamos lógica en update,
        // el rebote se maneja automáticamente con 'setBounce(1)'
        // y el personaje sigue rebotando dentro del área de juego
    }
}