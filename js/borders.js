var borderState = {
  create: function() {
    game.state.start('aliens')
    console.log('border state complete')
  }
};
//Level One Borders
function borders1() {

  wallGroup1 = game.add.group();

  wallOne1 = wallGroup1.create(0, 0, 'wall');
  wallOne1.width = 531;
  wallOne1.height = 74;

  wallOne2 = wallGroup1.create(0, 280.4, 'wall');
  wallOne2.width = 639.8;
  wallOne2.height = 90;

  wallOne3 = wallGroup1.create(639.9, 0, 'wall');
  wallOne3.width = 8;
  wallOne3.height = 89;

  wallOne4 = wallGroup1.create(639.9, 220.7, 'wall');
  wallOne4.width = 8;
  wallOne4.height = 350.5;

  wallOne5 = wallGroup1.create(85, 434, 'wall');
  wallOne5.width = 485;
  wallOne5.height = 228.4;

  wallOne6 = wallGroup1.create(85, 763, 'wall');
  wallOne6.width = 485;
  wallOne6.height = 237;

  wallOne7 = wallGroup1.create(639.9, 878, 'wall');
  wallOne7.width = 8;
  wallOne7.height = 408;

  wallOne8 = wallGroup1.create(0, 1024.4, 'wall');
  wallOne8.width = 639.8;
  wallOne8.height = 255.4;

  wallOne9 = wallGroup1.create(0, 1384.8, 'wall');
  wallOne9.width = 647.8;
  wallOne9.height = 255.4;

  wallOne10 = wallGroup1.create(859.4, 1275.6, 'wall');
  wallOne10.width = 8;
  wallOne10.height = 255.4;

  wallOne11 = wallGroup1.create(867.4, 1366.4, 'wall');
  wallOne11.width = 94.6;
  wallOne11.height = 255.4;

  wallOne12 = wallGroup1.create(962, 1263, 'wall');
  wallOne12.width = 447.2;
  wallOne12.height = 255.4;

  wallOne13 = wallGroup1.create(1409.2, 1174.8, 'wall');
  wallOne13.width = 447.2;
  wallOne13.height = 400;

  wallOne14 = wallGroup1.create(859.4, 984, 'wall');
  wallOne14.width = 900;
  wallOne14.height = 190.8;

  wallOne15 = wallGroup1.create(859.4, 855.2, 'wall');
  wallOne15.width = 604.6;
  wallOne15.height = 190.8;

  wallOne16 = wallGroup1.create(1559.2, 740, 'wall');
  wallOne16.width = 200;
  wallOne16.height = 167;

  wallOne17 = wallGroup1.create(859.4, 732.4, 'wall');
  wallOne17.width = 890.6;
  wallOne17.height = 8;

  wallOne17 = wallGroup1.create(859.4, 170.6, 'wall');
  wallOne17.width = 8;
  wallOne17.height = 561.8;

  wallOne18 = wallGroup1.create(859.4, 0, 'wall');
  wallOne18.width = 8;
  wallOne18.height = 19;

  wallOne19 = wallGroup1.create(1161, 0, 'wall');
  wallOne19.width = 600;
  wallOne19.height = 121.2;

  wallOne20 = wallGroup1.create(905, 456, 'wall');
  wallOne20.width = 180;
  wallOne20.height = 194;

  wallOne21 = wallGroup1.create(1414.8, 535.8, 'wall');
  wallOne21.width = 68;
  wallOne21.height = 141.8;

  wallOne21 = wallGroup1.create(1696, 534, 'wall');
  wallOne21.width = 60;
  wallOne21.height = 173;

  game.physics.arcade.enable(wallGroup1);
  wallGroup1.children.forEach(function(child) {
    child.body.immovable = true;
  });

  wallGroup1.setAll('alpha', 0) //makes walls invisble
}









//Level Three Borders
function borders3() {

  wallGroup3 = game.add.group();

  wallThree1 = wallGroup3.create(109, 299, 'wall');
  wallThree1.width = 8;
  wallThree1.height = 930.6;

  wallThree2 = wallGroup3.create(529, 435, 'wall');
  wallThree2.width = 8;
  wallThree2.height = 655;

  wallThree3 = wallGroup3.create(109, 1223, 'wall');
  wallThree3.width = 428;
  wallThree3.height = 8;

  wallThree4 = wallGroup3.create(530, 1185.2, 'wall');
  wallThree4.width = 8;
  wallThree4.height = 45.6;

  wallThree5 = wallGroup3.create(109, 299, 'wall');
  wallThree5.width = 428;
  wallThree5.height = 8;

  wallThree6 = wallGroup3.create(530, 299, 'wall');
  wallThree6.width = 8;
  wallThree6.height = 45.6;

  wallThree7 = wallGroup3.create(1140, 767, 'wall');
  wallThree7.width = 6;
  wallThree7.height = 732;

  wallThree8 = wallGroup3.create(1266, 0, 'wall');
  wallThree8.width = 36;
  wallThree8.height = 225;

  wallThree9 = wallGroup3.create(1265, 314, 'wall');
  wallThree9.width = 36;
  wallThree9.height = 475;

  wallThree10 = wallGroup3.create(1299, 314, 'wall');
  wallThree10.width = 450;
  wallThree10.height = 8;

  wallThree11 = wallGroup3.create(1299, 754, 'wall');
  wallThree11.width = 450;
  wallThree11.height = 8;

  wallThree12 = wallGroup3.create(1299, 950, 'wall');
  wallThree12.width = 450;
  wallThree12.height = 8;

  wallThree13 = wallGroup3.create(1268, 916, 'wall');
  wallThree13.width = 34;
  wallThree13.height = 146;

  wallThree14 = wallGroup3.create(1267, 1178, 'wall');
  wallThree14.width = 34;
  wallThree14.height = 350;

  wallThree15 = wallGroup3.create(1404, 1026, 'wall');
  wallThree15.width = 269;
  wallThree15.height = 52;

  wallThree16 = wallGroup3.create(1402, 1168, 'wall');
  wallThree16.width = 271;
  wallThree16.height = 50;

  wallThree17 = wallGroup3.create(1402, 1307, 'wall');
  wallThree17.width = 270;
  wallThree17.height = 50;

  wallThree18 = wallGroup3.create(1402, 1454, 'wall');
  wallThree18.width = 270;
  wallThree18.height = 50;

  wallThree19 = wallGroup3.create(620, 933, 'wall');
  wallThree19.width = 66;
  wallThree19.height = 162;

  wallThree20 = wallGroup3.create(1070, 934, 'wall');
  wallThree20.width = 70;
  wallThree20.height = 162;

  wallThree21 = wallGroup3.create(1422, 179, 'wall');
  wallThree21.width = 263;
  wallThree21.height = 52;

  wallThree22 = wallGroup3.create(1510, 0, 'wall');
  wallThree22.width = 263;
  wallThree22.height = 87;

  game.physics.arcade.enable(wallGroup3);
  wallGroup3.children.forEach(function(child) {
    child.body.immovable = true;
  });

  wallGroup3.setAll('alpha', 0) //makes walls invisble
}