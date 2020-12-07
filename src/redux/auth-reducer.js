import { stopSubmit } from 'redux-form';
import {authAPI} from '../api/api'

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
//Thunk
export const authThunk = () =>{
    return (dispatch) =>{
        authAPI.me()
        .then(data => {
                if(data.resultCode === 0){
                    const {id, email, login} = data.data
                    let isAuth = true;
                    dispatch(setUserAuthData(id, email, login, true))
                }
            })
    }
}
//Thunk
export const loginThunk = (email, password, rememberMe) =>{
    return (dispatch) =>{
        
        authAPI.login(email, password, rememberMe)
        .then(data => {
                if(data.resultCode === 0){
                    dispatch(authThunk())
                } else{
                    console.log(data)
                    let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
}

export const logoutThunk = () =>{
    return (dispatch) =>{
        authAPI.logout()
        .then(data => {
                if(data.resultCode === 0){
                    dispatch(setUserAuthData(null, null, null, false))
                }
            })
    }
}

export default authReducer;