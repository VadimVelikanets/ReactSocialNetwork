import React from 'react';
import d from './../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
    return (
      <div className={`${d.user__item} flex__start align__center`}>
                <img width='40px' className='profile-img' src={`/img/${props.userImg}`} />
                <NavLink to={`/dialogs/${props.userId}`}>
                <span className='bold'>{props.name}</span>
                </NavLink>
      </div> 
    )
}

export default DialogItem;