/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var level3State = {

  render: function() {
    //game.debug.body(player);
    //game.debug.body(sAlien);
    //game.debug.body(wallGroup);
    game.debug.inputInfo(500, 300);
    game.debug.pointer(game.input.activePointer);
  },

  create: function() {

    //background and world bounds
    background3 = game.add.sprite(0, 0, 'level3');
    background3.scale.setTo(2.5);
    game.world.setBounds(0, 0, background3.width, background3.height);


    width = 1260 - 105
    height = background3.height - 81

    //adding in borders
    borders3();
    allLevelsCreate();
    AlienOneCreate();

    ball = game.add.sprite(876, 1017, 'ball');
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.25);
    ball.scale.setTo(0.15);


  },
  update: function() {
    allLevelsUpdate();
    game.physics.arcade.collide(wallGroup3, laser.bullets, laserWall);
    game.physics.arcade.collide(wallGroup3, AlienGroup);
    game.physics.arcade.collide(player, wallGroup3);
    game.physics.arcade.collide(player, ball);
    game.physics.arcade.collide(ball, wallGroup3);

    function laserWall(bullet) {
      laser.killAll()
    }
    AlienOneUpdate();

  }
};