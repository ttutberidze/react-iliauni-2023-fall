import {useState, useCallback, useEffect, useRef} from 'react';
import Person from './User';
import '../App.css';

let counter = 0;

const App = () => {

    var [users, setUsers] = useState([{name: 'James'}, {name: 'Temo'}]);
    const [page, setPage] = useState(1);

    const inputRef = useRef();
    const customRef = useRef(0);

    const james = 'Bond';

    console.log(`Component was re-rendered ${customRef.current} times`, counter)

    const autoFocus = () => {
      inputRef.current.focus();
    }

    // ComponentDidMount
    useEffect(() => {
      autoFocus();
      console.log('Component mounted')
      return () => console.log('ComponentWillUnmount')
    }, [])

    useEffect(() => {
      console.log('page was updated', page)
      return () => console.log('Cleanup', page)
    }, [page])

    // ComponentDidUpdate
    useEffect(() => {
      console.log('Component was updated')
      customRef.current += 1;
      counter++;
    })

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
          <button onClick={() => setPage(page + 1)}>Click ME!</button>
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
          <input type='text' ref={inputRef} />
          <button onClick={() => console.log(inputRef.current.value)}>Submit</button>
          <button onClick={addUser}>Add new user</button>
        </div>
      )
}

export default App;