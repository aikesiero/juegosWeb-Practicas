export default class Jugador extends Phaser.Physics.Arcade.Sprite {

    // Constructor de la clase Jugador
    constructor(escena,x,y){

         // Llama al constructor de la clase padre (Phaser.Physics.Arcade.Sprite)
        // 'jugador' es la clave de la imagen cargada en preload
        super(escena, x, y, 'jugador');

        // Guarda una referencia a la escena donde se crea el jugador
        this.escena = escena;

        // Añade el sprite del jugador a la escena
        this.escena.add.existing(this);

        // Añade el cuerpo físico del jugador a la escena para que tenga físicas
        this.escena.physics.add.existing(this);

        // Teclas de flechas
        this.cursors = this.escena.input.keyboard.createCursorKeys();

        // Teclas WASD personalizadas
        this.teclasWASD = this.escena.input.keyboard.addKeys({
            izquierda: Phaser.Input.Keyboard.KeyCodes.A,
            derecha: Phaser.Input.Keyboard.KeyCodes.D
        });


        // animaciones
        this.animacionAndar = {};
        this.animacionAndar.key = 'spr_andando';
        this.animacionAndar.frames = this.escena.anims.generateFrameNames('spr_player', {
             prefix: 'spr_andando',
             start: 1,
             end: 2
        });
        this.animacionAndar.frameRate = 10;
        this.animacionAndar.repeat = -1;
        this.escena.anims.create(this.animacionAndar);

        // animación de depie
        this.animacionDepie = {};
        this.animacionDepie.key = 'spr_depie';
        this.animacionDepie.frames = this.escena.anims.generateFrameNames('spr_player', {
             prefix: 'spr_depie',
             start: 1,
             end: 1
        });
        this.animacionDepie.frameRate = 10;
        this.animacionDepie.repeat = -1;
        this.escena.anims.create(this.animacionDepie);

        // animación de salto
        this.animacionSalto = {};
        this.animacionSalto.key = 'spr_salto';
        this.animacionSalto.frames = this.escena.anims.generateFrameNames('spr_player', {
             prefix: 'spr_salto',
             start: 1,
             end: 1
        });
        this.animacionSalto.frameRate = 10;
        this.animacionSalto.repeat = -1;
        this.escena.anims.create(this.animacionSalto);

    }

    update(){
        const velocidad = 200;
        const velocidadSalto = 400;

        // invertir jugador dependiendo velocidad 
        if (this.body.velocity.x > 0){
            this.setFlipX(false);
        } else if (this.body.velocity.x < 0){
            this.setFlipX(true);
        }
        // Movimiento a la izquierda y derecha
        if (this.cursors.left.isDown || this.teclasWASD.izquierda.isDown) {
            this.setVelocityX(-velocidad);
            if (this.body.onFloor()){
                this.play('spr_andando', true);
            }
        } else if (this.cursors.right.isDown || this.teclasWASD.derecha.isDown) {
            this.setVelocityX(velocidad);
            if (this.body.onFloor()){
                this.play('spr_andando', true);
            }
        } else {
            this.setVelocityX(0);
            if (this.body.onFloor()){
                this.play('spr_depie', false);
            }
        }

        // Movimiento hacia arriba
        if (this.cursors.space.isDown && this.body.onFloor())  {
            this.setVelocityY(-velocidadSalto);
            this.play('spr_salto', false);
        }

    }
}