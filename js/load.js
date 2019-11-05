/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });

    game.load.spritesheet('studentAlien', 'assets/studentAlien.png');
  },

  create: function() {
    game.state.start('menu');
  }

};