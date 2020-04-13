import React from 'react';

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.clock = this.clock.bind(this);
    }

    componentDidMount() {
        this.clock();
    }

    clock() {
        let time = new Date();

        let timeString = time.toLocaleTimeString('en-US', {timeZone: 'America/New_York'});

        this.setState({time: timeString});
        setTimeout(this.clock, 1000);
    }

    render() {
        return (
            <div className="clock">
                <h1>{this.state.time} Eastern</h1>
            </div>
        )
    }
}