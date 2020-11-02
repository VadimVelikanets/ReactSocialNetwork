import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {addPost} from './redux/store';
import {updateNewPostTxt}  from './redux/store';
export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
    <React.StrictMode>
      <App updateNewPostTxt={updateNewPostTxt} addPost={addPost} state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}