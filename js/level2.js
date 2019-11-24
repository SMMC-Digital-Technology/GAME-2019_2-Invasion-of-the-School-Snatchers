/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var level2State = {

  create: function() {
    //background and world bounds
    background2 = game.add.sprite(0, 0, 'level2');
    background2.scale.setTo(2.5);
    game.world.setBounds(0, 0, background2.width, background2.height);

    width = background2.width - 105
    height = background2.height - 81
    borders2();
    AlienOneCreate();
    allLevelsCreate();

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
    allLevelsUpdate();
    game.physics.arcade.collide(wallGroup2, laser.bullets, laserWall);
    game.physics.arcade.collide(wallGroup2, AlienGroup);
    game.physics.arcade.collide(player, wallGroup2);

    function laserWall(bullet) {
      laser.killAll()
    }
  }
}