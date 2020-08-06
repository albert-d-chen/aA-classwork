import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper'

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9,12);
        this.state = { board: board };

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board});
    }

    restartGame() {
        const newBoard = new Minesweeper.Board(9, 20);
        this.setState({ board: newBoard });
    }

    render() {
        let popup;
        if (this.state.board.won()) {
            let text = 'Congrats! You won!'
            popup = 
            <div className='idk'>
            <div className='won'>
                <div>{text}</div>
                <button onClick={this.restartGame}>Play Again!</button>
            </div>
            </div>
        } else if (this.state.board.lost()) {
            let text = 'You lose...'
            popup = 
            <div className='idk'>
            <div className='lose'>
                <div>{text}</div>
                <button onClick={this.restartGame}>Play Again!</button>
            </div>
            </div>
        }
        return(
            <div>
                {popup}
               <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;