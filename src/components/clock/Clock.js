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
        
        let dateString = time.toLocaleDateString();
        let timeString = time.toLocaleTimeString();

        this.setState({date: dateString, time: timeString});
        setTimeout(this.clock, 1000);
    }

    render() {
        return (
            <div className="clock">
                <h1>{this.state.date}</h1>
                <h1>{this.state.time}</h1>
                <br />
            </div>
        )
    }
}