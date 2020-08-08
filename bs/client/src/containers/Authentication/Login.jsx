import React from 'react';

export default function Login(props) {
        return (
            <form action="api/login" method="post" id="login-wrapper" className={props.showForm} onSubmit={props.checkDB} >
                <label htmlFor="loginEmailInput">Email Address</label>
                <input type="email" name="loginEmailInput" id="loginEmailInput" className={"login-email"} placeholder="Email Address" defaultValue="" required onChange={props.trackText} />
                <label htmlFor="loginPasswordInput">Password</label>
                <input type="password" name="loginPasswordInput" id="loginPasswordInput" className="login-password" placeholder="Create Password" defaultValue="" minLength="8" required onChange={props.trackText} />
                <button type="submit" id="login-button">Submit</button>
                <li><a href="/" className="pw-reset">Reset Password or Username</a></li>
            </form>
        )
    }