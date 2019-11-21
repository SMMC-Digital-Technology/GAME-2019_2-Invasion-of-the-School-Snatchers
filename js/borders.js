/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var borderState = {
  create: function() {
    game.state.start('level')
    console.log('border state complete')
  }
};

function borders() {
  //borders

  //border 1

  wallGroup = game.add.group();

  //gym
  wall1 = wallGroup.create(109, 299, 'wall');
  wall1.width = 8;
  wall1.height = 930.6;

  wall2 = wallGroup.create(529, 435, 'wall');
  wall2.width = 8;
  wall2.height = 655;

  wall3 = wallGroup.create(109, 1223, 'wall');
  wall3.width = 428;
  wall3.height = 8;

  wall4 = wallGroup.create(530, 1185.2, 'wall');
  wall4.width = 8;
  wall4.height = 45.6;

  wall5 = wallGroup.create(109, 299, 'wall');
  wall5.width = 428;
  wall5.height = 8;

  wall6 = wallGroup.create(530, 299, 'wall');
  wall6.width = 8;
  wall6.height = 45.6;

  game.physics.arcade.enable(wallGroup);

  wall1.body.immovable = true;
  wall2.body.immovable = true;
  wall3.body.immovable = true;
  wall4.body.immovable = true;
  wall5.body.immovable = true;
  wall6.body.immovable = true;

  wallGroup.setAll('alpha', 0) //makes walls invisble


  //walls.body.immovable = true;
  //walls.anchor.setTo(0.5);
  console.log('bigbrain')
}