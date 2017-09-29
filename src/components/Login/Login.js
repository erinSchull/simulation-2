// STEP 1 JARED

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
        return (
            <div>
                <div>
                    <h4>Logo</h4>
                    <h4>Houser Dashboard</h4>
                    <h4>Logout</h4>
                </div>
                <h4>Username</h4>
                <input value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }}/>
                <h4>Password</h4>
                <input value={this.state.password} onChange={(i) => {
                    this.setState({
                        password: i.target.value
                    })
                }}/>
                <div>
                    <button onClick={() => alert('Still need to connect')}>Login</button>
                    <button onClick={() => alert('Seriously need to connect')}>Register</button>
                </div>
            </div>
        )
    }
}

export default Login;