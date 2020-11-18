import React, { Component } from 'react';
import "./loginForm.css"
import { sha256 } from 'js-sha256';
import axios from 'axios';

class LoginForm extends Component {

    constructor(){
        this.state = {
            username: '',
            password: '',
            userType: '',
            redirect: ''
        }
    }

    getUsername(e){
        var value = e.target.value;
        this.setState({username: value})
    }

    getPassword(e){
        var value = e.target.value;
        this.setState({password: value})
    }

    failedLogin(){
        alert('Login Failed, try again')
        this.setState({redirect: false})
    }

    goodLogin(){
        this.setState({redirect: true})
    }

    login() {
        let pass = this.state.password;
        pass = sha256(pass);
        axios.post('http://localhost:8000/verifyUser', {username: this.state.username, password: pass})
                    .then(response => {
                        if (response.data === 0) {
                            this.failedLogin()
                        }
                        else {
                            console.log(response.data)
                            this.goodLogin(response.data)
                        }
        })

    }

    render() { 
        return (  
            <div className = "row-12 align-self-center">
                <div id = "loginForm" className = "mt-5 mb-5 border bg-white container-fluid col-7 align-self-center">
                    <h2 className = "p-2 banner">Login</h2>
                    <form className = "" action = "http://localhost:3000/manager">
                        <div className = "">
                            <label htmlFor = "username" className = "m-2">Username</label>
                            <input type = "text" id = "username"></input>
                        </div>
                        <div>
                            <label htmlFor = "password" className = "m-2">Password </label>
                            <input type = "password"></input>
                        </div>
                        <div>
                            <button type = "submit" className = "submit m-2 login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;