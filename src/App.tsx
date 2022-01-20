//import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';


function App() {
 
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
          {/* <Routes>
            <Route path='/friends/*' element={<Friends state={props.state.sidebar}/>}/>
          </Routes> */}
        {/* </Navbar> */}
      <div className="app-content">
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/users' element={<Users />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
