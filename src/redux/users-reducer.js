const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
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
    isFetching: true

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
        default:
            return state 
      }
}

export const follow = (id) =>{
    return {
        type: FOLLOW,
        id
    }
}
export const unfollow = (id) =>{
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

export const setCurrentPage = (currentPage) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) =>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const setIsFetching = (isFetching) =>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export default usersReducer;