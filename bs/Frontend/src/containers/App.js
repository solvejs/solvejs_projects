import React, { Component } from 'react';
import './reset.css';
import './grid-flex.css';
import './style.css';
import Title from '../components/Title';
import Menu from './menu/Menu';
import Footer from '../components/Footer';
import BumpersDiv from './bumpers/BumpersGenerator';
import Registration from './menu/Register';
import Login from './menu/Login';
import {users} from './users/users';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regFormHide: 'register-form hide-element',
      logFormHide: 'login-form hide-element',
      contactFormHide: 'hide-element'
    };
    this.handleRegFormClick = this.handleRegFormClick.bind(this);
    this.handleLogFormClick = this.handleLogFormClick.bind(this);
    this.handleContactFormClick = this.handleContactFormClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkUserDB = this.checkUserDB.bind(this);
  }
  handleRegFormClick() {
    this.state.regFormHide === 'register-form' ? this.setState({
        regFormHide: 'register-form hide-element'
    }) : this.setState({
      regFormHide: 'register-form'
  })
}
handleLogFormClick() {
  this.state.logFormHide === 'login-form' ? this.setState({
      logFormHide: 'login-form hide-element'
  }) : this.setState({
    logFormHide: 'login-form'
})
}
handleContactFormClick() {
  this.state.contactFormHide === 'hide-element' ? this.setState({
      contactFormHide: ''
  }) : this.setState({
    contactFormHide: 'hide-element'
})
}
handleInputChange() {
}
checkUserDB(event) {
  event.preventDefault(); // not sure this is doing anything
  let pass1 = document.querySelector('#register-password-input').value;
  let pass2 = document.querySelector('#register-password-input-re-enter').value;
  let loginEmailEntered = document.querySelector('#login-email-input');
  let loginPassEntered = document.querySelector('#login-password-input');
  let emailEntered = document.querySelector('#register-email-input').value;
  if((pass1 === pass2) && (checkEmailExists(emailEntered) === true) ) {
    console.log('please login to your account');
    // need to check db for existing email entry
    // can use checkDB function >> need to add inside for privacy
  } else if(checkEmailExists(loginEmailEntered)) {
    console.log('logged in > still need to check password')
    } else {
    console.log('not equal', emailEntered)
  }
  function checkEmailExists(emails) {
    let filteredEmail = users.map(item =>
      item.email.toString()
    ).filter(item => item === emails);
    if(filteredEmail.includes(emails)) {
      return true;
    } else if((loginEmailEntered === filteredEmail) && loginPassEntered) {
      console.log('logged in')
    } else {
      return false;
    }
  }
}
  render() {
   return (
     <div id="body">
     <Menu handleRegFormClick={this.handleRegFormClick} handleLogFormClick={this.handleLogFormClick} handleContactFormClick={this.handleContactFormClick} />
     <Contact className={this.state.contactFormHide}/>
     <Registration regFormHide={this.state.regFormHide} checkUserDB={this.checkUserDB} />
     <Login logFormHide={this.state.logFormHide} checkUserDB={this.checkUserDB} />
     <Title />
     <BumpersDiv />
    <Footer />
    </div>
    )
  }
}

export default App;
