//STEP 1 JARED 

import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router.js';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <h4>Logo</h4>
          <h4>Houser Dashboard</h4>
          <h4>Logout</h4>
        </div>
        {router}
        <div>
          {/* <Login />
          <Dashboard /> */}
        </div>
      </div>
    );
  }
}

export default App;
