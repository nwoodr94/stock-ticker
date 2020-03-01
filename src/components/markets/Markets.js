import React from 'react';
import {Selector} from '../selector/Selector';
import {DowJones} from '../dji/DJI';
import {SP500} from '../sp500/SP500';
import {NASDAQ} from '../nasdaq/Nasdaq';

export class Markets extends React.Component {

    constructor(props) {
        super(props);
        this.displayGraph = this.displayGraph.bind(this);
        this.state = { dji: true, sp500: true, nasdaq: true };
    }

    displayGraph(market) {
        if (market === 'dji') {
            this.setState({dji: !this.state.dji});
        } else if (market === 'sp500') {
            this.setState({sp500: !this.state.sp500});
        } else if (market === 'nasdaq') {
            this.setState({nasdaq: !this.state.nasdaq});
        }
    }

    render() {
        return (
            <div className="display">
                <Selector displayGraph={this.displayGraph} />
                <div className="graphs">
                    <DowJones display={this.state.dji} />
                    <SP500 display={this.state.sp500} />
                    <NASDAQ display={this.state.nasdaq} />
                </div>
            </div>
        )
    }
}