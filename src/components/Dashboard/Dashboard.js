//STEP 1 JARED 
// STEP 1 JARED

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
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
                <Link to='wizard/1'>
                <button>Add new property</button>
                </Link>
                <h4>List properties with "desired rent" greator than: $</h4>
                <input value={this.state.username} onChange={(e) => {
                    this.setState({
                        username: e.target.value
                    })
                }}/>
                <div>
                    <button onClick={() => alert('Seriously need to connect')}>Filter</button>
                    <button onClick={() => alert('Seriously need to connect')}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Dashboard;