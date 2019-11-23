var alienState = {
  create: function() {
    game.state.start('allLevels')
    console.log('alien state complete')
  }
};

function AlienOneCreate() {
  AlienGroup = game.add.group();

  Alien1 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien2 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien3 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien4 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien5 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien6 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien7 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien8 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien9 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  Alien10 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  /*  Alien11 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien12 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien13 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien14 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien15 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien16 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
    Alien17 = AlienGroup.create(game.rnd.integerInRange(width, 1260 - width), game.rnd.integerInRange(width, height), 'sAlien');
  */

  AlienGroup.children.forEach(function(child) {
    game.physics.arcade.enable(child);
    child.anchor.setTo(0.5);
    child.scale.setTo(0.3);
    child.animations.add('StudentMove');
    child.animations.play('StudentMove', 50, true);
    child.body.setCircle(110, (child.width / 2) + 20, (child.height / 2) - 20);
    child.body.collideWorldBounds = true;
  });

  alien1Health = 3;
  alien2Health = 3;
  alien3Health = 3;
  alien4Health = 3;
  alien5Health = 3;
  alien6Health = 3;
  alien7Health = 3;
  alien8Health = 3;
  alien9Health = 3;
  alien10Health = 3;
  /*  alien11Health = 3;
    alien12Health = 3;
    alien13Health = 3;
    alien14Health = 3;
    alien15Health = 3;
    alien16Health = 3;
    alien17Health = 3;*/
}

