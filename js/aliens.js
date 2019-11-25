var alienState = {
  create: function() {
    game.state.start('menu')
    console.log('alien state complete')
  }
};
//create the group for the aliens in each level
function AlienOneCreate() {
  AlienGroup = game.add.group();

  Alien1 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien2 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien3 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien4 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien5 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien6 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien7 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien8 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');
  Alien9 = AlienGroup.create(game.rnd.integerInRange(105, width), game.rnd.integerInRange(81, height), 'sAlien');

//enable physics and animations for ther group
  AlienGroup.children.forEach(function(child) {
    game.physics.arcade.enable(child);
    child.anchor.setTo(0.5);
    child.scale.setTo(0.3);
    child.animations.add('StudentMove');
    child.animations.play('StudentMove', 50, true);
    child.body.setCircle(110, (child.width / 2) + 20, (child.height / 2) - 20);
    child.body.collideWorldBounds = true;
  });

//set each aliens health variable
  alien1Health = 3;
  alien2Health = 3;
  alien3Health = 3;
  alien4Health = 3;
  alien5Health = 3;
  alien6Health = 3;
  alien7Health = 3;
  alien8Health = 3;
  alien9Health = 3;

  AlienPopulation = 9;
}

function AlienOneUpdate() {

//damage and collisions for the aliens
  AlienGroup.children.forEach(function(child) { //Applies code to all of the group's children to avoid using group code
    game.physics.arcade.collide(AlienGroup, child);
    game.physics.arcade.moveToObject(child, player, 800)
    game.physics.arcade.overlap(laser.bullets, Alien1, Damage1);
    game.physics.arcade.overlap(laser.bullets, Alien2, Damage2);
    game.physics.arcade.overlap(laser.bullets, Alien3, Damage3);
    game.physics.arcade.overlap(laser.bullets, Alien4, Damage4);
    game.physics.arcade.overlap(laser.bullets, Alien5, Damage5);
    game.physics.arcade.overlap(laser.bullets, Alien6, Damage6);
    game.physics.arcade.overlap(laser.bullets, Alien7, Damage7);
    game.physics.arcade.overlap(laser.bullets, Alien8, Damage8);
    game.physics.arcade.overlap(laser.bullets, Alien9, Damage9);

    function Damage1(bullet, Alien1) {
      console.log('damage')
      alien1Health -= 1
      laser.killAll()
    }

    function Damage2(bullet, Alien2) {
      console.log('damage')
      alien2Health -= 1
      laser.killAll()

    }

    function Damage3(bullet, Alien3) {
      console.log('damage')
      alien3Health -= 1
      laser.killAll()

    }

    function Damage4(bullet, Alien4) {
      console.log('damage')
      alien4Health -= 1
      laser.killAll()

    }

    function Damage5(bullet, Alien5) {
      console.log('damage')
      alien5Health -= 1
      laser.killAll()
    }

    function Damage6(bullet, Alien6) {
      console.log('damage')
      alien6Health -= 1
      laser.killAll()
    }

    function Damage7(bullet, Alien7) {
      console.log('damage')
      alien7Health -= 1
      laser.killAll()

    }

    function Damage8(bullet, Alien8) {
      console.log('damage')
      alien8Health -= 1
      laser.killAll()

    }

    function Damage9(bullet, Alien9) {
      console.log('damage')
      alien9Health -= 1
      laser.killAll()
    }

//kill aliens and set their rotation
    if (alien1Health < 0) {
      Alien1.body.moves = false;
      Alien1.minRotation = 0;
      Alien1.maxRotation = 0;
      deathFade = game.add.tween(Alien1).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill1);
      Alien1.animations.stop('StudentMove', 50, true);
    } else {
      Alien1.rotation = Math.atan2(player.y - Alien1.y, player.x - Alien1.x) - Math.PI / 2;
      Alien1.minRotation = 0;
      Alien1.maxRotation = 360;
    }

    if (alien2Health < 0) {
      Alien2.body.moves = false;
      Alien2.minRotation = 0;
      Alien2.maxRotation = 0;
      deathFade = game.add.tween(Alien2).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill2);
      Alien2.animations.stop('StudentMove', 50, true);
    } else {
      Alien2.rotation = Math.atan2(player.y - Alien2.y, player.x - Alien2.x) - Math.PI / 2;
      Alien2.minRotation = 0;
      Alien2.maxRotation = 360;
    }

    if (alien3Health < 0) {
      Alien3.body.moves = false;
      Alien3.minRotation = 0;
      Alien3.maxRotation = 0;
      deathFade = game.add.tween(Alien3).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill3);
      Alien3.animations.stop('StudentMove', 50, true);
    } else {
      Alien3.rotation = Math.atan2(player.y - Alien3.y, player.x - Alien3.x) - Math.PI / 2;
      Alien3.minRotation = 0;
      Alien3.maxRotation = 360;
    }

    if (alien4Health < 0) {
      Alien4.body.moves = false;
      Alien4.minRotation = 0;
      Alien4.maxRotation = 0;
      deathFade = game.add.tween(Alien4).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill4);
      Alien4.animations.stop('StudentMove', 50, true);
    } else {
      Alien4.rotation = Math.atan2(player.y - Alien4.y, player.x - Alien4.x) - Math.PI / 2;
      Alien4.minRotation = 0;
      Alien4.maxRotation = 360;
    }

    if (alien5Health < 0) {
      Alien5.body.moves = false;
      Alien5.minRotation = 0;
      Alien5.maxRotation = 0;
      deathFade = game.add.tween(Alien5).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill5);
      Alien5.animations.stop('StudentMove', 50, true);
    } else {
      Alien5.rotation = Math.atan2(player.y - Alien5.y, player.x - Alien5.x) - Math.PI / 2;
      Alien5.minRotation = 0;
      Alien5.maxRotation = 360;
    }

    if (alien6Health < 0) {
      Alien6.body.moves = false;
      Alien6.minRotation = 0;
      Alien6.maxRotation = 0;
      deathFade = game.add.tween(Alien6).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill6);
      Alien6.animations.stop('StudentMove', 50, true);
    } else {
      Alien6.rotation = Math.atan2(player.y - Alien6.y, player.x - Alien6.x) - Math.PI / 2;
      Alien6.minRotation = 0;
      Alien6.maxRotation = 360;
    }

    if (alien7Health < 0) {
      Alien7.body.moves = false;
      Alien7.minRotation = 0;
      Alien7.maxRotation = 0;
      deathFade = game.add.tween(Alien7).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill7);
      Alien7.animations.stop('StudentMove', 50, true);
    } else {
      Alien7.rotation = Math.atan2(player.y - Alien7.y, player.x - Alien7.x) - Math.PI / 2;
      Alien7.minRotation = 0;
      Alien7.maxRotation = 360;
    }

    if (alien8Health < 0) {
      Alien8.body.moves = false;
      Alien8.minRotation = 0;
      Alien8.maxRotation = 0;
      deathFade = game.add.tween(Alien8).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill8);
      Alien8.animations.stop('StudentMove', 50, true);
    } else {
      Alien8.rotation = Math.atan2(player.y - Alien8.y, player.x - Alien8.x) - Math.PI / 2;
      Alien8.minRotation = 0;
      Alien8.maxRotation = 360;
    }

    if (alien9Health < 0) {
      Alien9.body.moves = false;
      Alien9.minRotation = 0;
      Alien9.maxRotation = 0;
      deathFade = game.add.tween(Alien9).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill9);
      Alien9.animations.stop('StudentMove', 50, true);
    } else {
      Alien9.rotation = Math.atan2(player.y - Alien9.y, player.x - Alien9.x) - Math.PI / 2;
      Alien9.minRotation = 0;
      Alien9.maxRotation = 360;
    }

//kill the aliens function
    function Kill1() {
      AlienGroup.remove(Alien1);
    }

    function Kill2() {
      AlienGroup.remove(Alien2);
    }

    function Kill3() {
      AlienGroup.remove(Alien3);
    }

    function Kill4() {
      AlienGroup.remove(Alien4);
    }

    function Kill5() {
      AlienGroup.remove(Alien5);
    }

    function Kill6() {
      AlienGroup.remove(Alien6);
    }

    function Kill7() {
      AlienGroup.remove(Alien7);
    }

    function Kill8() {
      AlienGroup.remove(Alien8);
    }

    function Kill9() {
      AlienGroup.remove(Alien9);
    }

    if (AlienGroup.total == 0) {
      PlayerStatus = 2
      game.state.start('gameover')
    }
  });


}
