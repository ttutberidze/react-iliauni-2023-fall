import {memo} from 'react';

const user = ({name, updateName, removeUser, index}) => {
    console.log('User', name);
    return (
        <div>
            <p>{name}</p>
            <p>
                <input type="text" onChange={(event) => updateName(event, index)} value={name} />
                <button onClick={() => removeUser(index)}>Remove</button>
            </p>
        </div>
    )
}

export default memo(user);