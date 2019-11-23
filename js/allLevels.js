var allLevelsState = {

  create: function() {
    game.state.start('menu')
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
  playerhealth = 50;

  //Track the sprite's position and rotate with it
  trackingSprite = laser.trackSprite(player, player.height - 24, -2, true);

  //Camera follows the player
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  PlayerHealthText = game.add.text(200, 500, "Health: 500", {
    font: "32px Arial",
    fill: "#ffffff",
    align: "center"
  });
  PlayerHealthText.fixedToCamera = true;
  PlayerHealthText.cameraOffset.setTo(50, 50)

}

function allLevelsUpdate() {
  game.physics.arcade.collide(player, AlienGroup, PlayerDamage);

  function PlayerDamage(player) {
    /*
        console.log('hit')
        playerhealth -= 1
        PlayerHealthText.setText('Health: ' + playerhealth);
        if (playerhealth <= 0) {
          console.log('dead')
          game.state.start('gameover');
          console.log('level state complete');
        }
          */
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
}