import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
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
                <MyPost/>
               {/* {postsElements} */}
            </div>
        </div>
    );
};

export default MyPosts;