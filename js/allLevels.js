var allLevelsState = {

  create: function() {
    game.state.start('level3')
    console.log('all levels state complete')
  }
};

function allLevelsCreate() {
  //cursors
  cursors = game.input.keyboard.createCursorKeys();
  spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  w = game.input.keyboard.addKey(Phaser.Keyboard.W);
  a = game.input.keyboard.addKey(Phaser.Keyboard.A);
  s = game.input.keyboard.addKey(Phaser.Keyboard.S);
  d = game.input.keyboard.addKey(Phaser.Keyboard.D);

  //Power Ups
  LongRangeGroup = game.add.group();
  for (var i = 0; i < 4; i++) {
    var LongRange = LongRangeGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'LongRange');
    game.physics.arcade.enable(LongRange);
    LongRange.scale.setTo(0.6)
  }

  FastFireGroup = game.add.group();
  for (var i = 0; i < 4; i++) {
    var FastFire = FastFireGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'FastFire');
    game.physics.arcade.enable(FastFire);
    FastFire.scale.setTo(0.6)
  }

  //laser
  laser = game.add.weapon(3000, 'laser');
  laser.bullets.setAll('scale.x', 0.09); //scaling laser bullets x
  laser.bullets.setAll('scale.y', 0.09); //scaling laser bullets y
  laser.bulletSpeed = 2000; //bullet speed
  laser.fireRate = 450; //bullet firerate
  laser.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
  laser.bulletLifespan = 50;

  //Player
  player = game.add.sprite(PlayerStartX, PlayerStartY, 'player');
  player.anchor.setTo(0.5);
  player.scale.setTo(0.9);
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  playerhealth = 10;

  //Track the sprite's position and rotate with it
  trackingSprite = laser.trackSprite(player, player.height - 24, -2, true);

  //Camera follows the player
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  wallGroup1 = borders1();
  wallGroup2 = borders2();
  wallGroup3 = borders3();

}

function allLevelsUpdate() {
  //collisions between player and aliens to deal damage to the player
  game.physics.arcade.collide(player, AlienGroup, PlayerDamage);

  LongRangeGroup.children.forEach(function(child) {
    game.physics.arcade.overlap(LongRangeGroup, wallGroup, reposition);
    game.physics.arcade.overlap(LongRangeGroup, wallGroup, reposition);
    game.physics.arcade.overlap(LongRangeGroup, wallGroup, reposition);
    game.physics.arcade.overlap(child, player, CollectLongRange);

    //reposition alien of they are on a wall
    function reposition(child) {
      child.x = game.rnd.integerInRange(105, width)
      child.y = game.rnd.integerInRange(81, height)
    }

    //make the bullets travel further for 10 seconds with the long range power up.
    function CollectLongRange(child, player) {
      child.kill();
      laser.bulletLifespan = 200;
      game.time.events.add(Phaser.Timer.SECOND * 10, stopLongRange);

      function stopLongRange() {
        laser.bulletLifespan = 50;
      }
    }
  });

  FastFireGroup.children.forEach(function(child) {
    game.physics.arcade.overlap(child, wallGroup1, reposition);
    game.physics.arcade.overlap(child, wallGroup2, reposition);
    game.physics.arcade.overlap(child, wallGroup3, reposition);
    game.physics.arcade.overlap(child, player, CollectFastFire);

    function reposition(child) {
      child.x = game.rnd.integerInRange(105, width)
      child.y = game.rnd.integerInRange(81, height)
    }

    function CollectFastFire(child, player) {
      child.kill();
      laser.fireRate = 40;
      game.time.events.add(Phaser.Timer.SECOND * 10, stopFastFire);

      function stopFastFire() {
        laser.fireRate = 450;
      }
    }
  });


  function PlayerDamage(player) {

    //remove player health if colliding with an alien
    console.log('hit')
    playerhealth -= 1
    PlayerHealthText.setText('Health: ' + playerhealth);
    if (playerhealth <= 0) {
      console.log('dead')
      PlayerStatus = 1
      game.state.start('gameover');
      console.log('level state complete');
    }

  }



  //player movement with WASD
  if (a.isDown) {
    player.body.velocity.x = -1200;
  } else if (d.isDown) {
    player.body.velocity.x = 1200;
  } else {
    player.body.velocity.x = 0;
  }
  if (w.isDown) {
    player.body.velocity.y = -1200;
  } else if (s.isDown) {
    player.body.velocity.y = 1200;
  } else {
    player.body.velocity.y = 0;
  }

  //Aims the player at the cursor
  player.rotation = Math.atan2(game.input.activePointer.worldY - player.y, game.input.activePointer.worldX - player.x)

  //laser shoots when the spacebar is down
  if (spacebar.isDown) {
    fire = laser.fire();
  }
}