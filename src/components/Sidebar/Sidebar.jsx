import React from 'react';
import {NavLink} from 'react-router-dom';
const Sidebar = () =>{
    return(
        <div className='sidebar'>
        <ul>
          <li>
            <NavLink exact to='/messages' className='bold'>Messages</NavLink>
          </li>
          <li>
            <NavLink  to='/profile' className='bold'>Profile</NavLink>
          </li>
          
          <li>
            <NavLink to='/users' className='bold'>Users</NavLink>
          </li>

        </ul>
      </div> 
    )
}

export default Sidebar;