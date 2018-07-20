import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Interactive Lesson</h1>
        </header>
        <p className="App-intro">
          Welcome! In the future, this will contain a <code>slideshow</code>
        </p>
        <p>Users will be able to progress <strong>FORWARD</strong> or <strong>BACKWARDS</strong> with the arrow keys</p>
      </div>
    );
  }
}

export default App;
