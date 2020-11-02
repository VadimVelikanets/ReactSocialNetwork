import React from 'react';

import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} from '../../redux/users-reducer';
import {connect} from 'react-redux'
import Axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            })
              
    }
    //Пишем метод как стрелочную функцию чтобы сохранить контекст
        onPageChanged = (pageNumber) =>{
            this.props.setCurrentPage(pageNumber)
            this.props.toggleIsFetching(true)
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                
                })
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
                      />
            </>

    }
}

let mapStateToProps  = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps  = (dispatch) =>{
//     return{
//             follow: (id) =>{
//                 dispatch(followAC(id))
//             },
//             unfollow: (id) =>{
//                 dispatch(unfollowAC(id))
//             },
//             setUsers: (users) =>{
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (page) =>{
//                  dispatch(setCurrentPageAC(page))
//             },
//             setTotalUsersCount: (totalCount) =>{
//                 dispatch(setTotalUsersCountAC(totalCount))
//            },
//            toggleIsFetching: (isFetching) =>{
//             dispatch(setIsFetchingAC(isFetching))
//            },

//         }
//     }

const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
   toggleIsFetching: setIsFetching,
})(UsersAPIComponent)

export default UsersContainer;