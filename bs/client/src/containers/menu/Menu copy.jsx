import React, {Component} from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const menuArr =
        [
            {
                'type': 'li',
                'linkName': 'Home',
                'linkAddr': '/',
                'className': 'nav-menu-ite to-hide',
                'submenu': {}
            },
            {
                'type': 'li',
                'linkName': 'Categories',
                'linkAddr': '/categories',
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
                'linkAddr': '/contact',
                'className': 'nav-menu-ite to-hide',
                'submenu': {}
            },
            {
                'type': 'ul',
                'linkName': '',
                'linkAddr': '/',
                'submenu':
                    [
                        {
                            'type': 'li',
                            'linkName': 'Login',
                            'linkAddr': '/login',
                            'className': 'nav-menu-item to-hide login'
                        },
                        {
                            'type': 'li',
                            'linkName': 'Register',
                            'linkAddr': '/register',
                            'className': 'nav-menu-item to-hide login'
                        },
                        {
                            'type': 'li',
                            'linkName': 'Reset',
                            'linkAddr': '/reset',
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
        ];
        // const two = menuArr.slice(0);
        // const temp = menuArr.slice(0).map((item) => {
        //     let one = `<li><a href=${item.linkAddr}>${item.linkName}</a></li>`;
        //     console.log('menu loop: ', one);
        //     });
        let holder = [];
        const twoReturn = () => {
            (menuArr.slice(0).flatMap( (item) => {
                if(item.submenu.length > 1) {
                    for(let el of item.submenu) {
                        holder.push(`<a href="${el.linkAddr}">${el.linkName}</a>`);
                        return;
                    }
                }
                holder.push(`<a href="${item.linkAddr}">${item.linkName}</a>`);
                return;
            }))
            return holder;
        }
        return (
            <header className="header site-header">
            {console.log('twoReturn: ', twoReturn())}
            {console.log({holder})}
            <CreateTestListPass list = {twoReturn()} />
            </header>
            )
        }
    }
    //<CreateLiItems items = {twoReturn}/>

/* return (
    <div className="header site-header">
    </div>
) */


function CreateTestListPass({list}) {
    return (
        <div>
        <li>{list}</li>
        {document.write('CreateTestListPass: ', `<li>${list}<li>`)}
        </div> 
    )
} 
// class CreateTestListPass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//                 <div>
//                 <li>{list} {this.props.children}</li>
//                 {console.log('CreateTestListPass: ', {})}
//                 </div>
//                 )
//     }
// }

function CreateLiItems() {
        return (
            <div className="header nav-menu-flex">
            <Nav className="nav-menu" />
            </div>
            )
    }

function Nav() {
    return (
        (<ul><LiRendered items = {ulChildLiItems}/></ul>)
    )
}
function LiRendered({items}) {
    return (
            ulChildLiItems.map(((item) => (item)))
    )
}
const ulChildLiItems = [];
let temp = []; // pushed from testFunc for testing > later to menuarr

// (function tempFilter(props) {
//     for(const el of temp) {
//         if(el.submenu.length > 0) {
//             for(const el2 of el.submenu) {
//                 ulChildLiItems.push(`<li key="${el2.linkName}"><a href="${el2.linkAddr}">${el2.linkName}</a></li>`);
//             }
//         } else {
//             ulChildLiItems.push((`<li key="${el.linkName}"><a href="${el.linkAddr}">${el.linkName}</a></li>`));
//         }
//         //ulChildLiItems.push(`<a href="${el.linkAddr}">${el.linkName}</a>`);
//     }
// }
// ) ();

// (function tempFilter() {
//     for(const el of temp) {
//         if(el.submenu.length > 0) {
//             for(const el2 of el.submenu) {
//                 ulChildLiItems.push(`<li key="${el2.linkName}"><a href="${el2.linkAddr}">${el2.linkName}</a></li>`);
//             }   
//         } else {
//             ulChildLiItems.push((`<li key="${el.linkName}"><a href="${el.linkAddr}">${el.linkName}</a></li>`));
//         }
//         //ulChildLiItems.push(`<a href="${el.linkAddr}">${el.linkName}</a>`);
//     }
// }
// ) ();

/* const tempFilterProps = (props) => {
    props.ulChildLiItems.map(
        (value, key) => {
        console.log(<li key = {props.linkName} value = {props}></li>)
    })
} */
console.log('ul after: ', ulChildLiItems);


/* const buildListItems = menuArr.map((val, index) => {
    index = "key"; val = <li className="nav-menu-item to-hide"><a href={menuArr.link}>{menuArr.linkName}</a></li>
}) */
/* ReactDOM.render(
    ulChildLiItems,
    document.getElementById('root')
) */

// let createLiItems = ({liItems}) => {
//     const table = [];
//     for(const [index, value] of liItems.entries()) {
//         table.push(key={index}, value=<li><a href="/">"test"</a></li>)
//     }
//     return createElement;
//         };
// }

/* const Nav = <nav className="header nav-menu-flex"></nav>; */

export default Menu;