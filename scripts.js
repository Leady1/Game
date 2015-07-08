var game = new Phaser.Game(912,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update});
var character;
var layer;
var lava 
var map
function preload()
{
    game.stage.backgroundColor = "#451100";
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet("Character", "Images/sprites_6.png",16,16,64);
    game.load.image("Level Tiles", "Images/sprites_6.png");
   
}
 
function create()
{
    game.physics.startSystem(Phaser.Physics.ARCADE)
    map = game.add.tilemap("Level", 16, 16);
    map.addTilesetImage("Level Tiles");
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(32,56);
    character= game.add.sprite(1272, 944, "Character");
    game.camera.follow(character);
    character.animations.add("walk",[3,4,5])
    character.animations.add("idle",[0])
    character.animations.add("jump",[5])
    character.anchor.x = 0.5;
    character.anchor.y = 1;
    game.physics.arcade.enable(character);
    character.body.gravity.y = 300;
   
    
    character.body.setSize (8, 16, 1)
    
    
} 
function update()
{
   var tileX = Math.floor(character.x / 16);
var tileY = Math.floor(character.y / 16);

var currentTile = map.getTile(tileX, tileY);
    game.physics.arcade.collide(character, layer);
    var isKeyPressed = false
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
{
    character.body.velocity.x = 100;
    isKeyPressed = true
    character.scale.set(1,1);
    character.animations.play('walk', 10, true);
} 
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
{        
   character.body.velocity.x = -100;
    character.animations.play('walk', 10, true);
    character.scale.set(-1, 1);
    isKeyPressed = true
}
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
{
    if (character.body.onFloor())
    {
        character.body.velocity.y = -200
    }
   {
    isKeyPressed = true
    character.animations.play("jump",20,true)
   }
}
    if (isKeyPressed == false)
{
    character.body.velocity.x = 0
    character.animations.play('idle', 20, true);
}
if (currentTile != null)
{
    if (currentTile.index == 60)
    {
        onTouchLava();
    }
    if (currentTile.index == 57)
    {
        finish()
    }    
}

   
}


function onTouchLava()
{
    character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = 1272
     character.y = 944
}
function finish()
{
    character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = 1272
     character.y = 944
}