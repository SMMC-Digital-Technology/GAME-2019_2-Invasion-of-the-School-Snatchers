/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
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
    background = game.add.sprite(0, 0, 'background');
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
    sAlien.animations.add('attack');
    sAlien.animations.play('attack', 50, true);
    game.physics.arcade.enable(sAlien);
    sAlien.body.setSize(300, 140, 30, 120);
    sAlien.body.immovable = true;

  },

  update: function() {
    // do things on the game loop
  },

  // this is how you write a function
  // note the comma after the } above
  // see that variables go in the brackets still
  // to use this function in collision detection, write this.exampleFunction
  // to call it manually, write this.exampleFunction(1, 2)
  exampleFunction: function(something, somethingElse) {

  }

};