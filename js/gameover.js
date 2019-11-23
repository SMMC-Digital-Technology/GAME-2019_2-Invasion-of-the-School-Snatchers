/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
  create: function() {
    console.log('Game over state started and where the fuck is everything???');
    brickBackground = game.add.sprite(0, 0, 'brickBackground');
    brickBackground.scale.setTo(0.7);
    GameoverText = game.add.sprite(game.world.centerX, game.world.centerY, 'GameoverText');
    GameoverText.anchor.setTo(0.5);
    GameoverText.scale.setTo(0.6);

    restartButton = game.add.button(game.world.centerX, game.world.centerY * 1.5, 'button');
    restartButton.anchor.setTo(0.5, 0.5);
    restartButton.scale.setTo(2);
    restartButton.onInputUp.add(MenuState);
    restartButtonText = game.add.text(restartButton.x, restartButton.y, 'MENU');
    restartButtonText.anchor.setTo(0.5, 0.5);

    function MenuState() {
      game.state.start('menu');
      console.log('Game over state complete');
      game.state.start(game.state.gameroverState);
    }
  }

  //use the following to go back to the menu
  //game.state.start('menu');
};