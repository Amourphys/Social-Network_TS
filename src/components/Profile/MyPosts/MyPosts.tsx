import React, { ChangeEvent } from 'react';
import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css';
import MyPost from './Post/Post';

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void,
    onPostChange: (newPost: string) => void
}
const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <MyPost message={p.message} likesCount={p.likesCount} id={p.id} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>()//обязательно прописать <HTMLTextAreaElement>

    const onAddPost = () => {
        // //alert(newPostElement.current && newPostElement.current.value)
        // //alert(newPostElement.current?.value) //укороченная запись чтоб тайпскрипт не ругался на типизацию
        // addPost(newPostElement.current ? newPostElement.current.value : '')//укороченная запись
        props.addPost()

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.onPostChange(text);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Clear</button>
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