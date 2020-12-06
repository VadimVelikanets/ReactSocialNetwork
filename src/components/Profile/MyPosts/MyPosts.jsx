import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import {requiredField, maxLenghtCreator} from "../../../utils/validation/index"
import {Textarea} from '../../common/FormsControl/FormsControl'
const MyPosts = (props) =>{

    let addNewPost = (value) => {
        console.log(value)
        props.addPost(value.newPostElement)
   }


      const PostList = props.profilePage.map((el) =>
        <Post deletePost={props.deletePost} changeLike={props.changeLike} txt={el.txt} postId={el.postId} liked={el.yourLike} data={el.data} key={el.postId}/>
    )
  
    return(
        <div>

                <AddMessageFormRedux onSubmit={addNewPost}/>
                <div className='posts'>
                    {PostList}
                </div>
        </div>
 
    
    )
}
let maxLength10 = maxLenghtCreator(10)
const AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className='addPost'>
            <Field validate={[requiredField, maxLength10]} component={Textarea} name={"newPostElement"} placeholder="Whats new?" />
            <button>Add post</button>
        </form>
    )
  }
  const AddMessageFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

export default MyPosts;