import Phaser from 'phaser'

const niveau = [
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
[5,'=',0,0,0,0,0,0,0,0,'c','c','c','c',0,0,0,0,0,0,0,0,0,0,4],
[0,'=','=','=','=','=','=','=','#','=','=','=','=','=','=',']',0,0,0,0,0,0,0,0,4],
[5,0,0,0,0,0,0,0,'H',0,0,0,0,0,0,0,0,0,0,0,'[','#',']',0,4],
[5,0,0,0,0,0,0,0,'H',0,0,0,0,0,0,0,0,0,0,0,0,'H',0,0,4],
[5,0,0,0,0,0,0,0,'H',0,0,0,0,0,0,0,0,0,'>',0,0,'H','@','<',4],
[5,0,0,0,0,0,0,0,'H',0,0,'g','g','g',0,0,0,0,'[','=','#','=','=','=',0],
[5,'>','@',0,0,0,0,0,'H',0,0,0,0,0,'<',0,0,0,0,0,'H',0,0,0,4],
[0,'=','=','=','=','=','=','=','=','=','=','=','=','=',']',0,0,0,0,0,'H',0,0,0,4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'[','=','=','=',']',0,'c',4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g',4],
[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'c',4],
[5,0,0,0,0,0,'g','g','g','g','g','g','g','g',0,0,0,0,0,0,0,0,0,'[',0],
[5,0,0,0,'>',0,0,0,0,0,0,0,0,0,0,0,0,'@','<',0,0,0,0,'D',4],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3]
]
const SIZETILE =16
const widthScreen = niveau[0].length * SIZETILE
const heightScreen = niveau.length * SIZETILE

console.log(widthScreen)
console.log(heightScreen)

let cursors = ''
let player = ''

export const config = {
  type: Phaser.AUTO,
  width: widthScreen,
  height: heightScreen,
  backgroundColor: 0xEEEEEE,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
function preload() {
  console.log('Fonction preload')
  console.log(this)
  // chargement des images 
  this.load.image('tile1', './assets/tile1.png')
  this.load.image('tile2', './assets/tile2.png')
  this.load.image('tile3', './assets/tile3.png')
  this.load.image('tile4', './assets/tile4.png')
  this.load.image('tile5', './assets/tile5.png')
  this.load.image('tile=', './assets/tile=.png')
  this.load.image('tile[', './assets/tile[.png')
  this.load.image('tile]', './assets/tile].png')
  this.load.image('tileH', './assets/tileH.png')
  this.load.image('tile#', './assets/tile#.png')
  this.load.image('tileg', './assets/tileg.png')
  this.load.image('tile>', './assets/tile-arrow-right.png')
  this.load.image('tile<', './assets/tile-arrow-left.png')
  // chargement des images des coins
  this.load.spritesheet('tilec','assets/coin.png',
    { frameWidth: 8, frameHeight: 8 }
  )
  this.load.image('tileD','./assets/door/door-close.png')
  // Chargement du player en mode idle
  this.load.image('idle1','./assets/player/idle1.png')
  this.load.image('idle2','./assets/player/idle2.png')
  this.load.image('idle3','./assets/player/idle3.png')
  this.load.image('idle4','./assets/player/idle4.png')
  // Chargement du player en mode run
  this.load.image('run1','./assets/player/run1.png')
  this.load.image('run2','./assets/player/run2.png')
  this.load.image('run3','./assets/player/run3.png')
  this.load.image('run4','./assets/player/run4.png')
  this.load.image('run5','./assets/player/run5.png')
  this.load.image('run6','./assets/player/run6.png')
  this.load.image('run7','./assets/player/run7.png')
  this.load.image('run8','./assets/player/run8.png')
  this.load.image('run9','./assets/player/run9.png')
  this.load.image('run10','./assets/player/run10.png')
  // Chargement du player en mode climb
  this.load.image('climb1','./assets/player/climb1.png')
  this.load.image('climb2','./assets/player/climb2.png')
  // Chargement du player en mode fall
  this.load.image('fall','./assets/player/fall.png')
    // Chargement du player en modejump
    this.load.image('jump','./assets/player/jump.png')
  // Chargement 
  this.load.image('tile@','./assets/pnj/walk0.png')

  
}

function create() {
  console.log('Fonction create')
  cursors = this.input.keyboard.createCursorKeys()
  let platforms = this.physics.add.staticGroup()

  this.anims.create({
    key: 'playerIdle',
    frames: [
        { key: 'idle1' },
        { key: 'idle2' },
        { key: 'idle3' },
        { key: 'idle4' }
    ],
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'playerClimb',
    frames: [
        { key: 'climb1' },
        { key: 'climb2' }
    ],
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'playerRun',
    frames: [
        { key: 'run1' },
        { key: 'run2' },
        { key: 'run3' },
        { key: 'run4' },
        { key: 'run5' },
        { key: 'run6' },
        { key: 'run7' },
        { key: 'run8' },
        { key: 'run9' },
        { key: 'run10' }
    ],
    frameRate: 10,
    repeat: -1
  })
  
  let coin = this.add.sprite(50, 50, 'tilec')
  this.anims.create({
    key: 'turn',
    frames: this.anims.generateFrameNumbers('tilec', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  //Initialisation
  let x = 0
  let y = 0
  for (let l = 0; l < niveau.length; l++) {
    for (let c = 0; c <niveau[0].length; c++) {

      if (niveau[l][c] !==0) {
        platforms.create(c + x, l + y, `tile${niveau[l][c]}`).setOrigin(0,0).setScale(1).refreshBody()
        x += 15
      }
      else {
        x +=15
      }
    }
    y += 15
    x = 0
  }

  player = this.physics.add.sprite(30, 30, 'idle1').play('playerIdle')
  player.body.collideWorldBounds=true
  this.physics.add.collider(player, platforms)

  coin.play('turn')

}

function update(time,delta) {
  console.log('Fonction update')
  // Rendu en boucle
  player.setVelocityX(0)
  player.setGravityY(1000)
  if (cursors.up.isDown){
    player.setVelocity(0,-300)
  }

  if (cursors.down.isDown){
  }

  if (cursors.right.isDown){
    player.setVelocity(50,0)
    player.play('playerRun')
  }

  if (cursors.left.isDown){
    player.setVelocity(-50,0)
  }
}

export const platformer = new Phaser.Game(config)

