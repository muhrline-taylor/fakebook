import React from 'react';
import Landing from './components/Landing';
import Main from './components/Main';
import './static/css/App.css';
import { Router, Link } from '@reach/router';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <div className="app">
      {
        localStorage.getItem("loggedInUser") ?
        <Main />
        :<Landing />
      }
      
      

      

    </div>
  );
}

export default App;
