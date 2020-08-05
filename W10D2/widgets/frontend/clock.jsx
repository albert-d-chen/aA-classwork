import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = { time: new Date() };

        this.tick = this.tick.bind(this);
    }


    render () {
        let date = this.state.time.toDateString();
        let hours = this.state.time.getHours();
        let min = this.state.time.getMinutes();
        let sec = this.state.time.getSeconds();

        if (hours < 10) {
            hours = `0${hours}`
        } 

        if (min < 10) {
            min = `0${min}`
        }

        if (sec < 10) {
            sec = `0${sec}`
        }

        return (
            <div className='albert'>
                <h1>Clock</h1>
                    <div className="shanelle">
                        <div className='time'> 
                            <span>Time: </span>
                            <span>{hours}:{min}:{sec}</span>
                        </div>
                        <div className='date'>
                            <span>Date:</span>
                            <span>{date}</span>
                        </div>
                    </div>
            </div>
        )
    }

    tick () {
        this.setState( {time: new Date()} );
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default Clock;