import React from 'react';
import './App.css';
import { Markets } from '../markets/Markets';

export class App extends React.Component {
  render () {
    return (
    <div className="app">
      <Markets />
    </div>
    );
  }
}

export default App;