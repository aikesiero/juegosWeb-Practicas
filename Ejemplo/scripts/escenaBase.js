import Gema from './gema.js'; // Importar la clase gema
import Jugador from './jugador.js'; // Importar la clase Jugador   

export default class EscenaBase extends Phaser.Scene {
    preload(){
        console.log('Método preload');
        this.load.image('gema', 'assets/gema.png');
        this.load.atlas('spr_player', 'assets/spr_player.png', 'assets/spr_player_atlas.json');
        this.load.image('tilesheet', 'assets/tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/mapa.json');
        this.load.image('jugador', 'assets/prota.png');
    }

    create(){
        // Crear instancia del mapa
        this.mapa=this.make.tilemap({key:'map'});

        // Crear instancia del fichero de tiles
        this.hojaTiles = this.mapa.addTilesetImage('tiles', 'tilesheet', 64, 64, 0, 0);

        // Crear instancia de la plataforma definida en el mapa
        this.plataformas = this.mapa.createLayer('plataformas', this.hojaTiles, 0, 0);

        // Crear instancia del jugador
        this.jugador = new Jugador(this, 100, 400);

        // Establecer colisión con las plataformas
        this.plataformas.setCollisionByExclusion(-1, true);

        this.physics.add.collider(this.jugador, this.plataformas);


        // incorporar gemas desde json
        if (this.mapa.getObjectLayer('gemas')!=null){
            this.objetos = this.mapa.getObjectLayer('gemas').objects;

            this.objetos.forEach(objeto => {
                this.gema = new Gema(this, objeto.x, objeto.y);
                this.physics.add.collider(this.gema, this.plataformas);

                // para recoger gemas
                this.physics.add.collider(this.gema, this.jugador, this.colGemaJugador, null, this);
            })
        } else {
            console.log('No hay capa de objetos');
        }



         // control de camaras
         this.cameras.main.startFollow(this.jugador);
         this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);


         // MARCADOR
         this.imageMarcador = this.add.image(40,40,'gema');
         this.imageMarcador.setScale(2); // duplicamos el tamaño
         this.imageMarcador.setRotation(0.5); // lo rotamos ligeramente
         this.imageMarcador.setScrollFactor(0); // evitamos que se mueva con la camara

         this.puntos = 0;
         this.txtMarcador = this.add.text(90,15, this.puntos);
         this.txtMarcador.setFontSize(50);
         this.txtMarcador.setStyle({fontStyle: 'bold italic'});
         this.txtMarcador.setFill('#000');
         this.txtMarcador.setScrollFactor(0); // evitar que se mueva con la camara
    }

    update(){
        this.jugador.update();
    }

    // se invoca desde el collider para 
    colGemaJugador(gema, jugador){
        gema.destroy(true);

        this.puntos = this.puntos + 25;
        this.txtMarcador.text = this.puntos;
    }
}