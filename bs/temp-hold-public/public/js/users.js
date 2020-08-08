/* user template > temp until db integration

{
    'firstName': 'string',
    'email': 'string',
    'password': 'hash1111',
    'favCategories': [] // will push if user views certain # in a category
}

*/

const users = [
    {
        'firstName': 'Mike',
        'email': 'mike@gmail.com',
        'password': 'hash1111',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Jeff',
        'email': 'jeff@gmail.com',
        'password': 'hash1111',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Cliff',
        'email': 'cliff@gmail.com',
        'password': 'hash1111',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Stil',
        'email': 'stil@gmail.com',
        'password': 'hash1111',
        'favCategories': [] // will push if user views certain # in a category
    },
    
]


function holdAll() {
    // quick flash for console.log > not sure why > still not scripting correctly for pw check, etc.
    // passwords seem to show correctly via alerts
    // sees password via checks
    const userEmail = document.querySelector('#login-email-input');
    const submitlogin = document.querySelector('#login-button');
    const password = document.querySelector('#login-password-input');
    
    console.log('nodevalue login-test: ', (document.querySelector('#login-password-input').value));
    console.log('user email: ', userEmail.value);
// had to add .value for new info to be populated on submission
// otherwise old info is stored and works even if user input changed
submitlogin.addEventListener('click', () => {
    if(password.value === '') {
        alert('password can not be empty. please enter password')
    } else {
        passwordInputCheck(dbCheckUserPass);
    }
});

function passwordInputCheck(callback) { // adding callback to get next function
    if(password.value === '') { // redundant
        alert('start 1 > pw', 'passwords can not be empty. please re-enter')
    } else {
        callback();
    }
}

// need to set post data for user / pass; also need to set hash for passwords with salt
// need to determine reason .value not working if placed inside this function and removed from password / password2 above
function dbCheckUserPass() {
    // let password = document.getElementById('login-password-input').value;
        // next > set loop through database to check user
        for(user of users) {
            if((user.email === userEmail.value) && (user.password === password.value)) {
                return alert('you are logged in');
                // usersLoggedIn();
            } 
        }
        // had to place right outside to not get multiple alerts
        alert('username and/or password incorrect. please try again')               
        /*        alert('start 2')
        if(users[2].email === (userEmail)) {
            document.write('dbcheck > if', 'please select "login" and enter your email and password', userEmail);
        } else if(users.includes(userEmail.value && users.password)) {
            console.log('dbcheck > else if', 'logged in');
        } else {
            console.log('dbcheck > else > did not find user', 'something is not right. try again.');
        } */
    }
}
holdAll();

const usersLoggedIn = function(users) {
    for(user of users) {
        // need to add login form to check against for login status
    }
}

// next: how to determine if user is logged in
let loginEls = document.querySelectorAll('.login');
for(login of loginEls) {
    if(usersLoggedIn === true) {
        
    }
}

// show registration / login forms via click to menu item
const registerNavLink = document.getElementById('register-li');
registerNavLink.addEventListener('click', (event) => {
    /* event.stopPropagation();  */// to stop event bubbling back to li item > was not needed after setting grid area for element
    registerNavLink.classList.toggle('focus-menu-item');
    document.getElementById('register-wrapper').classList.toggle('hide-element');
})
const loginNavLink = document.getElementById('login-li');
loginNavLink.addEventListener('click', (event) => {
    /* event.stopPropagation();  */// to stop event bubbling back to li item > was not needed after setting grid area for element
    loginNavLink.classList.toggle('focus-menu-item');
    document.getElementById('login-wrapper').classList.toggle('hide-element');
})

const passwordReg = document.querySelector('#register-password-input');
const passwordReg2 = document.querySelector('#register-password-input-re-enter');
const userEmailReg = document.querySelector('#register-email-input');
const submitRegister = document.querySelector('#register-button');
submitRegister.addEventListener('click', () => {
    registration();
    // had to place function inside arrow > was not working otherwise
})

function registration() {
    
    // register items > push to db
    
    // redundant above > need to dry
    /* function passwordInputCheck() { // adding callback to get next function
        if(passwordReg.value === '') { // redundant
            alert('start 1 > pw', 'passwords can not be empty. please re-enter')
        } else {
            dbCheckUserPass();
        }
    }
    function dbCheckUserPass() { // redundant
        // let password = document.getElementById('login-password-input').value;
        // next > set loop through database to check user
        for(user of users) {
            if((user.email === userEmail.value) && (user.password === passwordReg.value)) {
                return alert('you are logged in');
                // usersLoggedIn();
            } 
        } */
        
        
        /* console.log('infopw1', passwordReg.value)
        console.log('user reg email: ', userEmailReg.value); */
        if((passwordReg.value === '' || passwordReg2.value === '') || userEmailReg.value === '') {
        alert('password and email required')
    } else if(passwordReg.value !== passwordReg2.value) {
        alert('passwords do not match. try again.')
    } else {
        checkUserExist();
    }
    // if user doesn't exist first 
    function checkUserExist() {
                for(user of users) {
                    if(user.email === userEmailReg.value) {
                        return alert(user.firstName)
                        // 'unable to create account. do you need to reset your password?'
                    } continue;
        }
    }                
}