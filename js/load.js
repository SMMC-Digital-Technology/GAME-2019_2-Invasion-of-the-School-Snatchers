/**
 * Use this state to load all of your assets
 */
var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });
    game.load.image('menuBackground', 'assets/menuBackground.png');
    game.load.image('brickBackground', 'assets/brickBackground.png');
    game.load.spritesheet('sAlien', 'assets/studentAlien.png', 350, 270, 15);
    game.load.image('level3', 'assets/level3.png');
    game.load.image('laser', 'assets/laser.png');
    game.load.image('player', 'assets/steve.png');
    game.load.image('button', 'assets/button.png');
    game.load.image('wall', 'assets/wall.png');
    game.load.image('ball', 'assets/Ball.png');
  },

  create: function() {
    game.state.start('borders');
    console.log('Load state complete');
  }

};