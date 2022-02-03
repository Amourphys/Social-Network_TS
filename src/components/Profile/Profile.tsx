import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { PostType } from '../../redux/state'

type ProfilePropsType = {
  posts: Array<PostType>
  newPostText: string,
  addPost: () => void,
  onPostChange: (postText: string) => void
}

const Profile = (props: ProfilePropsType) => {

  const { posts, newPostText, addPost, onPostChange } = props

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} onPostChange={onPostChange} />
    </div>
  )
}

export default Profile;