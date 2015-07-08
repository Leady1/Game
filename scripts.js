var game = new Phaser.Game(912,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update,changeTexture:changeTexture});
var character;
 
function preload()
{
    game.stage.backgroundColor = "#451100";
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet("Character", "Images/sprites_6.png",16,16,64);
    game.load.image("Level Tiles", "images/sprites_6.png");
   
}
 
function create()
{
    var map = game.add.tilemap("Level", 16, 16);
    map.addTilesetImage("Level Tiles");
var layer = map.createLayer(0);
    layer.resizeWorld();
    character= game.add.sprite(1264, 944, "Character");
     game.camera.follow(character);
     
      character.animations.add("walk",[0, 1, 2, 3,])
      if(game.input.keyboard.isDown(Phaser.Keyboard.A))   
 character.animations.play('walk', 20, true);

    
} 
function update()
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
        character.x = character.x + 5;

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
        character.x = character.x - 5;
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))   
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        character.y = character.y - 16 ;
        
    if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        character.y = character.y + 16 ; 
}
 game.input.onDown.add(changeTexture, this);
function changeTexture() {
      if(game.input.keyboard.isDown(Phaser.Keyboard.A))   
 character.animations.play('walk', 20, true);
}