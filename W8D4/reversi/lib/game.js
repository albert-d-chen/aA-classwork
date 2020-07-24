const readline = require("readline");
const Piece = require("./piece.js");
const Board = require("./board.js");

/**
 * Sets up the game with a board and the first player to play a turn.
 */
function Game () {
  this.board = new Board();
  this.turn = "black";
};

// this.turn.__proto__.isComputer = function(isComputer) {
//     return isComputer;
// }

Game.prototype.computerPlayerColor = function(color) {
    this.computerPlayerColor = color;
}
Game.prototype.computerPlayerColorTwo = function(color) {
    this.computerPlayerColorTwo = color;
}

/**
 * Flips the current turn to the opposite color.
 */
Game.prototype._flipTurn = function () {
  this.turn = (this.turn == "black") ? "white" : "black";
};

// Dreaded global state!
let rlInterface;

/**
 * Creates a readline interface and starts the run loop.
 */
Game.prototype.play = function () {
  rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  this.runLoop(function () {
    rlInterface.close();
    rlInterface = null;
  });
};

/**
 * Gets the next move from the current player and
 * attempts to make the play.
 */
Game.prototype.playTurn = function (callback) {
  this.board.print();

    if ((this.turn === this.computerPlayerColor) || (this.turn === this.computerPlayerColorTwo)) {
        // let computer_pos = [];
        // while (!(this.board.validMove(computer_pos, this.turn))) {
        //     let computer_pos_x = Math.floor(Math.random() * Math.floor(8));
        //     let computer_pos_y = Math.floor(Math.random() * Math.floor(8));
        //     computer_pos = [computer_pos_x, computer_pos_y];
        // }
        // this.board.placePiece(computer_pos, this.turn);
        // this._flipTurn();
        // callback();
        let compMoves = this.board.validMoves(this.turn);
        const pos = compMoves[Math.floor(Math.random() * compMoves.length)];
        this.board.placePiece(pos, this.turn);
        console.log(`computer player (${this.turn}) chose ${pos}`)
        this._flipTurn();
        callback();
    } else {
    rlInterface.question(
        `${this.turn}, where do you want to move?`,
        handleResponse.bind(this)
    );

    function handleResponse(answer) {
        const pos = JSON.parse(answer);
        if (!this.board.validMove(pos, this.turn)) {
        console.log("Invalid move!");
        this.playTurn(callback);
        return;
    }

    this.board.placePiece(pos, this.turn);
    this._flipTurn();
    callback();
  }
}
};

/**
 * Continues game play, switching turns, until the game is over.
 */
Game.prototype.runLoop = function (overCallback) {
  if (this.board.isOver()) {
    console.log("The game is over!");
    this.board.winner();
    this.board.print();
    process.exit();
    // overCallback();
  } else if (!this.board.hasMove(this.turn)) {
    console.log(`${this.turn} has no move!`);
    this._flipTurn();
    this.runLoop();
  } else {
    this.playTurn(this.runLoop.bind(this, overCallback));
  }
};

module.exports = Game;

// game = new Game();
// game.runLoop();