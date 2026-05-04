export default class Gema extends Phaser.Physics.Arcade.Sprite {
    constructor(escena,x,y){
        super(escena, x, y, 'gema');

        this.escena = escena;
        this.escena.add.existing(this);

        // si es fisico añadir al mundo fisico
        this.escena.physics.add.existing(this);

        // desactivamos la gravedad para el objeto
        this.body.allowGravity = false;
    }

    update(){

    }
}