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
    let contactHideClicks = document.querySelectorAll('.click-hide-contact-us');
    // let contactUsNav = document.getElementById('contact-form-nav');
    let contactUsForm = document.getElementById('contact-wrapper');
    // let body = document.getElementById('body');
    // let cancelContactForm = document.getElementById('cancel-form-button');
    for(item of contactHideClicks){
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
        console.log(contactHideClicks);
    }
// }

contactUsFormHide();