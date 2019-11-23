/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var levelState = {

  render: function() {
    //game.debug.body(player);
    //game.debug.body(sAlien);
    //game.debug.body(wallGroup);
    game.debug.inputInfo(32, 32);
    game.debug.pointer(game.input.activePointer);
  },

  create: function() {

    //cursors
    cursors = game.input.keyboard.createCursorKeys();
    spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    d = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //background and world bounds
    background = game.add.sprite(0, 0, 'level3');
    background.scale.setTo(2.5);
    game.world.setBounds(0, 0, background.width, background.height);

    //adding in borders
    borders();

    //laser
    laser = game.add.weapon(3000, 'laser');
    laser.bullets.setAll('scale.x', 0.09); //scaling laser bullets x
    laser.bullets.setAll('scale.y', 0.09); //scaling laser bullets y
    laser.bulletSpeed = 2000; //bullet speed
    laser.fireRate = 450; //bullet firerate

    //Player
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    player.anchor.setTo(0.5);
    player.scale.setTo(0.9);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    AlienOneCreate();

    ball = game.add.sprite(876, 1017, 'ball');
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.25);
    ball.scale.setTo(0.15);

    //Track the sprite's position and rotate with it
    trackingSprite = laser.trackSprite(player, player.height - 24, -2, true);

    //Camera follows the player
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  },

  update: function() {

    game.physics.arcade.collide(player, wallGroup);
    game.physics.arcade.collide(player, ball);
    game.physics.arcade.collide(ball, wallGroup)
    game.physics.arcade.collide(wallGroup, laser.bullets, laserWall);

    function laserWall(bullet) {
      laser.killAll()
    }

    //player movement with WASD
    if (a.isDown) {
      player.body.velocity.x = -600;
    } else if (d.isDown) {
      player.body.velocity.x = 600;
    } else {
      player.body.velocity.x = 0;
    }
    if (w.isDown) {
      player.body.velocity.y = -600;
    } else if (s.isDown) {
      player.body.velocity.y = 600;
    } else {
      player.body.velocity.y = 0;
    }

    //Aims the player at the cursor
    player.rotation = Math.atan2(game.input.activePointer.worldY - player.y, game.input.activePointer.worldX - player.x)

    //laser shoots when the spacebar is down
    if (spacebar.isDown) {
      fire = laser.fire();
    }
    AlienOneUpdate();
  }
};