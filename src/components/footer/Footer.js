import React from 'react';

let style = {
    fontSize: '1rem'
}

export default class Footer extends React.Component {

    date = new Date();
    year = this.date.getFullYear();

    render() {
        return (<footer style={style}>Developed by Nathan Woodruff ({this.year})</footer>)
    }
}