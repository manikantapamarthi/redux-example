import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Super Squad</h1>
        <CharacterList/>
      </div>
    );
  }
}

export default App;
