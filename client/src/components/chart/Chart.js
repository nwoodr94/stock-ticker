import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class Chart extends React.Component {

    componentDidMount() {}

    limitTicks(arr) {
        let ticks = []
         //obj = {x: "10:45", y: 17.76}
        arr.forEach(obj => {
            let minute = obj.x.slice(-2);
            if (minute % 15 === 0){
                ticks.push(obj.x);
            }
        });
        return ticks.reverse();
    }

    render() {
        if (this.props.data) {
            return (
                <div className="dji">
                    <span style={{fontWeight: 'bold', fontSize: '5rem'}}>
                        {this.props.symbol}
                    </span>
                    <XYPlot 
                        height={320} 
                        width={900} 
                        margin={{ left: 75, bottom: 75}} 
                        xType="ordinal">
                        <LineSeries data={this.props.data} />
                        <XAxis title="Time" 
                            tickValues={this.limitTicks(this.props.data)}
                            tickLabelAngle={-45}
                        />
                        <YAxis title="Price" />
                    </XYPlot>
                </div>
            ) 
        }  else {
            return <div />;
        }
    }
}