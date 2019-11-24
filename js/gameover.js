/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
  create: function() {
    brickBackground = game.add.sprite(0, 0, 'brickBackground');
    brickBackground.scale.setTo(0.6);
    GameoverText = game.add.sprite(470, 300, 'GameoverText');
    GameoverText.anchor.setTo(0.5);
    GameoverText.scale.setTo(0.6);

    restartButton = game.add.button(470, 420, 'button');
    restartButton.anchor.setTo(0.5, 0.5);
    restartButton.scale.setTo(2);
    restartButton.onInputUp.add(SelectorState);
    restartButtonText = game.add.text(restartButton.x, restartButton.y, 'MENU');
    restartButtonText.anchor.setTo(0.5, 0.5);

    function SelectorState(button) {
      game.state.start('menu');
      console.log('Game over state complete');
      game.state.start(game.state.gameoverState);
    }
  }

  //use the following to go back to the menu
  //game.state.start('menu');
}
