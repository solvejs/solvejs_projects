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
    let userEmail = document.querySelector('#login-email-input').value;
    let submitLogin = document.querySelector('#login-button');
    let password = document.querySelector('#login-password-input');
    let password2 = document.querySelector('#login-password-input-re-enter');
        document.write('nodevalue login-test: ', document.querySelector('#login-password-input').value + '...');
        document.write('user email: ', userEmail.value);
    submitLogin.addEventListener('click', () => {
        if(password.value === '' || password2.value === '') {
            alert('please enter password in both fields')
        } else {
            passwordInputCheck(dbCheckUserPass);
        }
    });
    
    function passwordInputCheck(callback) { // adding callback to get next function
        if((password.value !== password2.value ) && (password !== '' && password2 !== '')) {
        alert('start 1 > pw', 'passwords do not match. please re-enter')
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
            if((user.email === userEmail) && (user.password === password.value)) {
                alert('you are logged in')
                // usersLoggedIn();
            } else {
                // prompt to log in
            }
        }
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
        // need to add login form to check against for login
    }
}
// next: how to determine if user is logged in
let loginEls = document.querySelectorAll('.login');
for(login of loginEls) {
    if(usersLoggedIn === true) {

    }
}