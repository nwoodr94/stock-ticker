import React from 'react';

export class NASDAQ extends React.Component {

    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        if (this.props.display) {
            return (
                <div className="dji">
                    NASDAQ Rendered
                </div>
            ) 
        }  else {
            return null;
        }
    }
}