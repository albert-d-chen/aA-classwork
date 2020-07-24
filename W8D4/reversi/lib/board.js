let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const grid = [];
  for (let i=0; i < 8; i++) {
    grid.push(new Array(8));
  }
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.prototype.gridPos = function (pos) {
  return this.grid[pos[0]][pos[1]];
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] < 8) && (pos[0] >= 0) && (pos[1] < 8) && (pos[1] >= 0);
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)) {
    return this.gridPos(pos);
  } else {
    throw new Error('Position not on the board.');
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  return (this.isOccupied(pos)) && (this.getPiece(pos).color === color);
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !(typeof this.gridPos(pos) === 'undefined');
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip) {

  let newPos = [(pos[0]+dir[0]), (pos[1]+dir[1])];
  piecesToFlip = piecesToFlip || [];
  
  if ((!this.isValidPos(newPos)) || (!this.isOccupied(newPos))) {
    return [];
  } else if (this.isMine(newPos, color)) {
    return piecesToFlip;
  } else {
    piecesToFlip.push(newPos);
    return this._positionsToFlip(newPos, color, dir, piecesToFlip);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  } else {
    for (let i=0; i < Board.DIRS.length ; i++) {
      let posFlip = this._positionsToFlip(pos, color, Board.DIRS[i]);
      if (posFlip.length > 0) return true;
    }
  }
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) {
    throw new Error('Invalid Move!');
  }
  
  this.grid[pos[0]][pos[1]] = new Piece(color);
  let allFlips = [];
  for (let i = 0; i < Board.DIRS.length; i++) {
    allFlips = allFlips.concat(this._positionsToFlip(pos, color, Board.DIRS[i]));
  }

//   allFlips.forEach((flipPos) => {
//       this.getPiece(flipPos).flip();
//   });
  
  for (let i=0; i < allFlips.length; i++) {
      this.getPiece(allFlips[i]).flip();
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
    let allPos=[];
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            let curPos = [i,j];
            if (this.validMove(curPos, color)) {
                allPos.push(curPos);
            }
        }
    }
    
    return allPos;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
    return this.validMoves(color).length > 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
    return !this.hasMove('black') && !this.hasMove('white');
};

Board.prototype.winner = function() {
    let whiteScore = 0;
    let blackScore = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let pos = [i,j];
            if (this.isMine(pos, 'black')) {
                blackScore = blackScore + 1;
            } else if (this.isMine(pos, 'white')) {
                whiteScore = whiteScore + 1;
            }
        }
    }
    let winningColor = whiteScore > blackScore ? "white" : "black";
    console.log(`${winningColor} is the winner!`);
}




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
    console.log("_ 0 1 2 3 4 5 6 7")
    for (let i = 0; i < 8; i++) {
        let rowString = `${i}|`;
        for (let j = 0; j < 8; j++) {
            let posString = this.isOccupied([i,j]) ? this.getPiece([i,j]).toString() : " ";
            rowString = rowString + posString + "|";
        }
        console.log(rowString);
    }
};



module.exports = Board;
