import React, { Component } from 'react';
import {users} from '../users/users';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <form action="/" method="post" id="login-wrapper" className={this.props.logFormHide}>
        <label htmlFor="login-email-input">Email Address</label>
        <input type="email" name="login-email-input" id="login-email-input" className="login-email" placeholder="Email Address" defaultValue="" required onChange={this.props.checkUserDB}></input>
        <label htmlFor="login-password-input">Password</label>
        <input type="password" name="login-password-input" id="login-password-input" className="login-password" placeholder="Create Password" defaultValue="" minLength="8" required onChange={this.props.checkUserDB}></input>
        <button type="submit" id="login-button" onSubmit={this.props.checkUserDB}>Submit</button>
        <li><a href="/" className="pw-reset">Reset Password or Username</a></li>
    </form>
        )
    }
}

export {Login};