var level1State = {

  render: function() {
    game.debug.pointer(game.input.activePointer);
    game.debug.inputInfo(500, 300);
  },

  create: function() {
    //background and world bounds
    background1 = game.add.sprite(0, 0, 'level1');
    background1.scale.setTo(2.5);
    game.world.setBounds(0, 0, background1.width, background1.height);

    width = background1.width - 105
    height = background1.width - 81
    borders1();
    AlienOneCreate();
    allLevelsCreate();
  },
  update: function() {
    game.physics.arcade.collide(wallGroup1, laser.bullets, laserWall);
    game.physics.arcade.collide([AlienGroup], [wallGroup1]);
    game.physics.arcade.collide(player, wallGroup1);

    AlienOneUpdate();
    allLevelsUpdate();

    function laserWall(bullet) {
      laser.killAll()
    }
  }
}
