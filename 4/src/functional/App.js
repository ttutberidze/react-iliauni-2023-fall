import {useState, useCallback} from 'react';
import Person from './User';
import '../App.css';

const App = () => {

    const [users, setUsers] = useState([{name: 'James'}, {name: 'Temo'}]);

    const onChange = useCallback((event, index) => {
      setUsers(([...prevUsers]) => {
          const user = {...prevUsers[index]};
          user.name = event.target.value;
          prevUsers[index] = user;
          return prevUsers;
      })
    }, [])

    const removeUser = useCallback((index) => {
      setUsers(([...prevUsers]) => {
          prevUsers.splice(index, 1);
          return prevUsers;
      })
    }, [])

    const addUser = () => {
        setUsers((prevUsers) => [...prevUsers, {name: ''}])
    }

    return (
        <div className="App">
          <h2>Hello World</h2>
          { users.map((user, index) => (
            <Person 
              key={index} 
              index={index}
              name={user.name} 
              updateName={onChange} 
              removeUser={removeUser}
            />
          )) }
          <button onClick={addUser}>Add new user</button>
        </div>
      )
}

export default App;