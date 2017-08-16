import React, { Component } from 'react';
import './App.css';
import EasyGame from './EasyGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Eassy Game</h1>
        </div>
      <EasyGame/>
      </div>
    );
  }
}

export default App;
