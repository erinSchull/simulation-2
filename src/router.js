//STEP 1 JARED 
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App.js';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

export default (
    <div>
        <Switch>
            <Route component={Login} exact path='/' />
        </Switch>
        <Switch>
            <Route component={Dashboard} path='/Dashboard' />
        </Switch>
    </div>
)