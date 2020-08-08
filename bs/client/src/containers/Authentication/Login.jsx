import React from 'react';

export default function Login(props) {
        return (
<<<<<<< HEAD
            <form action="api/login" method="post" id="login-wrapper" className={props.showForm} onSubmit={props.checkDB} >
=======
            <form action="/api/login" method="post" id="login-wrapper" className={props.showForm} onSubmit={props.checkDB} >
>>>>>>> f35abca94f491dbd8ac33a502e06819854ede0e6
                <label htmlFor="loginEmailInput">Email Address</label>
                <input type="email" name="loginEmailInput" id="loginEmailInput" className={"login-email"} placeholder="Email Address" defaultValue="" required onChange={props.trackText} />
                <label htmlFor="loginPasswordInput">Password</label>
                <input type="password" name="loginPasswordInput" id="loginPasswordInput" className="login-password" placeholder="Create Password" defaultValue="" minLength="8" required onChange={props.trackText} />
                <button type="submit" id="login-button">Submit</button>
                <li><a href="/" className="pw-reset">Reset Password or Username</a></li>
            </form>
        )
    }