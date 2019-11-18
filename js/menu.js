/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {
    game.stage.backgroundColor = "#ffffff";

    button = game.add.button(250, 250, 'laser');
    button.anchor.setTo(0.5, 0.5);
    button.scale.setTo(0.5, 0.5);
    button.onInputUp.add(LevelState);
    buttonText = game.add.text(button.x, button.y, 'Level 3');
    buttonText.anchor.setTo(0.5, 0.5);

    function LevelState() {
      game.state.start('level');
      console.log('Menu state complete');
    }
  }
}