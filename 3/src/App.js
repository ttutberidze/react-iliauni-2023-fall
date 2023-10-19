import React from 'react';
import './App.css';
import Person from './User';

// function App() {
//   return (
//     <div className="App">
//       <h2>Hello World</h2>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [{name: 'James'}, {name: 'Temo'}],
      age: 30
    }
  }

  onChange = (event, index) => {
    this.setState((prevState) => {
      const user = {...prevState.users[index]};
      user.name = event.target.value;
      prevState.users[index] = user;
      return {
        users: prevState.users
      }
    })
  }

  addUser = () => {
    this.setState((prevState) => ( {
      users: [...prevState.users, {name: ''}]
    }))
  }

  removeUser = (index) => {
    this.setState((prevState) => {
      prevState.users.splice(index, 1);
      return {
        users: prevState.users
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        { this.state.users.map((user, index) => (
          <Person 
            key={index} 
            name={user.name} 
            updateName={(event) => this.onChange(event, index)} 
            removeUser={() => this.removeUser(index)}
          />
        )) }
        <button onClick={this.addUser}>Add new user</button>
      </div>
    )
  }
}




// const App = () => {
//   return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Hello World'))
// }

export default App;
