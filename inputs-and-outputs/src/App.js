import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends Component {

  state = {
    username: [
      { user: 'Michael' },
      { user: 'Jaz' },
      { user: 'Angela' }
    ]
  }

  nameOuputHandler = (event) => {
    this.setState({
      username: [
        { user: event.target.value },
        { user: 'Jaz' },
        { user: 'Angela' }
      ]
    })
  }

  render() {
    const style = {
      fontWeight: 'bold',
      border: '2px solid red',
      padding: '5px'
    };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Changing Username!</h1>
        </header>
        <Input
          style={style}
          change={this.nameOuputHandler}
          name={this.state.username[0].user}
        />
        <Output
          name={this.state.username[0].user}
        />
        <Output
          name={this.state.username[1].user}
        />
        <Output
          name={this.state.username[2].user}
        />
      </div>
    );
  }
}

export default App;
