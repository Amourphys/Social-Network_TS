//import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import { RootStoreType, StoreType } from './redux/state';

type PropsType = {
  state: RootStoreType
  store: StoreType
  addPost: () => void
  updateNewPost: (newPost: string) => void
}
function App(props: PropsType) {//деструктуризация пропсов, которые приходят в index.tsx
  const store = props.store.getState();
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Routes>
            <Route path='/friends/*' element={<Friends friends={props.store.sidebar.friends}/>}/>
          </Routes>
      </Navbar> */}
      <div className="app-content">
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs
            dialogs={store.dialogsPage.dialogs}
            messages={store.dialogsPage.messages}
            newMessageBody={store.dialogsPage.newMessageBody}
          />} />
          <Route path='/profile' element={<Profile
            posts={store.profilePage.posts}
            newPostText={store.profilePage.newPostText}
            addPost={props.addPost}
            onPostChange={props.updateNewPost}
          />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
