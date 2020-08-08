import React, { Component, Fragment } from "react";
import Login from './Login';
import Register from './Register';
import {users} from '../users/users';
import Dashboard from '../../components/Dashboard';
import { Switch, Route } from "react-router-dom";
import Admin from '../../containers/bumpers/Admin';
import BumpersContext from '../bumpers/BumpersAndCats';

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
    handleCookie(status) {
        console.log(status, 'status....start of condition')
        let logCookies = document.cookie;
        let stat = {
            loggedIn: status
        }
        let decodedCookie = decodeURIComponent(logCookies);
        if(status) {
            console.log(status, 'status...true...if(status)')
            // console.log('decodedCookie', document.cookie, new Date)
            fetch('api/cookie-login', {
                method: "POST",
                headers: {
                    // Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
                body: JSON.stringify(stat),
            })
            .then(res => console.log(status, res, 'res res res'))
        } else if(!status) {
            console.log(status, 'status...false...else/if(!status)')
            // console.log('decodedCookie', document.cookie, new Date)
        }
    }
    handleLogin(event) {
        event.preventDefault(); // not sure this is doing anything
        let dataPass = {
            loginEmailInput: this.state.loginEmailInput,
            loginPasswordInput: this.state.loginPasswordInput
        };
            fetch('api/login', {
                method: "POST",
                body: JSON.stringify(dataPass),
                headers: {
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
            })
            .then(res => res.json())
            //.then(data => console.log(data, 'data from express'))
            .then(data => this.setState(prevState => ({
                isLoggedIn: data.isLoggedIn,
                logFormHideClasses: data.logFormHideClasses
            })))
            .then(info => this.handleCookie(this.state.isLoggedIn))
            // .then(document.cookie = 'loggedIn=true; path=/; max-age=30')
    }
    removeCookies = () => {
        fetch('api/cookie-logout', {
            method: 'POST',
            headers: {},
            body: '',
        })
        .then(res => console.log(res, 'res cookie cleared?'))
    }
    handleLogout(event) {
        event.preventDefault();
        let dataPass = {
            loginEmailInput: this.state.loginEmailInput
        };
            fetch('api/logout', {
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
            .then(
                this.removeCookies()
            )
    }
    render() {
        if(this.state.isLoggedIn) {
            return (
                <Fragment>
                <Button text="Logout" click={this.handleLogout}>,
                </Button>
                <Login showForm={this.state.logFormHideClasses} checkDB={this.handleLogin} />
                <Switch>
                <Dashboard exact path='/dashboard' component={Dashboard} />
                <Route exact path='/admin' component={Admin} />
                </Switch>
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
