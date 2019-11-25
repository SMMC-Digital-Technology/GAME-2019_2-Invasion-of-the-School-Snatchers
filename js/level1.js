var level1State = {

  create: function() {
    PlayerStatus = 0;
    //background and world bounds
    background1 = game.add.sprite(0, 0, 'level1');
    background1.scale.setTo(2.5);
    game.world.setBounds(0, 0, background1.width, background1.height);

    width = background1.width - 105
    height = background1.height - 81
    borders1();
    PlayerStartX = 755;
    PlayerStartY = 1468;
    allLevelsCreate();
    AlienOneCreate();

    PlayerHealthText = game.add.text(200, 500, "Health: " + playerhealth, {
      font: "32px Arial",
      fill: "#ffffff",
      align: "center"
    });
    PlayerHealthText.fixedToCamera = true;
    PlayerHealthText.cameraOffset.setTo(50, 50)


  },
  update: function() {
    AlienOneUpdate();
    wallGroup = wallGroup1
    allLevelsUpdate();
    game.physics.arcade.collide(wallGroup1, laser.bullets, laserWall);
    game.physics.arcade.collide(wallGroup1, AlienGroup);
    game.physics.arcade.collide(player, wallGroup1);



    function laserWall(bullet) {
      laser.killAll()
    }
  }
}
