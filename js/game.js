var game = new Phaser.Game(960, 540, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('levelSelector', selectorState);
game.state.add('borders', borderState);
game.state.add('aliens', alienState);
game.state.add('level', levelState);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {

};
console.log('Game state complete');
game.state.start('boot');