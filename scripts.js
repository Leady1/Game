var game = new Phaser.Game(912,600,Phaser.AUTO,"platformer",{preload: preload, create: create,update: update});
var character;
var layer;
var lava; 
var map;
var map2;
var mapName;
function preload()
    {
        game.stage.backgroundColor = "#451100";
        game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap("Level 2", "level 2.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap("Finish", "Finish.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet("Character", "Images/sprites_6.png",16,16,64);
        game.load.image("Level Tiles", "Images/sprites_6.png");
    }
 
function create()
    {
        game.physics.startSystem(Phaser.Physics.ARCADE)   
        character= game.add.sprite(1272, 944, "Character");
        game.camera.follow(character);
        character.animations.add("walk",[3,4,5])
        character.animations.add("idle",[0])
        character.animations.add("jump",[5])
        character.anchor.x = 0.5;
        character.anchor.y = 0.5;
        game.physics.arcade.enable(character);
        character.body.gravity.y = 500;
        character.body.setSize (5.9, 16, 1)
        changeLevel("Level");
        if (mapName=="Level")
        {
              var font = { font: "30px Arial", fill: "#FFFFFF", align: "center" };
        var controls = game.add.text(1000 , 1050, "Controls:\nW to jump!\nA to walk left\n D to walk right", font);
        controls.anchor.set(0.5);
        }
    } 

function update()
{
        var tileX = Math.floor(character.x / 16);
        var tileY = Math.floor(character.y / 16);
        character.body.collideWorldBounds = true;
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
        character.animations.play('walk',15, true);
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
        if (currentTile.index == 58)
        {
            finish();
        }    
        if (mapName=="Finish")
        {
        var style = { font: "65px Arial", fill: "#FFFFFF", align: "center" };
        var text = game.add.text(game.world.centerX, game.world.centerY, "\nWell Done!\nYou Have Won!", style);
        text.anchor.set(0.5);
        }
        
    }

   
}

function onTouchLava()
{
    if (mapName == "Level")
    {
     character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = 1272
     character.y = 944
    }
    
    if (mapName == "Level 2")
    {
     character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = 1064
     character.y = 1080
    }
}
function finish()
{
         
        if (mapName == "Level")
    {     
     layer.destroy(true);
     character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = 1064
     character.y = 1080
     changeLevel("Level 2");
     
         
     } else {
        
     layer.destroy(true);
     character.body.velocity.y=0
     character.body.velocity.x=0
     character.x = game.world.centerX
     character.y = game.world.centerY
      
     changeLevel("Finish");
      
     
     }     
    
}
function changeLevel(newLevelName)
{
    if (map != null)
    {
        layer.destroy(true);
    }

    map = game.add.tilemap(newLevelName, 16, 16);
    map.addTilesetImage("Level Tiles");

    map.setCollisionBetween(32,56);

    layer = map.createLayer( 0 );
    layer.resizeWorld();
    mapName = newLevelName;
}
