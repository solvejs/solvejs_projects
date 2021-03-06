import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Contact from '../Contact';
import {users} from '../users/users';

export class Menu extends Component {
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
                'linkName': 'About',
                'linkAddr': '/about',
                'className': 'nav-menu-item to-hide',
                'submenu': {}
            },
            {
                'type': 'li',
                'linkName': 'Contact',
                'linkAddr': '/',
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
                        'linkName': (<span style={{fontSize: '200%', backgroundColor: ''}}>&#128722;</span>),
                        'linkAddr': '/cart',
                        'className': 'nav-menu-item to-hide login cart'
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
        contactFormHide: 'hide-element',
        forLocalStorUpdate: JSON.parse(localStorage.getItem('inCartLocStoreCount'))
      };
      this.handleRegFormClick = this.handleRegFormClick.bind(this);
      this.handleLogFormClick = this.handleLogFormClick.bind(this);
      this.handleContactFormClick = this.handleContactFormClick.bind(this);
      this.handleCartStorChange = this.handleCartStorChange.bind(this);
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
  triggerCartUpdateInt = setInterval(() =>
    this.handleCartStorChange(), 3000);
  handleCartStorChange() {
    this.setState({
      forLocalStorUpdate: JSON.parse(localStorage.getItem('inCartLocStoreCount'))
    });
      let cartIcon = document.querySelector('li.cart');
          let currStateTotal;
          currStateTotal = this.state.forLocalStorUpdate;
          let nodeSpan = document.createElement('span');
          cartIcon.appendChild(nodeSpan)
          nodeSpan.textContent = '';
          cartIcon.childNodes[1].textContent = currStateTotal;
          if(cartIcon.children.length > 2) {
              cartIcon.removeChild(cartIcon.childNodes[2])
          }
  }
  // componentDidMount() { // not needed with trigger setinterval above
  //   let cartIcon = document.querySelector('li.cart');
  //       let currStateTotal;
  //       currStateTotal = this.state.forLocalStorUpdate;
  //       let nodeSpan = document.createElement('span');
  //       cartIcon.appendChild(nodeSpan)
  //       nodeSpan.textContent = '';
  //       cartIcon.childNodes[1].textContent = currStateTotal;
  //       if(cartIcon.children.length > 2) {
  //           cartIcon.removeChild(cartIcon.childNodes[2])
  //       }
  // }
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
            <li className={this.state.menuArr[0].className}><Link to={this.state.menuArr[0].linkAddr}>{this.state.menuArr[0].linkName}</Link></li>
            <li className={this.state.menuArr[1].className}><Link to={this.state.menuArr[1].linkAddr}>{this.state.menuArr[1].linkName}</Link></li>
            <li className={this.state.menuArr[2].className} onClick={this.handleContactFormClick}><Link to={this.state.menuArr[2].linkAddr}>{this.state.menuArr[2].linkName}</Link></li>
            <ul>
                <li className={this.state.menuArr[3].submenu[0].className}><Link to={this.state.menuArr[3].submenu[0].linkAddr}>{this.state.menuArr[3].submenu[0].linkName}</Link></li>
            </ul>
            <li className={this.state.menuArr[4].className}><Link to={this.state.menuArr[4].linkAddr} onChange={this.handleCartStorChange}>{this.state.menuArr[4].linkName}</Link></li>
            </ul>
            </nav>
            <Contact className={this.state.contactFormHide}/>
            </div>
            </header>
            )
        }
    }
 
export default Menu;