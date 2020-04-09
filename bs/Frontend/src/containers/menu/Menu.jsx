import React, {Component} from 'react';

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
                'className': 'login-containter',
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
        ]
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
            <li className={this.state.menuArr[0].className}><a href={this.state.menuArr[0].linkAddr}>{this.state.menuArr[0].linkName}</a></li>
            <li className={this.state.menuArr[1].className}><a href={this.state.menuArr[1].linkAddr}>{this.state.menuArr[1].linkName}</a></li>
            <li className={this.state.menuArr[2].className}><a href={this.state.menuArr[2].linkAddr}>{this.state.menuArr[2].linkName}</a></li>
            <li className={this.state.menuArr[3].className}><a href={this.state.menuArr[3].linkAddr}>{this.state.menuArr[3].linkName}</a></li>
            <ul>
                <li id={this.state.menuArr[4].submenu[0].id} className={this.state.menuArr[4].submenu[0].className}><a href={this.state.menuArr[4].submenu[0].linkAddr}>{this.state.menuArr[4].submenu[0].linkName}</a></li>
                <li id={this.state.menuArr[4].submenu[1].id} className={this.state.menuArr[4].submenu[1].className}><a href={this.state.menuArr[4].submenu[1].linkAddr}>{this.state.menuArr[4].submenu[1].linkName}</a></li>
                <li className={this.state.menuArr[4].submenu[2].className}><a href={this.state.menuArr[4].submenu[2].linkAddr}>{this.state.menuArr[4].submenu[2].linkName}</a></li>
            </ul>
            <li className={this.state.menuArr[5].className}><a href={this.state.menuArr[5].linkAddr}>{this.state.menuArr[5].linkName}</a></li>
            </ul>
            </nav>
            </div>
            </header>
            )
        }
    }
 
export default Menu;