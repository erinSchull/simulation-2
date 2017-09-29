// STEP 1 JARED

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component{
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: ''
        }
    }

    //     axios.post('/api/register')
    //       .then(response => {
    //         let newBinVals = response.data.map(bin => {
    //           return bin.name ? true : false;
    //         });
    //         this.setState({
    //             username: newBinVals
    //         });
    //       })
    //       .catch(error => {console.log(error);});
    //   }
      
    render(){
        return (
            <div className= 'root'>
                <h4>Username</h4>
                <input classname='username-input' value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }}/>
                <h4>Password</h4>
                <input classname='password-input' value={this.state.password} type='password' onChange={(i) => {
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