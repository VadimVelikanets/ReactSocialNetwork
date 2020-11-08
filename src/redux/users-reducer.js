import {usersAPI} from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING= 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [
        // {
        // userId: 2,
        // name: 'Julia',
        // status: 'I am a boss',
        // city: 'Minsk',
        // country: 'Belarus',
        // userImg: 'user1.png',
        // followed: false
        // },
        // {
        // userId: 3,
        // name: 'Henry',
        // userImg: 'user2.jpg',
        // status: 'I am a new boss',
        // city: 'New York',
        // country: 'USA',
        // followed: true
        // },
        // {
        // userId: 4,
        // name: 'Alan',
        // userImg: 'user3.jpg',
        // status: 'Engeneer',
        // city: 'London',
        // country: 'England',
        // followed: false
        // },
        // {
        // userId: 5,
        // name: 'Kate',
        // userImg: 'user4.png',
        // status: 'Wife and mother',
        // city: 'Kiev',
        // country: 'Ukraine',
        // followed: true
        // },
    ], 
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true, 
    followingInProgress: []

}
const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: true}
                    }
                    return u
                })
         }        
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }
                    return u
                })
         } 
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }  
        case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                }         
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }  
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }   
        //Создаем disable чтобы ajax запрос нельзя было отправить несколько раз подряд    
        case TOGGLE_IS_FOLLOWING:
                return {
                    ...state,
                    followingInProgress: action.isFetching
                     ? [...state.followingInProgress, action.userId]
                     : state.followingInProgress.filter(id => id != action.userId)
                }                          
        default:
            return state 
      }
}
//Action Creaters
export const followSuccess = (id) =>{
    return {
        type: FOLLOW,
        id
    }
}
export const unfollowSuccess = (id) =>{
    return {
        type: UNFOLLOW,
        id
    }
}
export const setUsers = (users) =>{
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (page) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}

export const setTotalUsersCount = (totalUsersCount) =>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) =>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) =>{
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching, userId
    }
}
//Thunks
export const getUsersThunkCreator = (currentPage, pageSize) =>  {
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
       usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items)) 
        dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId) =>  {
    
    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUsers(userId)
        .then(data => {
            if(data.resultCode == 0){
                dispatch(followSuccess(userId))
            }
            })
            dispatch(toggleFollowingProgress(false, userId))

        }}
export const unfollow = (userId) =>  {

    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollowUsers(userId)
        .then(data => {
            if(data.resultCode == 0){
                dispatch(unfollowSuccess(userId))
            }
            })
            dispatch(toggleFollowingProgress(false, userId))

        }}
export default usersReducer;