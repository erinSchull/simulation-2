// STEP 1 JARED

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Step1 extends Component{
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
                <h4>Add new listing</h4>
                <Link to="/dashboard">
                    <button>Cancel</button>
                </Link>
                <h4>Property Name</h4>
                <input value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }}/>
                <h4>Property Description</h4>
                <input value={this.state.password} onChange={(i) => {
                    this.setState({
                        password: i.target.value
                    })
                }}/>
                <div>
                    <Link to="/dashboard">
                    </Link>
                </div>
            </div>
        )
    }
}

export default Step1;