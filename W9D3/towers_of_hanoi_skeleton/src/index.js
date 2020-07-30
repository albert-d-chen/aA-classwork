const HanoiGame = require('../jquery_towers_hanoi_solution/game')
const HanoiView = require('./hanoi-view.js')

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
