import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Angela', age: 27 },
      { name: 'Jaz', age: 24 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //  console.log("Was Clicked");
    //DON'T DO THIS     this.state.persons[0].name = "JoJo";
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Angela', age: 27 },
        { name: 'Jaz', age: 24 }
      ]
    })
  }

  //We take an event as a parameter and use that to change the state of person[1] in real time when changing the text in the text box
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 30 },
        { name: 'Jaz', age: 24 }
      ]
    })
  }


  render() {
    //Style in line instead of in a seperate css file.
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>
          Hi, I'm a react app!!!!!
      </h1>
        <p>Yep I am working! WOO!!!!!!!!</p>
        <button 
        style={style}
        onClick={()=> this.switchNameHandler('Jojo The Great')}>
        Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>
          My hobbies is Racing! </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} 
          click ={this.switchNameHandler.bind(this, 'Mejai The All Seeing One')}/>
      </div>
    );

  }
}

export default App;
