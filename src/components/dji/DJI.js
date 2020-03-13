import React from 'react';
import { openData, closeData } from '../data/Data';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

export class DowJones extends React.Component {

    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        if (this.props.display) {
            return (
                <div className="dji">
                    <XYPlot 
                        height={320} 
                        width={900} 
                        margin={{ left: 75, bottom: 75}} 
                        xType="ordinal">
                        <LineSeries data={openData} /> 
                        <LineSeries data={closeData} />
                        <XAxis />
                        <YAxis />
                    </XYPlot>
                </div>
            ) 
        }  else {
            return null;
        }
    }
}