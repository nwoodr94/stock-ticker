import React from 'react';

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {symbol: '', display: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({symbol: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let symbol = this.state.symbol
        this.props.onSubmit(symbol);
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.symbol} onChange={this.handleChange} />
                </form>
                <br />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}