function AlienOneUpdate() {

  AlienGroup.children.forEach(function(child) { //Applies code to all of the group's children to avoid using group code
    game.physics.arcade.collide(AlienGroup, child);
    game.physics.arcade.moveToObject(child, player, 600)
    game.physics.arcade.overlap(laser.bullets, Alien1, Damage1);
    game.physics.arcade.overlap(laser.bullets, Alien2, Damage2);
    game.physics.arcade.overlap(laser.bullets, Alien3, Damage3);
    game.physics.arcade.overlap(laser.bullets, Alien4, Damage4);
    game.physics.arcade.overlap(laser.bullets, Alien5, Damage5);
    game.physics.arcade.overlap(laser.bullets, Alien6, Damage6);
    game.physics.arcade.overlap(laser.bullets, Alien7, Damage7);
    game.physics.arcade.overlap(laser.bullets, Alien8, Damage8);
    game.physics.arcade.overlap(laser.bullets, Alien9, Damage9);
    game.physics.arcade.overlap(laser.bullets, Alien10, Damage10);
    /*    game.physics.arcade.overlap(laser.bullets, Alien11, Damage11);
        game.physics.arcade.overlap(laser.bullets, Alien12, Damage12);
        game.physics.arcade.overlap(laser.bullets, Alien13, Damage13);
        game.physics.arcade.overlap(laser.bullets, Alien14, Damage14);
        game.physics.arcade.overlap(laser.bullets, Alien15, Damage15);
        game.physics.arcade.overlap(laser.bullets, Alien16, Damage16);
        game.physics.arcade.overlap(laser.bullets, Alien17, Damage17);*/

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

    function Damage10(bullet, Alien10) {
      console.log('damage')
      alien10Health -= 1
      laser.killAll()
    }
    /*
        function Damage11(bullet, Alien11) {
          console.log('damage')
          alien11Health -= 1
          laser.killAll()

        }

        function Damage12(bullet, Alien12) {
          console.log('damage')
          alien12Health -= 1
          laser.killAll()

        }

        function Damage13(bullet, Alien13) {
          console.log('damage')
          alien13Health -= 1
          laser.killAll()
        }

        function Damage14(bullet, Alien14) {
          console.log('damage')
          alien14Health -= 1
          laser.killAll()
        }

        function Damage15(bullet, Alien15) {
          console.log('damage')
          alien15Health -= 1
          laser.killAll()

        }

        function Damage16(bullet, Alien16) {
          console.log('damage')
          alien16Health -= 1
          laser.killAll()

        }

        function Damage17(bullet, Alien17) {
          console.log('damage')
          alien17Health -= 1
          laser.killAll()

        }
    */
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

    if (alien10Health < 0) {
      Alien10.body.moves = false;
      Alien10.minRotation = 0;
      Alien10.maxRotation = 0;
      deathFade = game.add.tween(Alien10).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill10);
      Alien10.animations.stop('StudentMove', 50, true);
    } else {
      Alien10.rotation = Math.atan2(player.y - Alien10.y, player.x - Alien10.x) - Math.PI / 2;
      Alien10.minRotation = 0;
      Alien10.maxRotation = 360;
    }
    /*
        if (alien11Health < 0) {
          Alien11.body.moves = false;
          Alien11.minRotation = 0;
          Alien11.maxRotation = 0;
          deathFade = game.add.tween(Alien11).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill11);
          Alien11.animations.stop('StudentMove', 50, true);
        } else {
          Alien11.rotation = Math.atan2(player.y - Alien11.y, player.x - Alien11.x) - Math.PI / 2;
          Alien11.minRotation = 0;
          Alien11.maxRotation = 360;
        }

        if (alien12Health < 0) {
          Alien12.body.moves = false;
          Alien12.minRotation = 0;
          Alien12.maxRotation = 0;
          deathFade = game.add.tween(Alien12).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill12);
          Alien12.animations.stop('StudentMove', 50, true);
        } else {
          Alien12.rotation = Math.atan2(player.y - Alien12.y, player.x - Alien12.x) - Math.PI / 2;
          Alien12.minRotation = 0;
          Alien12.maxRotation = 360;
        }

        if (alien13Health < 0) {
          Alien13.body.moves = false;
          Alien13.minRotation = 0;
          Alien13.maxRotation = 0;
          deathFade = game.add.tween(Alien13).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill13);
          Alien13.animations.stop('StudentMove', 50, true);
        } else {
          Alien13.rotation = Math.atan2(player.y - Alien13.y, player.x - Alien13.x) - Math.PI / 2;
          Alien13.minRotation = 0;
          Alien13.maxRotation = 360;
        }

        if (alien14Health < 0) {
          Alien14.body.moves = false;
          Alien14.minRotation = 0;
          Alien14.maxRotation = 0;
          deathFade = game.add.tween(Alien14).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill14);
          Alien14.animations.stop('StudentMove', 50, true);
        } else {
          Alien14.rotation = Math.atan2(player.y - Alien14.y, player.x - Alien14.x) - Math.PI / 2;
          Alien14.minRotation = 0;
          Alien14.maxRotation = 360;
        }

        if (alien15Health < 0) {
          Alien15.body.moves = false;
          Alien15.minRotation = 0;
          Alien15.maxRotation = 0;
          deathFade = game.add.tween(Alien15).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill15);
          Alien15.animations.stop('StudentMove', 50, true);
        } else {
          Alien15.rotation = Math.atan2(player.y - Alien15.y, player.x - Alien15.x) - Math.PI / 2;
          Alien15.minRotation = 0;
          Alien15.maxRotation = 360;
        }

        if (alien16Health < 0) {
          Alien16.body.moves = false;
          Alien16.minRotation = 0;
          Alien16.maxRotation = 0;
          deathFade = game.add.tween(Alien16).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill16);
          Alien16.animations.stop('StudentMove', 50, true);
        } else {
          Alien16.rotation = Math.atan2(player.y - Alien16.y, player.x - Alien16.x) - Math.PI / 2;
          Alien16.minRotation = 0;
          Alien16.maxRotation = 360;
        }

        if (alien17Health < 0) {
          Alien17.body.moves = false;
          Alien17.minRotation = 0;
          Alien17.maxRotation = 0;
          deathFade = game.add.tween(Alien17).to({
            alpha: 0
          }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
          game.time.events.add(Phaser.Timer.SECOND * 1, Kill17);
          Alien17.animations.stop('StudentMove', 50, true);
        } else {
          Alien17.rotation = Math.atan2(player.y - Alien17.y, player.x - Alien17.x) - Math.PI / 2;
          Alien17.minRotation = 0;
          Alien17.maxRotation = 360;
        }
    */
    function Kill1() {
      Alien1.kill();
    }

    function Kill2() {
      Alien2.kill();
    }

    function Kill3() {
      Alien3.kill();
    }

    function Kill4() {
      Alien4.kill();
    }

    function Kill5() {
      Alien5.kill();
    }

    function Kill6() {
      Alien6.kill();
    }

    function Kill7() {
      Alien7.kill();
    }

    function Kill8() {
      Alien8.kill();
    }

    function Kill9() {
      Alien9.kill();
    }

    function Kill10() {
      Alien10.kill();
    }

    /*    function Kill11() {
          Alien11.kill();
        }

        function Kill12() {
          Alien12.kill();
        }

        function Kill13() {
          Alien13.kill();
        }

        function Kill14() {
          Alien14.kill();
        }

        function Kill15() {
          Alien15.kill();
        }

        function Kill16() {
          Alien16.kill();
        }

        function Kill17() {
          Alien1.kill7();
        }
    */
  });


}