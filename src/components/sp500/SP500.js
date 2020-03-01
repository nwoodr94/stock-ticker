import React from 'react';

export class SP500 extends React.Component {

    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        if (this.props.display) {
            return (
                <div className="dji">
                    SP500 Rendered
                </div>
            ) 
        }  else {
            return null;
        }
    }
}