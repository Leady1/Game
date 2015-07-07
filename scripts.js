var game = new Phaser.Game(800,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update});
var character;
function preload()
{
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

character= game.add.sprite(100, 100, "Character");
}
function update()
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    character.x = character.x + 5;

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    character.x = character.x - 5;
}