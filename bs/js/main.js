;
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
    let contactUsNav = document.getElementById('contact-form-nav');
    let contactUsForm = document.getElementById('contact-form-div');
    let body = document.getElementById('body');
    contactUsNav.addEventListener('click', () => {
        // do i need this? >> e.preventDefault() > seems i don't
        // needed to set if() as could only get this to work by setting style directly on body element
        //document.getElementsByTagName('form').toggle.classList('hide-element');
        //contactUsForm.classList.toggle('hide-element');
    })
}
contactUsFormHide();