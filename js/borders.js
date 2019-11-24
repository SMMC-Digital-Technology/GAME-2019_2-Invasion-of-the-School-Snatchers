var borderState = {
  create: function() {
    game.state.start('menu')
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

function borders2() {

  wallGroup2 = game.add.group();

  wallTwo1 = wallGroup2.create(865, 755, 'wall');
  wallTwo1.width = 335;
  wallTwo1.height = 4;

  wallTwo2 = wallGroup2.create(1474, 755, 'wall');
  wallTwo2.width = 275;
  wallTwo2.height = 3.5;

  wallTwo3 = wallGroup2.create(1130, 0, 'wall');
  wallTwo3.width = 4;
  wallTwo3.height = 755;

  wallTwo4 = wallGroup2.create(866, 953, 'wall');
  wallTwo4.width = 885;
  wallTwo4.height = 3;

  wallTwo5 = wallGroup2.create(1133, 0, 'wall');
  wallTwo5.width = 430;
  wallTwo5.height = 115;

  wallTwo6 = wallGroup2.create(1407, 290, 'wall');
  wallTwo6.width = 350;
  wallTwo6.height = 112;

  wallTwo7 = wallGroup2.create(1408, 550, 'wall');
  wallTwo7.width = 350;
  wallTwo7.height = 112;

  wallTwo8 = wallGroup2.create(508, 0, 'wall');
  wallTwo8.width = 4;
  wallTwo8.height = 755;

  wallTwo9 = wallGroup2.create(354, 756, 'wall');
  wallTwo9.width = 255;
  wallTwo9.height = 3;

  wallTwo10 = wallGroup2.create(0, 755, 'wall');
  wallTwo10.width = 88;
  wallTwo10.height = 3;

  wallTwo11 = wallGroup2.create(77, 143, 'wall');
  wallTwo11.width = 431.5;
  wallTwo11.height = 111.5;

  wallTwo12 = wallGroup2.create(77, 435, 'wall');
  wallTwo12.width = 431.5;
  wallTwo12.height = 111.5;

  wallTwo13 = wallGroup2.create(355, 667, 'wall');
  wallTwo13.width = 153;
  wallTwo13.height = 90;

  wallTwo14 = wallGroup2.create(608, 0, 'wall');
  wallTwo14.width = 362;
  wallTwo14.height = 113.5;

  wallTwo15 = wallGroup2.create(612.5, 253, 'wall');
  wallTwo15.width = 355;
  wallTwo15.height = 111;

  wallTwo16 = wallGroup2.create(610.5, 495, 'wall');
  wallTwo16.width = 353;
  wallTwo16.height = 112;

  wallTwo17 = wallGroup2.create(0, 953, 'wall');
  wallTwo17.width = 634;
  wallTwo17.height = 3;

  wallTwo18 = wallGroup2.create(633, 953, 'wall');
  wallTwo18.width = 3;
  wallTwo18.height = 190;

  wallTwo19 = wallGroup2.create(633, 1276, 'wall');
  wallTwo19.width = 3;
  wallTwo19.height = 225;

  wallTwo20 = wallGroup2.create(865.5, 954, 'wall');
  wallTwo20.width = 3;
  wallTwo20.height = 130;

  wallTwo21 = wallGroup2.create(865.5, 1220, 'wall');
  wallTwo21.width = 3;
  wallTwo21.height = 283;

  wallTwo22 = wallGroup2.create(873, 1220, 'wall');
  wallTwo22.width = 154;
  wallTwo22.height = 281;

  wallTwo23 = wallGroup2.create(1320, 955, 'wall');
  wallTwo23.width = 430;
  wallTwo23.height = 117.5;

  wallTwo24 = wallGroup2.create(1320, 1169, 'wall');
  wallTwo24.width = 430;
  wallTwo24.height = 113;

  wallTwo25 = wallGroup2.create(1320.5, 1385, 'wall');
  wallTwo25.width = 430;
  wallTwo25.height = 115;

  wallTwo26 = wallGroup2.create(318, 1035, 'wall');
  wallTwo26.width = 290;
  wallTwo26.height = 95;

  wallTwo27 = wallGroup2.create(319, 1330, 'wall');
  wallTwo27.width = 300;
  wallTwo27.height = 148;

  wallTwo28 = wallGroup2.create(7, 1012, 'wall');
  wallTwo28.width = 159.5;
  wallTwo28.height = 433;

  game.physics.arcade.enable(wallGroup2);
  wallGroup2.children.forEach(function(child) {
    child.body.immovable = true;
  });

  wallGroup2.setAll('alpha', 0);
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
  wallThree9.width = 600;
  wallThree9.height = 448.2;

  wallThree10 = wallGroup3.create(1265, 762.4, 'wall');
  wallThree10.width = 37.8;
  wallThree10.height = 27.4;

  wallThree11 = wallGroup3.create(1299, 950, 'wall');
  wallThree11.width = 450;
  wallThree11.height = 8;

  wallThree12 = wallGroup3.create(1268, 916, 'wall');
  wallThree12.width = 34;
  wallThree12.height = 146;

  wallThree13 = wallGroup3.create(1267, 1178, 'wall');
  wallThree13.width = 34;
  wallThree13.height = 350;

  wallThree14 = wallGroup3.create(1404, 1026, 'wall');
  wallThree14.width = 269;
  wallThree14.height = 52;

  wallThree15 = wallGroup3.create(1402, 1168, 'wall');
  wallThree15.width = 271;
  wallThree15.height = 50;

  wallThree16 = wallGroup3.create(1402, 1307, 'wall');
  wallThree16.width = 270;
  wallThree16.height = 50;

  wallThree17 = wallGroup3.create(1402, 1454, 'wall');
  wallThree17.width = 270;
  wallThree17.height = 50;

  wallThree18 = wallGroup3.create(620, 933, 'wall');
  wallThree18.width = 66;
  wallThree18.height = 162;

  wallThree21 = wallGroup3.create(1070, 934, 'wall');
  wallThree21.width = 70;
  wallThree21.height = 162;

  wallThree22 = wallGroup3.create(1422, 179, 'wall');
  wallThree22.width = 263;
  wallThree22.height = 52;

  wallThree23 = wallGroup3.create(1510, 0, 'wall');
  wallThree23.width = 263;
  wallThree23.height = 87;

  game.physics.arcade.enable(wallGroup3);
  wallGroup3.children.forEach(function(child) {
    child.body.immovable = true;
  });

  wallGroup3.setAll('alpha', 0) //makes walls invisble
}
