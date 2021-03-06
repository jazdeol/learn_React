import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //State of the component
  state = {
    persons: [
      { id: '1', name: 'Max', age: 23 },
      { id: '2', name: 'Angela', age: 27 },
      { id: '3', name: 'Jaz', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  //Deleteing a person from a copied array of the state and then updating the original state with the new state.
 deleteNameHandler = (personIndex) => {
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({ persons: persons});
   
 }

  //We take an event and the id of the person as a parameter and just edit that person.
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  //A toggle method which creates a variable which takes the current state of showPersons and then sets it to the opposite of what it is. 
  //So true becomes false and false becomes true.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }


  render() {
    //Style in line instead of in a seperate css file.
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    //If statement to toggle the persons.
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person  
            click={() => this.deleteNameHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
      </div>
      );
      style.backgroundColor = 'red';

    }

    let classes =  [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>
          Hi, I'm a react app!!!!!
      </h1>
        <p className={classes.join(' ')}>Yep I am working! WOO!!!!!!!!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>
        Toggle Persons</button>
        {persons}
      </div>
    );

  }
}

export default App;
