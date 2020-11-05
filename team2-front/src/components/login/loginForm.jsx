import React, { Component } from 'react';
import "./loginForm.css"

class LoginForm extends Component {
    state = {  }
    render() { 
        return (  
            <div className = "row-12 align-self-center">
                <div id = "loginForm" className = "mt-5 mb-5 border bg-white container-fluid col-7 align-self-center">
                    <h2 className = "p-2 banner">Login</h2>
                    <form className = "">
                        <div className = "">
                            <label htmlFor = "username" className = "m-2">Username</label>
                            <input type = "text" id = "username"></input>
                        </div>
                        <div>
                            <label htmlFor = "password" className = "m-2">Password </label>
                            <input type = "password"></input>
                        </div>
                        <div>
                            <button type = "button" className = "submit m-2 login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;