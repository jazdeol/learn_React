import React, { Component } from 'react';

import './App.css';
import Validate from './ValidateComponent';
import Char from './CharComponent';

class App extends Component {
  state = {
    text: '',
    length: ''
  }

  changeListener = (event) => {
    this.setState({
      length: event.target.value.length,
      text: event.target.value
    })
  }

  deleteChar = (index) => {
    const chars = [...this.state.text.split('')];

    const newChars = chars.filter((_, idx) => idx !== index)

    this.setState({
      text: newChars.join(''),
      length: newChars.length
    })
    
  }

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <Char char={ch} key={index} clicked={() => this.deleteChar(index)} />});
    //const chars = ch.map;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to List and Condition assignment </h1>
        </header>
        <p className="App-intro">
          Lets get started!
        </p>
        <input type="text" value={this.state.text} onChange={this.changeListener} />
        <Validate length={this.state.length} />
        {charList}

      </div>
    );
  }
}

export default App;
