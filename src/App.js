import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
// import './Person/Person.css';

const StyledButton = styled.button`
background-color: ${props => props.color ? 'red' : 'green'};
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
color: white;

&:hover {
  background-color: ${props => props.color ? 'salmon' : 'lightgreen'};
  color: white;
}`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "John", age: 23 },
      { id: "2", name: "Mary", age: 26 },
      { id: "3", name: "Jar", age: 30 }
    ],
    show: false
  }
  nameChange = (event, id) => {
    let pind = this.state.persons.findIndex(fid => fid.id === id)
    const newp = [...this.state.persons]

    newp[pind].name = event.target.value
    this.setState({
      persons: newp
    })
  }
  deletePerson = (id) => {
    const person = this.state.persons.slice();
    const personind = this.state.persons.findIndex(fid => {
      return fid.id === id
    })
    person.splice(personind, 1);
    this.setState({ persons: person });
  }
  showPersonshandler = () => {
    const doesshow = this.state.show
    this.setState({
      show: !doesshow
    });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    let persons = null
    if (this.state.show) {
      persons = (
        <div className="show">
          {this.state.persons.map((person, index) => {
            return <Person change={(event) => { this.nameChange(event, person.id) }} key={person.id} name={person.name} age={person.age} click={this.deletePerson.bind(this, person.id)} />
          })}
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'purple'
      // }
    }
    return (

      <div className="App">
        <hi>Hi, I am a React APP</hi>
        <p className={classes.join(" ")}>This is an Interesting Topic</p>
        <StyledButton color={this.state.show} onClick={this.showPersonshandler}>
          Click to Show persons</StyledButton>
        {persons}
      </div>

    );
  }
  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'is it good NOw ?'))
}

export default App;
