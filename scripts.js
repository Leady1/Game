var game = new Phaser.Game(800,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update});
var character;
function preload()
{
game.load.spritesheet("Character", "Images/sprites_6.png",16,16,64);
}
function create()
{
character= game.add.sprite(100, 100, "Character");
}
function update()
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    character.x = character.x + 5;

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    character.x = character.x - 1;
}