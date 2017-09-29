//STEP 1 JARED 
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App.js';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Step1 from './components/Wizard/Step1/Step1';

export default (
    <div>
        <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/Dashboard' />
        </Switch>
        <Switch>
            <Route component={Step1} path='/wizard/1' />
        </Switch>
    </div>
)