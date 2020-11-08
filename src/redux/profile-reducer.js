import {usersAPI} from '../api/api'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CHANGE_LIKE = 'CHANGE-LIKE';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    postData: [
        
            
        {
            postId: 1,
            txt: 'And new post',
            data: '29.10.20',
            likeCount: 29,
            yourLike: true
        },
        {
            postId: 2,
            txt: 'Second post',
            data: '26.10.20',
            likeCount: 3,
            yourLike: false
        },
        {
            postId: 3,
            txt: 'First post',
            data: '25.10.20',
            likeCount: 2,
            yourLike: true
        },
    
    ],
    newPostTxt: '',
    profile: null
}
 const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let dataNow = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
            let newPost = {
                postId: state.postData.length + 1,
                txt: state.newPostTxt,
                data: dataNow,
                likeCount: 0,
                yourLike: false
            };
            //Копируем state т.к не имеем права менять его не прямую 
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            if(newPost.txt != ''){
                stateCopy.postData.push(newPost)
            }
            
            stateCopy.newPostTxt = '';
            return stateCopy;
        }


        case UPDATE_NEW_POST_TEXT: {
          let stateCopy = {...state}
          stateCopy.newPostTxt = action.newTxt;
          return stateCopy;
        }
        case CHANGE_LIKE: {
            return {
                ...state, 
                postData: state.postData.map(p => {
                    if(p.postId === action.postId){
                        return {...p, yourLike: !p.yourLike}
                    }
                    return p
                })
         } 
        }
        case DELETE_POST: {
            
                let stateCopy = {...state}
                let postDataDelete = state.postData.filter(p => p.postId != action.postId)
                stateCopy.postData =  postDataDelete
                return stateCopy
            
        }
        case SET_USER_PROFILE: {
            
            return{
                ...state, profile: action.profile
            }
        
        }
        default: 
            return state
    }
 }

export const addPostActionCreater = () =>{
    return {
        type: ADD_POST
    }
}

export const UpdateNewPostTxtActionCreater = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTxt: text
    }
}
export const changeLikeAC = (postId) =>{
    return {
        type: CHANGE_LIKE,
        postId
    }
}
export const deletePostAC = (postId) =>{
    return {
        type: DELETE_POST,
        postId
    }
}
export const setUserProfile = (profile) =>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
//Thunk
export const profileThunk = (userId) =>{
    return (dispatch) =>{
      //  const userId = dispatch(match.params.userId)
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export default profileReducer;