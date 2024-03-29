var level3State = {

  create: function() {
    PlayerStatus = 0;

    //background and world bounds
    background3 = game.add.sprite(0, 0, 'level3');
    background3.scale.setTo(2.5);
    game.world.setBounds(0, 0, background3.width, background3.height);


    width = 1260 - 105
    height = background3.height - 81

    //adding in borders
    borders3();
    PlayerStartX = 1622;
    PlayerStartY = 868;
    allLevelsCreate();
    AlienOneCreate();

    PlayerHealthText = game.add.text(200, 500, "Health: " + playerhealth, {
      font: "32px Arial",
      fill: "#ffffff",
      align: "center"
    });
    PlayerHealthText.fixedToCamera = true;
    PlayerHealthText.cameraOffset.setTo(50, 50)


    ball = game.add.sprite(876, 1017, 'ball');
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.25);
    ball.scale.setTo(0.15);


  },
  update: function() {

    game.physics.arcade.collide(wallGroup3, laser.bullets, laserWall);
    game.physics.arcade.collide(wallGroup3, AlienGroup);
    game.physics.arcade.collide(player, wallGroup3);
    game.physics.arcade.collide(player, ball);
    game.physics.arcade.collide(ball, wallGroup3);

    function laserWall(bullet) {
      laser.killAll()
    }
    AlienOneUpdate();
    wallGroup = wallGroup3
    allLevelsUpdate();


  }
};
