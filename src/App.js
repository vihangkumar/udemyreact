import React, { Component } from 'react';
//import './App.css';
import appcss from './App.module.css'
// import Radium, {StyleRoot} from 'radium'; 
import Person from './Person/Person'; 


//import styled from 'styled-components';

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red': 'green'};
//     color: white;
//     font: inherit;
//     border: 2px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${props => props.alt ? 'salmon': 'lightgreen'} ;
//       color: black;
//     }
// `;


class App extends Component {
  state = {
    persons: [
      {id: 'sdfds', name: 'Max', age: 28},
      {id: '3efvsdf', name: 'Manu', age: 29},
      {id: 'swef3', name: 'Stephanie', age: 26},

    ], 
    otherState: 'Some Value here',
    showPersons: false
  }
  render() {

    // const style = {
    //   backgroundColor: 'green', 
    //   color: 'white',
    //   font: 'inherit', 
    //   border: '2px solid blue', 
    //   padding: '8px', 
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }; 

    let persons = null
    let btnClass = ''; //[appcss.Button]

    

    if (this.state.showPersons){
      persons=(
        <div>
            {this.state.persons.map( (person, index) =>{
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) =>this.nameChangeHandler(event, person.id)}/>
            })}
            {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!!')}
              changed={this.nameChangeHandler}>
              My Hobbies: Racing
            </Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> */}
          </div>
      ); 

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }


      btnClass = appcss.Red; 
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push(appcss.red); 
    }
    if(this.state.persons.length <= 1){
      classes.push(appcss.bold); 
    }

    return (
      // <StyleRoot>
        <div className={appcss.App}>

            <h1>Hi I am a react app!!</h1>
            <p className={classes.join(' ')} >This is really working!!!</p>

            {/* styled-components' */}

            {/* <StyledButton alt={this.state.showPersons}
              onClick={this.togglePersonHandler}>
              Toggle Persons
            </StyledButton> */}

            <button className={btnClass} alt={this.state.showPersons}
              onClick={this.togglePersonHandler}>
              Toggle Persons
            </button>

            
            {persons}
          
        </div>

      // </StyleRoot>
     
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }

  // switchNameHandler = (newName) => {
  //   //console.log("Was Clicked"); 

  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 27},
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); 
    const persons = [...this.state.persons] 
    persons.splice(personIndex, 1); 
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons; 
    this.setState({
      showPersons: !doesShow 
    })
  }

  nameChangeHandler = (event, id)  => {
    //console.log("Was Clicked"); 
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]) 
    person.name = event.target.value; 
    const persons = [...this.state.persons]; 
    persons[personIndex] = person; 
    this.setState({persons: persons})
  } 
}

// export default Radium(App);

export default App;
