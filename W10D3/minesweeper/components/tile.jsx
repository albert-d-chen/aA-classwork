import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let flagged;
        if (event.altKey) {
            flagged = true;
        } else {
            flagged = false;
        }
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        const tile = this.props.tile;
        let text = '';
        let count = 0;
        
        if (!tile.explored) {
            if (tile.flagged) {
                text = '🇺🇸';

                return(
                    <div className='tile' onClick={this.handleClick}>{text}</div>
                )
            } else {
                return(
                    <div className='tile' onClick={this.handleClick}>{text}</div>
                )
            }
        } else {
            if (tile.bombed) {
                text = '💣';

                return(
                    <div className='tile explored' onClick={this.handleClick}>{text}</div>
                )
            } else if ( !tile.bombed) {
                count = tile.adjacentBombCount()
                text = `${count}`;
                if (count === 0) text = "";

                return(
                    <div className='tile explored' onClick={this.handleClick}>{text}</div>
                )
            }
        }

    }
}

export default Tile;