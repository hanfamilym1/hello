import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',   
        }
    }
    
    handleUser(val){
        this.setState({
            username: val
        })
    }

    handlePassword(val){
        this.setState({
            password: val
        })
    }

    register = ()=> {
        let {username, password} = this.state
        axios.post('/api/auth/register', {username, password}).then(res=>
        console.log(res.data))
    }
    //was able to get where I could see the array from my database, but wasn't sure where to go towards getting the one current showing.  My guess was get_users select * from users where username=$1 and password=$2, but for some reason I think it had to do with my componentdid mount that is not existant right now... also, I think it may be because my brain isn't functioning quite right.

    render() {
        console.log('user', this.state.username)
        console.log('pass', this.state.password)
        return (
            <div>
                <h1>HELO</h1> <br/>
                <label htmlFor="">Username: </label>
                <input value={this.state.username} type="text" onChange={(e)=>this.handleUser(e.target.value)}/> <br/>
                <label htmlFor="">Password: </label>
                <input value={this.state.password} type="text" onChange={(e)=>this.handlePassword(e.target.value)}/> <br/>
                <button>Login</button>
                <button onClick={this.register}>Register</button>
                
            </div>
        )
    }
}

export default Auth