import { useTheme } from "../context/theme";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    const {toggleTheme} = useTheme();
    return (
        <div className='sidebar'>
            <ul>
              <li><NavLink to="/" style={({isActive}) => isActive ? {
                background: 'yellow'
              } : undefined}>Home</NavLink></li>  
              <li><NavLink to="/posts" className={({isActive}) => isActive ? 'active-link' : undefined}>Posts</NavLink></li>  
            </ul>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Sidebar;