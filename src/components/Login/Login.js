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
                    <Link to="/dashboard">
                    <button>Login</button>
                    <button>Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login;