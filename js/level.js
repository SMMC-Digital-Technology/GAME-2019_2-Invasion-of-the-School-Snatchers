/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */

//Test to see if github works for me - Paddy

var levelState = {
  create: function() {

    //cursors
    cursors = game.input.keyboard.createCursorKeys();
    spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    d = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //background and world bounds
    background = game.add.sprite(0, 0, 'level3BG');
    background.scale.setTo(2);
    game.world.setBounds(0, 0, background.width, background.height);

    //laser
    laser = game.add.weapon(3000, 'laser');
    laser.bullets.setAll('scale.x', 0.09); //scaling laser bullets x
    laser.bullets.setAll('scale.y', 0.09); //scaling laser bullets y
    laser.bulletSpeed = 1000; //bullet speed
    laser.fireRate = 450; //bullet firerate

    //Player
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    player.anchor.setTo(0.5);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.immovable = true;

    //studentAlien
    sAlien = game.add.sprite(game.world.centerX + 100, game.world.centerY + 100, 'sAlien');
    sAlien.anchor.setTo(0.5);
    sAlien.scale.setTo(0.3);
    sAlien.animations.add('StudentMove');
    sAlien.animations.play('StudentMove', 50, true);
    game.physics.arcade.enable(sAlien);
    sAlien.body.setSize(300, 140, 30, 120);
    sAlien.body.immovable = true;

    //Track the sprite's position and rotate with it
    trackingSprite = laser.trackSprite(player, player.height - 24, -2, true);

    //Camera follows the player
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  },

  update: function() {
    //player movement with WASD
    if (a.isDown) {
      player.body.velocity.x = -200;
    } else if (d.isDown) {
      player.body.velocity.x = 200;
    } else {
      player.body.velocity.x = 0;
    }
    if (w.isDown) {
      player.body.velocity.y = -200;
    } else if (s.isDown) {
      player.body.velocity.y = 200;
    } else {
      player.body.velocity.y = 0;
    }

    //Makes the student Alien follow the player
    game.physics.arcade.moveToObject(sAlien, player, 100)

    //Aims the player at the cursor
    player.rotation = Math.atan2(game.input.activePointer.worldY - player.y, game.input.activePointer.worldX - player.x);

    //Student Alien rotates to face the player
    sAlien.rotation = Math.atan2(player.y - sAlien.y, player.x - sAlien.x) - Math.PI / 2;
    //laser shoots when the spacebar is down
    if (spacebar.isDown) {
      fire = laser.fire();
    }

    // this is how you write a function
    // note the comma after the } above
    // see that variables go in the brackets still
    // to use this function in collision detection, write this.exampleFunction
    // to call it manually, write this.exampleFunction(1, 2)
    //  exampleFunction: function(something, somethingElse) {

    //}
  }
};