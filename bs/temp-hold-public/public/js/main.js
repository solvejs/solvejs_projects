;

// connecting users file to this main script
// js file sees array but unable to use: not defined error on calls
/* let script = document.createElement('script');
script.setAttribute('src', 'js/users.js');
let lastEl = document.getElementsByTagName('head')[0];
lastEl.appendChild(script); */

// import './bumpers'; will add later as currently getting syntax error
// import {bumperStickers} from bumpers;
// const users = require('test');
// import test from './users';
// will need to figure out server-side; no client-side js option that i see

// attempting to require db-connect.js >> import './db-connect.js';
/* import { send } from './db-connect.js';
send(); */



// to build items
// move bumper stickers to array then to database calls
// loop for bumper generation
// size selector and auto-change of all or some bumpers on page
// fan manipulation of category selected on page
// automobile bumper "try it out"
// categories to database

let contactUsFormHide = () => {
    let contactHideClicks = document.querySelectorAll('.click-hide-contact-us');
    // let contactUsNav = document.getElementById('contact-form-nav');
    let contactUsForm = document.getElementById('contact-wrapper');
    // let body = document.getElementById('body');
    // let cancelContactForm = document.getElementById('cancel-form-button');
    for(const item of contactHideClicks) {
        item.addEventListener('click', () => contactUsForm.classList.toggle('hide-element'));
    };
    /*     cancelContactForm.addEventListener('click', () => contactUsForm.classList.toggle('hide-element'));
    contactUsNav.addEventListener('click', () => { */
        // e.preventDefault();
        // do i need this? >> e.preventDefault() > seems i don't
        // needed to set if() as could only get this to work by setting style directly on body element
        // document.querySelector('form').setAttribute('class', 'show-element');
        // contactUsFormEl.classList.toggle('hide-element');
        // display grid overriding display: none when set on #contact-wrapper > had to move grid to form > then toggle on wrapper works
        // next: shorten this function > class to form hide button and link
        //contactUsForm.classList.toggle('hide-element');
    }
    // }
    
    contactUsFormHide();
    
    let navHambHide = document.getElementById('hamburger');
    
    // bumper hamburger menu
    /* let windowResizewindowCheck =  */
    window.onresize = hideMenu;
    let navHideArea = document.querySelectorAll('li.to-hide');
    function hideMenu() {
        let body = document.getElementById('body');
        //body.addEventListener('resize', () => {
            navHideArea.forEach(item => {
            // console.log(item, 'beginning of code');
            if(window.innerWidth <= 800) {
                item.classList.add('hamburger-hide');
                // console.log(item, 'added');
            } else {
                item.classList.remove('hamburger-hide');
                // console.log(item, 'removed');
            }
            // console.log(window.innerWidth);
        })
        // temp hide if(navHideArea[0].classList.contains('hamburger-hide')) {
            if(window.innerWidth > 800) {
                // direct styling to ensure this action happens since display flex already on and likely preventing
                navHambHide.setAttribute('style', 'display:none')
        } else {
            navHambHide.removeAttribute('style', 'display:none')
        }
        //})
        /* {
            if(window.innerWidth <= 800) {
                navHideArea.forEach(item => {
                    if(window.innerWidth <= 800) {
                        item.classList.toggle('hamburger-hide');
                    } 
                })
            for(item of navHideArea) {
                //item.classList.toggle('hamburger-hide');
                console.log(item);
            }
            for(let i=0; i<navHideArea.length; i++) {
            }
        } else if(window.innerWidth <= 800) {
            for(let i=0; i<navHideArea.length; i++) {
                navHideArea[i].classList.toggle('hamburger-hide');
            }    
        }
    } */
};
hideMenu();

function menuReveal() {
    // listens hamburger click; responds based on hide status of menu items
    // default: hidden on larger screens > achieve via hideMenu()
    // reveal via same function or >> call this function when hidden and clicked    
    navHambHide.addEventListener('click', () => {
        // next: set toggle to array and add under id hamburger position
        if(navHideArea[0].classList.contains('hamburger-hide')) {
            let navMenu = document.querySelector('nav.nav-menu');
            navMenu.setAttribute('style', 'display: grid');
            navMenu.setAttribute('style', 'grid-template-columns: 1fr');
            navHideArea[0].classList.toggle('hamburger-hide');
            navHideArea[1].classList.toggle('hamburger-hide');
            navHideArea[2].classList.toggle('hamburger-hide');
            navHideArea[3].classList.toggle('hamburger-hide');
            navHideArea[4].classList.toggle('hamburger-hide');
            navHideArea[5].classList.toggle('hamburger-hide');
            // navHideArea[6].classList.toggle('hamburger-hide');
            // causes error because there is no array[6] 
            // will address this when i change this to add loop check
            
        }
    })
}
menuReveal();

let session = null;
if(session === null) {
    session = sessionStorage.setItem('key', 'value');
    console.log('session:', session);
}

// need conditional to generate new page if more than x# of bumpers per screen
// will need a way to remember state
let cookie = document.cookie;
let sessionInfo = window.sessionStorage.__proto__;
let sessionLocal = window.localStorage;
let cache = window.caches;
console.log('cookie: ', cookie);
console.log('sessionStorage: ', sessionInfo);
console.log('localStorage: ', sessionLocal);
console.log('cache: ', cache);
// future class for bumpers connection to database
// color; alt colors; category; text; font; 
// display for various sizes
