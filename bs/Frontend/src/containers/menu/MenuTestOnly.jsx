import React, {Component} from 'react';
import Login from './Login';
import Registration from './Register';
import Contact from '../Contact';
import {users} from '../users/users';

export class MenuTestOnly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuArr : 
        [
            {
                'type': 'li',
                'linkName': 'Home',
                'linkAddr': '/',
                'className': 'nav-menu-item to-hide',
                'submenu': {}
            },
            {
                'type': 'li',
                'linkName': 'Categories',
                'linkAddr': '/categories',
                'className': 'nav-menu-item to-hide',
                'submenu': {}
            },
            {
                'type': 'li',
                'linkName': 'About',
                'linkAddr': '/about',
                'className': 'nav-menu-item to-hide',
                'submenu': {}
            },
            {
                'type': 'li',
                'linkName': 'Contact',
                'linkAddr': '#',
                'className': 'nav-menu-item click-hide-contact-us to-hide',
                'submenu': {}
            },
            {   
                'type': 'ul',
                'className': 'login-container',
                'submenu': 
                [
                    {
                        'type': 'li',
                        'id': 'login-li',
                        'linkName': 'Login',
                        'linkAddr': '#',
                        'className': 'nav-menu-item to-hide login'
                    },
                    {
                        'type': 'li',
                        'id': 'register-li',
                        'linkName': 'Register',
                        'linkAddr': '#',
                        'className': 'nav-menu-item to-hide login'
                    },
                    {
                        'type': 'li',
                        'linkName': 'Reset',
                        'linkAddr': '#',
                        'className': 'nav-menu-item to-hide login'
                    },
                    {
                        'type': 'li',
                        'linkName': '&#x1f6d2;',
                        'linkAddr': '&copy;',
                        'className': 'nav-menu-item to-hide login'
                    }
                ]
            },
            {
                'type': 'li',
                'linkName': 'Admin',
                'linkAddr': '/admin',
                'className': 'nav-menu-item to-hide admin',
                'submenu': {}
            }
        ],
        regFormHide: 'register-form hide-element',
        logFormHide: 'login-form hide-element',
        contactFormHide: 'hide-element'
      };
      this.handleRegFormClick = this.handleRegFormClick.bind(this);
      this.handleLogFormClick = this.handleLogFormClick.bind(this);
      this.handleContactFormClick = this.handleContactFormClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.checkUserDB = this.checkUserDB.bind(this);
    //   this.listMenuLoop = this.listMenuLoop.bind(this);
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
// start = 'this.state.menuArr';

render() {
        return (
            <header className="header site-header">
            <div className="header nav-menu-flex">
            <nav className="nav-menu">
            {/* console.log('twoReturn: ', twoReturn()) */}
            {/* console.log({holder}) */}
            {/* <CreateTestListPass list = {twoReturn()} /> */}
            <ul>
            <ListMenuLoop menuItems = {this.state.menuArr} />
            </ul>
            </nav>
            <Contact className={this.state.contactFormHide}/>
            <Registration regFormHide={this.state.regFormHide} checkUserDB={this.checkUserDB} />
            <Login logFormHide={this.state.logFormHide} checkUserDB={this.checkUserDB} />
            </div>
            </header>
            )
        }
    }
    function ListMenuLoop(props) {
        let push = [];
        let subHolder = [];
        props.menuItems.forEach(item => {
                switch(item.type) {
                    case 'li':
                        push.push(`<${item.type} className="${item.className}"><a href="${item.linkAddr}">${item.linkName}</a></${item.type}>`)
                    break;
                    case 'ul':
                        let subArr = item.submenu;
                        console.log(subArr)
                        return (<ul className="test">
                        {subArr.forEach(sub => {
                        subHolder.push(`<li>${sub.linkName}<a href="${sub.linkAddr}">${sub.linkName}</a></li>`)
                        })}
                        {push.push(subHolder)}
                        </ul>)
                        break;
                    default:
                        push.push('<li>tester tester tester tester </li>')
                }
            });
            return(push)
    }
export default MenuTestOnly;