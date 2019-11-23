var borderState = {
  create: function() {
    game.state.start('aliens')
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

  wall7 = wallGroup.create(1140, 767, 'wall');
  wall7.width = 6;
  wall7.height = 732;

  wall8 = wallGroup.create(1266, 0, 'wall');
  wall8.width = 36;
  wall8.height = 225;

  wall9 = wallGroup.create(1265, 314, 'wall');
  wall9.width = 36;
  wall9.height = 475;

  wall10 = wallGroup.create(1299, 314, 'wall');
  wall10.width = 450;
  wall10.height = 8;

  wall11 = wallGroup.create(1299, 754, 'wall');
  wall11.width = 450;
  wall11.height = 8;

  wall12 = wallGroup.create(1299, 950, 'wall');
  wall12.width = 450;
  wall12.height = 8;

  wall13 = wallGroup.create(1268, 916, 'wall');
  wall13.width = 34;
  wall13.height = 146;

  wall14 = wallGroup.create(1267, 1178, 'wall');
  wall14.width = 34;
  wall14.height = 350;

  wall15 = wallGroup.create(1404, 1026, 'wall');
  wall15.width = 269;
  wall15.height = 52;

  wall16 = wallGroup.create(1402, 1168, 'wall');
  wall16.width = 271;
  wall16.height = 50;

  wall17 = wallGroup.create(1402, 1307, 'wall');
  wall17.width = 270;
  wall17.height = 50;

  wall18 = wallGroup.create(1402, 1454, 'wall');
  wall18.width = 270;
  wall18.height = 50;

  wall19 = wallGroup.create(620, 933, 'wall');
  wall19.width = 66;
  wall19.height = 162;

  wall20 = wallGroup.create(1070, 934, 'wall');
  wall20.width = 70;
  wall20.height = 162;

  wall21 = wallGroup.create(1422, 179, 'wall');
  wall21.width = 263;
  wall21.height = 52;

  wall22 = wallGroup.create(1510, 0, 'wall');
  wall22.width = 263;
  wall22.height = 87;

  game.physics.arcade.enable(wallGroup);

  wall1.body.immovable = true;
  wall2.body.immovable = true;
  wall3.body.immovable = true;
  wall4.body.immovable = true;
  wall5.body.immovable = true;
  wall6.body.immovable = true;
  wall7.body.immovable = true;
  wall8.body.immovable = true;
  wall9.body.immovable = true;
  wall10.body.immovable = true;
  wall11.body.immovable = true;
  wall12.body.immovable = true;
  wall13.body.immovable = true;
  wall14.body.immovable = true;
  wall15.body.immovable = true;
  wall16.body.immovable = true;
  wall17.body.immovable = true;
  wall18.body.immovable = true;
  wall19.body.immovable = true;
  wall20.body.immovable = true;
  wall21.body.immovable = true;
  wall22.body.immovable = true;

  wallGroup.setAll('alpha', 0) //makes walls invisble


  //walls.body.immovable = true;
  //walls.anchor.setTo(0.5);
  console.log('bigbrain')
}