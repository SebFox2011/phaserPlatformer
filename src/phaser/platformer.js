import Phaser from 'phaser'

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y:300 },
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

function preload() {
  // chargement
}

function create() {
  //Initialisation
  
}

function update() {
  // Rendu en boucle

}

export const platformer = new Phaser.Game(config)

