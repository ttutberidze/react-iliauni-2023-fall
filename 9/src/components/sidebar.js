import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
              <li><NavLink to="/" style={({isActive}) => isActive ? {
                background: 'yellow'
              } : undefined}>Home</NavLink></li>  
              <li><NavLink to="/posts" className={({isActive}) => isActive ? 'active-link' : undefined}>Posts</NavLink></li>  
              <li><NavLink to="/counter" className={({isActive}) => isActive ? 'active-link' : undefined}>Counter</NavLink></li>  
            </ul>
        </div>
    )
}

export default Sidebar;