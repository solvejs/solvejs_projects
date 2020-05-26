import React, { Component, Fragment } from "react";
import Login from './Login';
import Register from './Register';
import {users} from '../users/users';

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            regFormHideClasses: 'register-form hide-element',
            logFormHideClasses: 'login-form hide-element',
            contactFormHide: 'hide-element'
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleRegFormClick = this.handleRegFormClick.bind(this);
        // this.handleLogFormClick = this.handleLogFormClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogFormClick = this.handleLogFormClick.bind(this);
    }
    handleChange = (e) => {
        // not being used > submit creating new formdata
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleLogFormClick() {
            this.state.logFormHideClasses === 'login-form hide-element' ? this.setState({
              logFormHideClasses: 'login-form'
            }) : this.setState({
              logFormHideClasses: 'login-form hide-element'
          })
    }
    handleLogin(event) {
        event.preventDefault(); // not sure this is doing anything
        let dataPass = {
            loginEmailInput: this.state.loginEmailInput,
            loginPasswordInput: this.state.loginPasswordInput
        };
            fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(dataPass),
                headers: {
                "Content-Type": "application/json"
            }
            })
            .then(res => res.json())
            //.then(data => console.log(data, 'data from express'))
            .then(data => this.setState({
                isLoggedIn: data.isLoggedIn,
                logFormHideClasses: data.logFormHideClasses
            }))
    }
    handleLogout(event) {
        event.preventDefault();
        let dataPass = {
            loginEmailInput: this.state.loginEmailInput
        };
            fetch('/api/logout', {
                method: "POST",
                body: JSON.stringify(dataPass),
                headers: {
                "Content-Type": "application/json"
            }
            })
            .then(res => res.json())
            //.then(data => console.log(data, 'data from express'))
            .then(data => this.setState({
                isLoggedIn: data.isLoggedIn 
            }))
    }
    render() {
        if(this.state.isLoggedIn) {
            return (
                <Fragment>
                <Button text="Logout" click={this.handleLogout}>,
                </Button>
                <Login showForm={this.state.logFormHideClasses} checkDB={this.handleLogin} />
                </Fragment>
            )
        }
        if(!this.state.isLoggedIn) {
            return (
                <Fragment>
                <Button text="Login" click={this.handleLogFormClick}>,
                </Button>
                <Login showForm={this.state.logFormHideClasses} trackText={this.handleChange} checkDB={this.handleLogin} />
                </Fragment>
            )
        }
    }
}

function Button(props) {
    return (
        props.text === "Login" ?
        <Fragment>
        <button onClick={props.click} style={{display: "inline-block", height: "20px", verticalAlign: "middle", fontWeight: "bold", color: "white", backgroundColor: "var(--main-highlight-color)"}}>{props.text}</button>
        </Fragment>
         :
         <Fragment>
        <button onClick={props.click} style={{display: "inline-block", height: "20px", verticalAlign: "middle", fontWeight: "bold", color: "var(--secondary-highlight-color)", backgroundColor: "var(--main-background-color)"}}>{props.text}</button>
        </Fragment>
    )
}
