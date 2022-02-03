//import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store, { RootStoreType, StoreType } from './redux/state';

let rerenderEntireTree = (state: RootStoreType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} store={store} addPost={store.addPost.bind(store)} updateNewPost={store.onPostChange.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)