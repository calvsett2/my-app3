import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// added User Component
import User from './User';

// add Laser Component
import Laser from './Laser';

// add Toggle Component;
import Toggle from './Toggle';

// add LoggingButton Component;
import LoggingButton from './LoggingButton';


function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <button onClick={handleClick}>
            Click me 
        </button>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User />
        <Laser />
        <ActionLink />
        <Toggle />
        <LoggingButton />
      </div>
    );
  }
}

export default App;
