import React from 'react';

import {follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsersThunkCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux'
import Axios from 'axios';
import Users from './Users';
import {usersAPI} from '../../api/api';
import { compose } from 'redux';
import {getUsersSelect, getPageSize, getTotalUsersCount, getcurrentPage, getIsFetching, getfollowingInProgress} from '../../redux/users-selectors';
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

// const mapStateToProps  = (state) =>{
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps  = (state) =>{
    return{
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getcurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:  getfollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setCurrentPage: setCurrentPage,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: getUsersThunkCreator
    }),

)(UsersAPIComponent)