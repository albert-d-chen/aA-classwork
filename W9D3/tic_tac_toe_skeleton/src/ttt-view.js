class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', event => { // $('.ttt')
      // event.preventDefault();
      const $currTarget = $(event.currentTarget);
      const $pos = $currTarget.data('pos');
      try {
        this.game.playMove($pos);
        // Block of code to try
      }
      catch (err) {
        alert('This is not empty');
        return;
        // Block of code to handle errors
      }

      const currPlayer = this.game.currentPlayer;
      $currTarget.addClass(currPlayer);

      if (this.game.isOver()) {
        this.$el.off('click');
        this.$el.addClass('gg');

        const gameWinner = this.game.winner();
        const $message = $('<p></p>');

        if (gameWinner === 'x') {
          this.$el.addClass('winnerX');
          $message.html(`You win, ${gameWinner}!`);
        } else if (gameWinner === 'o'){
          this.$el.addClass('winnerO');
          $message.html(`You win, ${gameWinner}!`);
        } else {
          $message.html('It\'s a draw');
        }

        this.$el.append($message);
      }



      // $currTarget.append(currPlayer);
    });
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul class="group"></ul>');
    this.$el.append($ul);
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $('<li></li>');
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }    
  }
}

module.exports = View;
