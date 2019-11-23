var level1State = {

  render: function() {

  },

  create: function() {
    //background and world bounds
    background1 = game.add.sprite(0, 0, 'level1');
    background1.scale.setTo(2.5);
    game.world.setBounds(0, 0, background1.width, background1.height);

    width = background1.width - 105
    height = background1.width - 81
    AlienOneCreate();
    allLevelsCreate();
  },
  update: function() {
    AlienOneUpdate();
    allLevelsUpdate();

    function laserWall(bullet) {
      laser.killAll()
    }
  }
}