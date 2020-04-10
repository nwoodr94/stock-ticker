import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class Chart extends React.Component {

    componentDidMount() {
        console.log(`Component did mount`);
    }

    render() {
        if (this.props.data) {
            return (
                <div className="dji">
                    {this.props.symbol}
                    <XYPlot 
                        height={320} 
                        width={900} 
                        margin={{ left: 75, bottom: 75}} 
                        xType="ordinal">
                        <LineSeries data={this.props.data} />
                        <XAxis title="Time" />
                        <YAxis title="Price" />
                    </XYPlot>
                </div>
            ) 
        }  else {
            console.log("Chart failed to render");
            return <div />;
        }
    }
}