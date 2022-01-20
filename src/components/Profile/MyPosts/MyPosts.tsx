import React from 'react';
//import { ProfilePageType } from '../../../redux/state';
import s from './MyPosts.module.css';
import MyPost from './Post/Post';

/* type MyPostsType ={
    posts: Array<PostType>
    newPostText: string
} */
const MyPosts = (props: any) => {
    
    return (
        <div className={s.postWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea /* onChange={onPostChange} ref={newPostElement} value={props.newPostText} */></textarea>
                </div>
                <div>
                    <button /* onClick={onAddPost} */>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.item}>
                New post
            </div>
            <div className={s.posts}>
                <MyPost message='hello' likesCount='14'/>
                <MyPost message='by by' likesCount='27'/>
               {/* {postsElements} */}
            </div>
        </div>
    );
};

export default MyPosts;