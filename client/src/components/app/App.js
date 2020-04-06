import React from 'react';
import './App.css';
import { Markets } from '../market/Market';
import {Footer} from '../footer/Footer';
import {Clock} from '../clock/Clock';

export class App extends React.Component {

  componentDidMount() {
    document.title = "Stock Ticker";
  }

  render () {
    return (
      <div className="app">
        <Markets />
        <Footer />
      </div>
    );
  }
}

export default App;