import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
    return (
        <div className={s.item}>
            {/* {props.message} */}
            <img src="https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75" alt="foto"/>
            <div className={s.likes}>
                <button>
                    like
                </button>
                <div className={s.likeStatus}>
                    {/* {props.likesCount} */}
                </div>
            </div>
        </div>
    );
};

export default MyPost;