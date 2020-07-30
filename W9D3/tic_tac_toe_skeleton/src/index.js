const View = require('./ttt-view'); // require appropriate file
const Game = require('../tic_tac_toe_node_solution/game'); // require appropriate file

  $(() => {
    // Your code here
    const game = new Game();
    const $el = $('.ttt');
    new View(game, $el);
  });
