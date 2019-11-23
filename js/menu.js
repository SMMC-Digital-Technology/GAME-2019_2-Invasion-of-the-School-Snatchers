/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {
    game.stage.backgroundColor = "#ffffff";
    mBackground = game.add.sprite(0, 0, 'menuBackground');
    mBackground.scale.setTo(0.5)

    button = game.add.button(game.world.centerX, 300, 'button');
    button.anchor.setTo(0.5, 0.5);
    button.scale.setTo(2);
    button.onInputUp.add(SelectorState);
    buttonText = game.add.text(button.x, button.y, 'LEVELS');
    buttonText.anchor.setTo(0.5, 0.5);

    function SelectorState() {
      game.state.start('levelSelector');
      console.log('Menu state complete');
    }
  }
}