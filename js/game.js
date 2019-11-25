var game = new Phaser.Game(960, 540, Phaser.CANVAS, 'game-world');

//add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('borders', borderState);
game.state.add('aliens', alienState);
game.state.add('allLevels', allLevelsState);
game.state.add('menu', menuState);
game.state.add('levelSelector', selectorState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('gameover', gameoverState);

game.global = {

};
console.log('Game state complete');
game.state.start('boot');
