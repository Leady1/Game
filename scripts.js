var game = new Phaser.Game(912,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update});
var character;
var layer;
game.physics.arcade.collide(character, layer);
 
function preload()
{
    game.stage.backgroundColor = "#451100";
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet("Character", "Images/sprites_6.png",16,16,64);
    game.load.image("Level Tiles", "images/sprites_6.png");
   
}
 
function create()
{
    game.physics.startSystem(Phaser.Physics.ARCADE)
    var map = game.add.tilemap("Level", 16, 16);
    map.addTilesetImage("Level Tiles");
layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(32, 56);
    character= game.add.sprite(1264, 944, "Character");
     game.camera.follow(character);
      character.animations.add("walk",[3,4,5])
     character.animations.add("idle",[0])
     character.animations.add("jump",[5])
      game.physics.arcade.enable(character);
      character.body.gravity.y = 10;
       
    
} 
function update()
{
    game.physics.arcade.collide(character, layer);
    var isKeyPressed = false
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
{
    character.body.velocity.x = 1;
    isKeyPressed = true
    character.scale.set(1,1);
    character.animations.play('walk', 10, true);
} 
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
{        
   character.body.velocity.x = 1;
    character.animations.play('walk', 10, true);
    character.scale.set(-1, 1);
    isKeyPressed = true
}
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
{
    character.y = character.y - 3.5 ;
    isKeyPressed = true
     character.animations.play("jump",20,true)
}
    if (isKeyPressed == false)
{
    character.animations.play('idle', 20, true);
}

character.body.gravity.y = 300;
}
