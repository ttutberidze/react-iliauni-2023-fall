import React from "react";

// export const user2 = ({name, age, children}) => {
//     return (
//         <div>
//             Hello, {name}. I'm {age} years old
//             {children}
//         </div>
//     )
// }

class user extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.name !== nextProps.name;
    // }

    render() {
        const {name, updateName, removeUser, index} = this.props;
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
}

export default user;