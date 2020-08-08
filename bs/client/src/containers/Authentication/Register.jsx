import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <form action="/" id="register-wrapper" className={this.props.regFormHide}>
            <label html="register-name">Name</label>
            <input type="text" id="register-name" placeholder="Name" minLength="2" required onChange={this.props.checkUserDB}></input>
            <label htmlFor="register-email-input">Email Address</label>
            <input type="email" name="register-email-input" id="register-email-input" className="register-email" placeholder="Email Address" required onChange={this.props.checkUserDB}></input>
            <label htmlFor="register-password-input">Password</label>
            <input type="password" name="register-password-input" id="register-password-input" className="register-password" placeholder="Create Password" defaultValue="" minLength="8" required onChange={this.props.checkUserDB}></input>
            <label htmlFor="register-password-input-re-enter">Re-Enter</label>
            <input type="password" name="register-password-input-re-enter" id="register-password-input-re-enter" className="register-password" placeholder="Re-enter password" defaultValue="" minLength="8" required onChange={this.props.checkUserDB}></input>
            <button type="submit" id="register-button" onSubmit={this.props.checkUserDB}>Register</button>
            <button type="reset" id="reset-button">Reset</button>
            </form>
        )
    }
}

export {Register};