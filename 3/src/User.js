
// const user = ({name, age, children}) => {
//     return (
//         <div>
//             Hello, {name}. I'm {age} years old
//             {children}
//         </div>
//     )
// }

export const user = ({name, updateName, removeUser}) => {
    console.log('User', name);
    return (
        <div>
            <p>{name}</p>
            <p>
                <input type="text" onChange={updateName} value={name} />
                <button onClick={removeUser}>Remove</button>
            </p>
        </div>
    )
}

export default user;