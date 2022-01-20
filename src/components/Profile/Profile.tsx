import React from 'react';
import MyPosts from './MyPosts/MyPosts';
//import ProfileInfo from './ProfileInfo/ProfileInfo';
//import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

const Profile = () => {
  
    return (
      <div>
        <div className={s.profileHeader}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="headerimage"/>
          </div>
          <div className={s.description}>
            ava + description
          </div>
          <MyPosts />
      </div>
    )
}

export default Profile;