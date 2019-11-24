var level2State = {
  render: function() {
    //game.debug.pointer(game.input.activePointer);
    //game.debug.inputInfo(500, 300);
  },

  create: function() {
    //background and world bounds
    background2 = game.add.sprite(0, 0, 'level2');
    background2.scale.setTo(2.5);
    game.world.setBounds(0, 0, background2.width, background2.height);

    width = background2.width - 105
    height = background2.height - 81
    borders2();
    PlayerStartX = 755
    PlayerStartY = 1468
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
    wallGroup = wallGroup2
    allLevelsUpdate();
    game.physics.arcade.collide(wallGroup2, laser.bullets, laserWall);
    game.physics.arcade.collide(wallGroup2, AlienGroup);
    game.physics.arcade.collide(player, wallGroup2);

    function laserWall(bullet) {
      laser.killAll()
    }
  }
}