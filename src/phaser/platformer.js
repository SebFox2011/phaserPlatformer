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
let pnj = ''
let isReadyToDrop = true

export const config = {
  type: Phaser.AUTO,
  width: widthScreen,
  height: heightScreen,
  backgroundColor: 0xEEE0EE,
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
  this.load.image('walk0','./assets/pnj/walk0.png')
  this.load.image('walk1','./assets/pnj/walk1.png')
  this.load.image('walk2','./assets/pnj/walk2.png')
  this.load.image('walk3','./assets/pnj/walk3.png')
  this.load.image('walk4','./assets/pnj/walk4.png')
  this.load.image('walk5','./assets/pnj/walk5.png')
  
  // Chargement des audios
  this.load.audio('drop','./assets/drop_001.ogg')
}

function create() {
  console.log('Fonction create')

  let fontText = {
    fontSize: '20px',
    color: '#ff0000'
  }
  this.add.text(20,10,'Let \'s play !',fontText)
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

  this.anims.create({
    key: 'pnjRun',
    frames: [
        { key: 'walk0' },
        { key: 'walk1' },
        { key: 'walk2' },
        { key: 'walk3' },
        { key: 'walk4' },
        { key: 'walk5' }
    ],
    frameRate: 10,
    repeat: -1
  })
  

  this.anims.create({
    key: 'turn',
    frames: this.anims.generateFrameNumbers('tilec', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })
  this.add.sprite(50, 50, 'tilec').play('turn')


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

  player = this.physics.add.sprite(30, 30, 'idle1').play('playerIdle').setInteractive()
  player.on('pointerdown', () => console.log('Player cliqué'))
  player.on('pointerup', () => console.log('Player relaché'))
  player.on('pointerout', () => console.log('Player plus sous control'))
  player.body.collideWorldBounds=true
  this.physics.add.collider(player, platforms)
  pnj =  this.physics.add.sprite(70, 50, 'walk0').play('turn').play('pnjRun').setScale(2)
  pnj.flipX = false
  this.tweens.add ({
    targets:pnj,
    x: pnj.x + 100,
    ease: 'linear',// 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration:1000,
    repeat:-1,
    yoyo:true,
    onStart: (() => {}),
    onYoyo:(()=> pnj.flipX = !pnj.flipX),
    onRepeat:(()=> pnj.flipX = !pnj.flipX)
  })
  this.physics.add.collider(pnj, platforms)
  this.physics.add.overlap(player, pnj, collide, null, this)
}
const collide =  () => {
  if (isJumping)
  {
    pnj.destroy()
  }
  else
  {
    console.log('player mort')
  }
}
let isLeftDown = false
let isRightDown = false
let isJumping = false

function update(time,delta) {
  console.log('Fonction update')
  // Rendu en boucle
  //player.setVelocityX(0)
  //player.setGravityY(1000)

  if (isRightDown)
  {
    player.play('playerRun',true)
  } else if (isLeftDown) 
  {
    player.play('playerRun',true)
  } 
  else 
  {
    player.play('playerIdle',true)
  }
  if(player.body.onFloor())
  {
    isJumping = false
  }

  if (cursors.up.isDown && isReadyToDrop && player.body.onFloor()){
    isReadyToDrop = false
    this.sound.play('drop')
    player.setVelocity(0,-200)
    isJumping = true
    
  }
  if (cursors.up.isUp){
    isReadyToDrop = true
  }

  if (cursors.down.isDown){
    console.log(time)
  }

  if (cursors.right.isDown){
    player.setFlip(false,false)
    isRightDown = true
    //player.setVelocity(50,0)
    player.x += 1
    
  }
  if (cursors.right.isUp){
    isRightDown = false
  }

  if (cursors.left.isDown){
    player.setFlip(true,false)
    isLeftDown = true
    //player.setVelocity(-50,0)
    player.x += -1
  }
  if (cursors.left.isUp){
    isLeftDown = false
  }

  if (cursors.left.isDown && cursors.up.isDown){
    player.x += -1
    player.y += -1
  }

  if (cursors.right.isDown && cursors.up.isDown){
    player.x += 1
    player.y += 1
  }
}

export const platformer = new Phaser.Game(config)

