/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });

    game.load.spritesheet('sAlien', 'assets/studentAlien.png');
    game.load.image('level3BG', 'assets/mapLevel3.png');
    game.load.image('laser', 'assets/laser.png');
    game.load.image('player', 'assets/steve.png');
  },

  create: function() {
    game.state.start('menu');
  }

};
