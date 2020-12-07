import { stopSubmit } from 'redux-form';
import {authAPI} from '../api/api'
import {authThunk} from './auth-reducer'
const SET_INITIALIZED = 'SET_INITIALIZED';
let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED:
            return {
                ...state, 
                initialized: true
         }        
                     
        default:
            return state 
      }
}


export const setInitializedSuccess = () =>{
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () =>{
    return (dispatch) =>{
        let promise = dispatch(authThunk())
        Promise.all([promise]).then(() =>{
            dispatch(setInitializedSuccess())
        })
        
    }
}

export default appReducer;