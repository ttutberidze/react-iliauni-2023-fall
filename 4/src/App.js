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
      age: 30,
      show: true
    }
  }

  // state = {
  //   users: [{name: 'James'}, {name: 'Temo'}],
  //   age: 30
  // }

  static getDerivedStateFromProps = ({name}, state) => {
    return {
      ...state, 
      name
    }
  }

  shouldComponentUpdate(nextProps, {users, show}) {
    return (show !== this.state.show || users !== this.state.users);
  }

  onChange = (event, index) => {
    this.setState((prevState) => {
      const user = {...prevState.users[index]};
      user.name = event.target.value;
      prevState.users[index] = user;
      return {
        users: [...prevState.users]
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
        users: [...prevState.users]
      }
    })
  }

  render() {
    console.log('Render is called', this.state)
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
          <button onClick={() => this.setState(({show}) => ({show: !show}))}>Toggle</button>
          <button onClick={() => this.setState({show: true})}>Show</button>
        </div>
        { this.state.show && this.state.users.map((user, index) => (
          <Person 
            key={index} 
            index={index}
            name={user.name} 
            updateName={this.onChange} 
            removeUser={this.removeUser}
          />
        )) }
        <button onClick={this.addUser}>Add new user</button>
      </div>
    )
  }

  componentDidMount = () => {
    console.log('Component Did Mount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, this.props, this.state);
    return 'Hello';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Component was updated', snapshot)
  }
}




// const App = () => {
//   return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Hello World'))
// }

export default App;
