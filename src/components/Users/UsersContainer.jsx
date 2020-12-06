import React from 'react';

import {follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsersThunkCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux'
import Axios from 'axios';
import Users from './Users';
import {usersAPI} from '../../api/api';
import { compose } from 'redux';
class UsersAPIComponent extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
              
    }
    //Пишем метод как стрелочную функцию чтобы сохранить контекст
        onPageChanged = (pageNumber) =>{
            this.props.getUsers(pageNumber, this.props.pageSize)
            this.props.setCurrentPage(pageNumber)
        }
    render(){

        return <>

         <Users totalUsersCount={this.props.totalUsersCount} 
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
         
                      followingInProgress={this.props.followingInProgress}
                      />
            </>

    }
}

const mapStateToProps  = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const UsersContainer = connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setCurrentPage: setCurrentPage,
//     toggleFollowingProgress: toggleFollowingProgress,
//     getUsers: getUsersThunkCreator
// })(UsersAPIComponent)

// export default UsersContainer;

export default compose(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setCurrentPage: setCurrentPage,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: getUsersThunkCreator
    }),

)(UsersAPIComponent)