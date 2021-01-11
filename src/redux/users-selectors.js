import {createSelector} from 'reselect';


export const getUsers = (state) =>{
    return state.usersPage.users;
}

// export const getUsersSelect = (state) =>{
//     return getUsers().filter(u => true)
// }

export const getUsersSelect = createSelector(getUsers, (users) =>{
    return users.filter(u => true)
})
export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount
}

export const getcurrentPage = (state) =>{
    return state.usersPage.currentPage
}

export const getIsFetching = (state) =>{
    return state.usersPage.isFetching
}

export const getfollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}