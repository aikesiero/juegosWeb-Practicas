export default class Personaje1 {
    constructor(scene, x, y){
        this.scene = scene

        // Crear sprite y activar físicas
        this.sprite = scene.physics.add.sprite(x, y, 'personaje1');
        this.sprite.setCollideWorldBounds(true); // No salir de los bordes

        // Crea cursores (flechas del teclado)
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Teclas WASD personalizadas
        this.teclasWASD = scene.input.keyboard.addKeys({
            arriba: Phaser.Input.Keyboard.KeyCodes.W,
            abajo: Phaser.Input.Keyboard.KeyCodes.S,
            izquierda: Phaser.Input.Keyboard.KeyCodes.A,
            derecha: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update() {
        // Velocidad base
        this.sprite.setVelocity(0);

        if (this.cursors.left.isDown || this.teclasWASD.izquierda.isDown) {
          this.sprite.setVelocityX(-160);
      } else if (this.cursors.right.isDown || this.teclasWASD.derecha.isDown) {
          this.sprite.setVelocityX(160);
      }

      if (this.cursors.up.isDown || this.teclasWASD.arriba.isDown) {
          this.sprite.setVelocityY(-160);
      } else if (this.cursors.down.isDown || this.teclasWASD.abajo.isDown) {
          this.sprite.setVelocityY(160);
      }
    }
}