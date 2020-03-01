import React from 'react';

export class DowJones extends React.Component {

    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        if (this.props.display) {
            return (
                <div className="dji">
                    DJI Rendered
                </div>
            ) 
        }  else {
            return null;
        }
    }
}