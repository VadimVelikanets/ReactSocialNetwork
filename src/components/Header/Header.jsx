import React from 'react';
import h from './Header.module.scss';
const Header = () =>{
    return(
        <header>
            <div className='container'>
            <a href='/' className={`${h.logo} bold`} >VV Network</a> 
            </div>
        </header>
    )
}

export default Header;