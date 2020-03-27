import React from 'react';
import {Form} from '../form/Form';
import {Chart} from '../chart/Chart';

export class Markets extends React.Component {

    constructor(props) {
        super(props);
        this.queryMarket = this.queryMarket.bind(this);
        this.state = { symbol: '', display: false };
    }

    queryMarket(symbol) {
        this.setState({ symbol: symbol, display: true });
    }

    render() {
        return (
            <div className="display">
                <Form onSubmit={this.queryMarket} />
                <div className="chart">
                    <Chart display={this.state.display} symbol={this.state.symbol} />
                </div>
            </div>
        )
    }
}