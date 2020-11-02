import React from 'react';
import {NavLink} from 'react-router-dom';
import h from './Header.module.scss';
const Header = (props) =>{
    return(
        <header>
            <div className='container flex__between'>
                <a href='/' className={`${h.logo} bold`} >VV Network</a>
                <div className={h.login}>
                    {props.isAuth
                    ? <span>{props.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>}
                    
                </div> 
            </div>
        </header>
    )
}

export default Header;