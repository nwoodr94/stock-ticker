import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class Chart extends React.Component {

    componentDidMount() {}

    limitTicks(data) {
        return (data.length > 15) ? data.filter((item, idx) => 
            {
                if ((idx % Math.floor(this.props.data.length / 15)) === 0) {
                    return item.x
            }
            }).map(item => (item.x)) : this.props.data.map(item => (item.x))
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
                        <XAxis title="Time" tickValues={this.limitTicks(this.props.data)}/>
                        <YAxis title="Price" />
                    </XYPlot>
                </div>
            ) 
        }  else {
            return <div />;
        }
    }
}