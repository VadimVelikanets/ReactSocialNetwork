import React from 'react';
import d from './Users.module.scss';
import Preloader from '../common/Preloader';
import {NavLink} from 'react-router-dom';
const Users = (props) =>{
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
    let pages = [];
    //Ограничил пока пагинацию до 10 страниц
    for(let i = 1; i <= 10; i++){
        pages.push(i)
    }
    return(
        <div>

            <h2>Users</h2>
                <div className={`${d.pagination} flex__wrap flex__start`}>
                    {pages.map(p =>{
                    return  <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && d.selectedPage}>{p}</span> })}

                </div>
                {props.isFetching
                ?  <Preloader/>
                : null}
                <div className='userInner'>
                    {props.users.map(u =>
                    <div className={`${d.user} flex__start`} key={u.id}>
                        <div className={d.userColumn}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={d.userImg} src={u.photos.small !== null ? u.photos.small : "./img/no-photo.png"} width='100'  alt={u.name}/>
                                </NavLink>
                            </div>
                            {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}} className={d.btnUnFollow} >UnFollow</button> 
                            : <button onClick={() => {props.follow(u.id)}}  className={d.btnFollow} >Follow</button> }
        
                        </div>
                        <div className={d.userColumn}>
                            <span className="bold h5">{u.name}</span>
                            <div className="small-txt">u.country, u.city</div>
                            <div><i>u.status</i></div>
                        </div>
                    </div>)}
                </div>   
        </div>
    )
}

export default Users;