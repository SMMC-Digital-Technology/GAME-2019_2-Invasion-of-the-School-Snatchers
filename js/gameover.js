/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
  create: function() {
    brickBackground = game.add.sprite(0, 0, 'brickBackground');
    brickBackground.scale.setTo(1);

//add both images in - winner or loser
    WinnerText = game.add.sprite(470, 540 / 2, 'WinnerText');
    WinnerText.anchor.setTo(0.5);
    WinnerText.scale.setTo(0.6);

    LoserText = game.add.sprite(470, 540 / 2, 'LoserText');
    LoserText.anchor.setTo(0.5);
    LoserText.scale.setTo(0.6);

//set the texts as visible depending on the status of the player (winner or loser)
    if (PlayerStatus !== 2) {
      WinnerText.visible = false
      LoserText.visible = true
    } else if (PlayerStatus == 2) {
      LoserText.visible = false
      WinnerText.visible = true
    }

//add the restart button and text
    restartButton = game.add.button(470, 420, 'button');
    restartButton.anchor.setTo(0.5, 0.5);
    restartButton.scale.setTo(2);
    restartButton.onInputUp.add(GameoverState);
    restartButtonText = game.add.text(restartButton.x, restartButton.y, 'MENU');
    restartButtonText.anchor.setTo(0.5, 0.5);

//set the state as the menu on button press
    function GameoverState() {
      game.state.start('menu');
      console.log('Game over state complete');
      game.state.start(game.state.gameoverState);
    }
  }

  //use the following to go back to the menu
  //game.state.start('menu');
}
