/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
   create: function() {
     button = game.add.button(250, 250, 'laser');
     button.anchor.setTo(0.5,0.5);
     button.scale.setTo(0.5,0.5);
     button.onInputUp.add(changeState);
     buttonText = game.add.text(button.x,button.y,'Level 3');
     text.anchor.setTo(0.5,0.5);
    }
}

   changeState: function(levelState) {
    game.state.start('level');
        console.log('Menu state complete');
   }

}
