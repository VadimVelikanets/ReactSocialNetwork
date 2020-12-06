import React from 'react';
import {addPostActionCreater, UpdateNewPostTxtActionCreater, changeLikeAC, deletePostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps  = (state) =>{
    return{
        profilePage: state.profilePage.postData,
        newPostTxt: state.profilePage.newPostTxt
    }
}
let mapDispatchToProps  = (dispatch) =>{
    return{

            addPost: (newPostElement) =>{
                dispatch(addPostActionCreater(newPostElement));
            },
            changeLike: (postId) =>{
                let action = changeLikeAC(postId)
                dispatch(action);
            },
            deletePost: (postId) =>{
                let action = deletePostAC(postId)
                dispatch(action);
            },

        }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;