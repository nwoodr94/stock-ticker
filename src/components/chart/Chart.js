import React from 'react';
import { formatData, data } from '../data/Data';
import { getData } from '../../fetch';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class Chart extends React.Component {

    componentDidMount() {
    }

    // async componentDidUpdate() {
    //     console.log("symbol:")
    //     console.log(this.props.symbol)
    //     let json = await getData(this.props.symbol);
    //     let data = await formatData(json);
    //     this.visualization(data);
    // }

    // visualization() {
    //     return (
            // <XYPlot 
            //     height={320} 
            //     width={900} 
            //     margin={{ left: 75, bottom: 75}} 
            //     xType="ordinal">
            //     <LineSeries data={data} />
            //     <XAxis title="Time" />
            //     <YAxis title="Price" />
            // </XYPlot>
    //     )
    // }

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
                        <LineSeries data={formatData(data)} />
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