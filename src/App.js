//STEP 1 JARED 

import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router.js';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import logo from './houser-logo.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <img src={logo} alt='logo'/>
        </div>
        {router}
        <div>
        </div>
      </div>
    );
  }
}

export default App;
