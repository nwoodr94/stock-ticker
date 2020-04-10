import React from 'react';
import {Form} from '../form/Form';
import {Chart} from '../chart/Chart';
import {callAPI} from '../../fetch';

export class Markets extends React.Component {

    constructor(props) {
        super(props);
        this.queryMarket = this.queryMarket.bind(this);
        this.state = { symbol: '', display: false, data: {} };
    }

    queryMarket(symbol) {
        console.log("submitted")
        console.log(symbol);

        (async() => {
            try {
                let data = await callAPI(symbol);
                
                await console.log(data);
                await this.setState({ symbol: symbol, display: true, data: data });
            } catch(error) {
                console.log(error);
            }
        })();
        
    }

    render() {
        return (
            <div className="display">
                <Form onSubmit={this.queryMarket} />
                <div className="chart">
                    {this.state.display && <Chart symbol={this.state.symbol} data={this.state.data}/> }
                </div>
            </div>
        )
    }
}