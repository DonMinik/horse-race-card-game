import React, { Component } from 'react';
import './App.css';
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <Card/>
        </p>
      </div>
    );
  }
}

export default App;
