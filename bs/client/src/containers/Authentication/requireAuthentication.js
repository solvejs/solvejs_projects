import React, { Component, Fragment } from "react";

export function requireAuthentication(AuthenticatedComponent) {
    return function AuthenticatedComponent1(props) {
        // isAuthenticated() {
        //     return this.props.isAuthenticated;
        // }
        // render() {
            
            return (
                    props.isAuthenticated ? <AuthenticatedComponent {...props}/> : (
                        <div>
                            Please <a href='/login'>login</a> in order to view this part of the application.
                        </div>
                    )
            )
        // }
    }
}

    export default requireAuthentication;

        // const state = {
        //     isLoggedIn: false,
        //     regFormHideClasses: 'register-form hide-element',
        //     logFormHideClasses: 'login-form hide-element',
        //     contactFormHide: 'hide-element'
        // }
        
        // this.handleChange = this.handleChange.bind(this);
        // // this.handleRegFormClick = this.handleRegFormClick.bind(this);
        // // this.handleLogFormClick = this.handleLogFormClick.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        // this.handleLogout = this.handleLogout.bind(this);
        // this.handleLogFormClick = this.handleLogFormClick.bind(this);
    // function handleChange (e) {
        // not being used > submit creating new formdata
        // this.setState({
        //     [e.target.name]: e.target.value,
        // })
    // }
    
    // function handleLogFormClick() {
    //         this.state.logFormHideClasses === 'login-form hide-element' ? this.setState({
    //           logFormHideClasses: 'login-form'
    //         }) : this.setState({
    //           logFormHideClasses: 'login-form hide-element'
    //       })
    // }
    // function handleLogin(event) {
    //     event.preventDefault(); // not sure this is doing anything
    //     let dataPass = {
    //         loginEmailInput: this.state.loginEmailInput,
    //         loginPasswordInput: this.state.loginPasswordInput
    //     };
    //         fetch('/api/login', {
    //             method: "POST",
    //             body: JSON.stringify(dataPass),
    //             headers: {
    //             "Content-Type": "application/json"
    //         }
    //         })
    //         .then(res => res.json())
            //.then(data => console.log(data, 'data from express'))
            // .then(data => this.setState({
            //     isLoggedIn: data.isLoggedIn,
            //     logFormHideClasses: data.logFormHideClasses
            // }))
    // }
    // function handleLogout(event) {
    //     event.preventDefault();
    //     let dataPass = {
    //         loginEmailInput: this.state.loginEmailInput
    //     };
    //         fetch('/api/logout', {
    //             method: "POST",
    //             body: JSON.stringify(dataPass),
    //             headers: {
    //             "Content-Type": "application/json"
    //         }
    //         })
    //         .then(res => res.json())
    //         //.then(data => console.log(data, 'data from express'))
    //         .then(data => this.setState({
    //             isLoggedIn: data.isLoggedIn 
    //         }))
    // }

        // if(state.isLoggedIn) {
        //     return (
        //         <Fragment>
        //         <Dashboard />
        //         </Fragment>
        //     )
        // }
        // if(!this.state.isLoggedIn) {
        //     return (
        //         <Login showForm={this.state.logFormHideClasses} checkDB={this.handleLogin} />
        //     )
        // }
    // }


function Form(props) {
    return (
        <form style={{zIndex: 50, height: "", width: "", position: "relative", margin: "auto"}}>
            <input type="text" defaultValue="enter" />
            <input type="text" defaultValue="enter" />
            <textarea type="text" defaultValue="enter en" />
            <button onClick={props.click} style={{display: "inline-block", height: "20px", verticalAlign: "middle", fontWeight: "bold", color: "white", backgroundColor: "var(--main-highlight-color)"}}>Push</button>
        </form>
    )
}
