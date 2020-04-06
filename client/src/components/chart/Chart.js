import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class Chart extends React.Component {

    componentDidMount() {
        // TODO: node-fetch POST this.props.symbol to webapi endpoint
        // let data = response
    }

    render() {
        if (this.props.display) {
            return (
                <div className="dji">
                    {this.props.symbol}
                    <XYPlot 
                        height={320} 
                        width={900} 
                        margin={{ left: 75, bottom: 75}} 
                        xType="ordinal">
                        <LineSeries data={data} />
                        <XAxis title="Time" />
                        <YAxis title="Price" />
                    </XYPlot>
                </div>
            ) 
        }  else {
            return <div />;
        }
    }
}