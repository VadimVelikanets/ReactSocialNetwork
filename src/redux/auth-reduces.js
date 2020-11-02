
const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false

}
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data
         }        
                     
        default:
            return state 
      }
}


export const setUserAuthData = (userId, email, login, isAuth) =>{
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}
export default authReducer;