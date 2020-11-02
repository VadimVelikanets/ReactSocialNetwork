import React from 'react';

const Post = (props) =>{

    return(
        <div className='post__item flex__start'>
            <img width='40px' className='profile-img' src='/img/profile.png'/>
            <div className='post__inner'>
            <div className='post__data'>{props.data}</div>
            <div className='post__txt'>
                {props.txt}
            </div> 
            </div>
            <div className="btnDeletePost" onClick={() => {props.deletePost(props.postId)}}>
                <img src="/img/close.svg" width='15' alt=""/>
            </div>
            {props.liked 
                ?  <div onClick={() => {props.changeLike(props.postId)}}  className="btnLike active">
                        <img src="/img/heart.svg" alt="Like" width='20'/>
                    </div>
                :  <div onClick={() => {props.changeLike(props.postId)}}  className="btnLike">
                    <img src="/img/heart.svg" alt="Like" width='20'/>
                </div>
            }

        </div>
    
    )
}

export default Post;