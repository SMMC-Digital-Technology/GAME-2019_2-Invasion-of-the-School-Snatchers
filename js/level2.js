/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var level2State = {

  render: function() {},

  create: function() {
    //background and world bounds
    background2 = game.add.sprite(0, 0, 'level2');
    background2.scale.setTo(2.5);
    game.world.setBounds(0, 0, background2.width, background2.height);

    width = background2.width - 105
    height = background2.width - 81

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