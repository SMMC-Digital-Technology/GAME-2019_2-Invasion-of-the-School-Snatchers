/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */


var alienState = {
  create: function() {
    game.state.start('menu')
    console.log('alien state complete')
  }
};

function AlienOneCreate() {
  AlienGroup = game.add.group();

  Alien1 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien2 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien3 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien4 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien5 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien6 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien7 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien8 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien9 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien10 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien11 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien12 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien13 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien14 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien15 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien16 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien17 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien18 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien19 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');
  Alien20 = AlienGroup.create(game.rnd.integerInRange(105, background.width - 105), game.rnd.integerInRange(105, background.height - 81), 'sAlien');


  AlienGroup.children.forEach(function(child) {
    game.physics.arcade.enable(child);
    child.anchor.setTo(0.5);
    child.scale.setTo(0.3);
    child.animations.add('StudentMove');
    child.animations.play('StudentMove', 50, true);
    child.body.setCircle(110, (child.width / 2) + 20, (child.height / 2) - 20);
  });
  alienHealth = 5;
}

function AlienOneUpdate() {

  AlienGroup.children.forEach(function(child) { //Applies code to all of the group's children to avoid using group code
    game.physics.arcade.collide(wallGroup, child);
    game.physics.arcade.collide(AlienGroup, child);
    game.physics.arcade.moveToObject(child, player, 150)
    game.physics.arcade.overlap(laser.bullets, child, Damage);

    function Damage(bullet, child) {
      console.log('damage')
      alienHealth -= 1
      laser.killAll()
    }

    if (alienHealth < 0) {
      child.body.moves = false;
      child.minRotation = 0;
      child.maxRotation = 0;
      deathFade = game.add.tween(child).to({
        alpha: 0
      }, 200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      game.time.events.add(Phaser.Timer.SECOND * 1, Kill);
      child.animations.stop('StudentMove', 50, true);
    } else {
      child.rotation = Math.atan2(player.y - child.y, player.x - child.x) - Math.PI / 2;
      child.minRotation = 0;
      child.maxRotation = 360;
    }

    function Kill() {
      child.kill();
    }
  });


}