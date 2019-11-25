var selectorState = {
  render: function() {
    game.debug.pointer(game.input.activePointer);
    game.debug.inputInfo(500, 300);
  },

  create: function() {
    brickBackground = game.add.sprite(0, 0, 'brickBackground');
    brickBackground.scale.setTo(0.5)

    InfoIcon = game.add.sprite(659, 60, 'InfoIcon');
    InfoIcon.scale.setTo(0.1)

    InfoText = game.add.text(660, 128, '');


    Lvl1 = game.add.button(219, 158, 'button');
    Lvl1.anchor.setTo(0.5, 0.5);
    Lvl1.scale.setTo(2);
    Lvl1.onInputUp.add(Level1State);
    Lvl1Text = game.add.text(Lvl1.x, Lvl1.y, 'LEVEL 1');
    Lvl1Text.anchor.setTo(0.5, 0.5);

    function Level1State() {
      game.state.start('level1');
      console.log('Level selector state complete');
    }

    Lvl2 = game.add.button(219, 258, 'button');
    Lvl2.anchor.setTo(0.5, 0.5);
    Lvl2.scale.setTo(2);
    Lvl2.onInputUp.add(Level2State);
    Lvl2Text = game.add.text(Lvl2.x, Lvl2.y, 'LEVEL 2');
    Lvl2Text.anchor.setTo(0.5, 0.5);

    function Level2State() {
      game.state.start('level2');
      console.log('Level selector state complete');
    }

    Lvl3 = game.add.button(219, 358, 'button');
    Lvl3.anchor.setTo(0.5, 0.5);
    Lvl3.scale.setTo(2);
    Lvl3.onInputUp.add(Level3State);
    Lvl3Text = game.add.text(Lvl3.x, Lvl3.y, 'LEVEL 3');
    Lvl3Text.anchor.setTo(0.5, 0.5);

    function Level3State() {
      game.state.start('level3');
      console.log('Level selector state complete');
    }
  }
}