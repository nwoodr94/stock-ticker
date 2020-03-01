import React from 'react';

export class Selector extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let market = e.target.value;
        this.props.displayGraph(market);
    }

    render() {
        return (
        <div className='selectors'>
            <input type='checkbox' value='dji' id='dji' onInput={this.handleClick} defaultChecked />
            <label for='dji'>Dow Jones</label>
            <br />
            <input type='checkbox' value='sp500' id='sp500' onInput={this.handleClick} defaultChecked />
            <label for='sp500'>SP500</label>
            <br />
            <input type='checkbox' value='nasdaq' id='nasdaq' onInput={this.handleClick} defaultChecked />
            <label for='nasdaq'>NASDAQ</label>
        </div>
        )
    }
}