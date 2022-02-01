import React from 'react';
//import { ProfilePageType } from '../../../redux/state';
import s from './MyPosts.module.css';
import MyPost from './Post/Post';

/* type MyPostsType ={
    posts: Array<PostType>
    newPostText: string
} */
const MyPosts = (props: any) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 14 }
    ]

    let postsElements = posts.map(p => <MyPost message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsWrapper}>
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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;