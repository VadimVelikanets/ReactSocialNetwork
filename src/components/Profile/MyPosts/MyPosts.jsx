import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) =>{
    
    let newPostElement = React.createRef();
    let addPost = () => {
       
        
         props.addPost()
    
    }
    let onPostChange = () =>{
        
        let text = newPostElement.current.value;
         props.updateNewPostTxt(text)
    }


      const PostList = props.profilePage.map((el) =>
        <Post deletePost={props.deletePost} changeLike={props.changeLike} txt={el.txt} postId={el.postId} liked={el.yourLike} data={el.data} key={el.postId}/>
    )
  
    return(
        <div>
                <div className='addPost'>
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder="Whats new?" value={props.newPostTxt} />
                    <button onClick={ addPost}>Add post</button>
                </div>
                <div className='posts'>
                    {PostList}
                </div>
        </div>
 
    
    )
}

export default MyPosts;