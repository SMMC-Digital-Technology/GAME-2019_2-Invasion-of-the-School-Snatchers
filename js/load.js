var loadState = {
  preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: '#ffffff'
    });
    game.load.image('menuBackground', 'assets/menuBackground.png');
    game.load.image('brickBackground', 'assets/brickBackground.png');
    game.load.image('LoserText', 'assets/Gameover.png');
    game.load.image('WinnerText', 'assets/WinText.png');
    game.load.spritesheet('sAlien', 'assets/studentAlien.png', 350, 270, 15);
    game.load.image('level1', 'assets/level1.png')
    game.load.image('level2', 'assets/level2.png')
    game.load.image('level3', 'assets/level3.png');
    game.load.image('laser', 'assets/laser.png');
    game.load.image('player', 'assets/steve.png');
    game.load.image('button', 'assets/button.png');
    game.load.image('wall', 'assets/wall.png');
    game.load.image('ball', 'assets/Ball.png');
    game.load.image('LongRange', 'assets/crosshair.png');
    game.load.image('FastFire', 'assets/bullet.png');
    game.load.image('InfoIcon', 'assets/InfoIcon.png');
  },

  create: function() {
    game.state.start('borders');
    console.log('Load state complete');
  }

};
