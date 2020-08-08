// const https = require('https');
// const path = require('path');
const path = require('path');
const fs = require('fs');
const React = require('react');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
// const App  = require('../src/App');
const app = express();
// app.use(https);
const json = express.json(); // for parsing application/json
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const users = require('./db/users');
const cookieParser = require('cookie-parser');
const authUsers = users.authUsers;
const authUsers1 = users.authUsers1;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bumpersRouter = require('./controllers/bumpers_routes');
// const htmlFile = fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//     if(err) {
//         console.error('something is not right');
//         res.send('something is very wrong')
//     } else {
//         return htmlFile
//     }
// });
// app.use('^/$', (req, res, next) => {
//     fs.readFile(path.resolve('./build/index.html', 'utf8', (err, data) => {
//         if(err) {
//             console.log(err);
//             return res.status(500).send('error occurred')
//         }
//         return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString('<App />')}</div>`))
//     }))
// })
app.use('/api/bumpers', bumpersRouter);
// changed to /bumpers/ for api 
// and 'api/' for react side to work on subdirectory
// at web host
// need to find a better solution for automation

app.use(cookieParser('bsAPISecr777'));
// bumpersRouter.get('/api/bumpers', (req, res) => res.json({'test': 'test'}))
// app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '../Frontend/public')));
/* app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "'default-src' 'self'");
    console.log('has csp header?');
    console.log(res.hasHeader('Content-Security-Policy'))
    next();
}); */

const router = require('./controllers/site_routes');
const { basename } = require('path');
const { JSONCookies } = require('cookie-parser');
const { url } = require('inspector');
const { strict } = require('assert');
app.use(router);
// console.log(path.join(__dirname, '../') + 'Frontend/public')
function reactPath(req, res, next) { // middleware created to handle dirname
res.sendReactPath = function(view) {
    return res.sendFile(path.join(__dirname, 'build', view));
    }
    next();
}
// app.use(reactPath); // middleware created
app.use(express.json()); // needed to add express. since has built-in body parser
app.use(express.static(path.join(__dirname, 'build')))
let user = null;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes will be moved to another folder once base-level functionality set up

/* app.get('*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
    res.end();
}) */
/* app.get('/dd', (req, res) => {
        // res.send(res.body);
        res.sendFile('tester.html')
        // res.sendFile(path.join(__dirname, '../Frontend/public', 'tester.html'));
    }) */
// app.get('/', (err, req, res, next) => {
//     if(!err) {
//         // res.sendFile(path.join(__dirname, '..Frontend/src   ', 'index.js') );
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//         // res.send(console.log(req.params)); // sent message
//     } else {
//         console.log('homepage did not work');
//     }
// })

// app.get('/b*s', (req, res, next) => {
//     const App = require('../src/App');
//     const app = ReactDOMServer.renderToString(<App />);
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if(err) {
//             console.error('something went wrong', err);
//             return res.status(500).send('oops...did not work');
//         }
//         return res.send(
//             data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//         );
//     });
// });
// app.post('/', (err, req, res, next) => {
//     if(err) console.log('error', err)
//     else console.log('no error')
// })  

app.post('/api/login', (req, res, next) => {
    const userIndex = authUsers.findIndex((item) => 
    item.email === req.body.loginEmailInput);
    let userPass = authUsers[userIndex] === undefined ? null 
    : authUsers[userIndex].password;
    if(userIndex != -1 && bcrypt.compareSync(req.body.loginPasswordInput, userPass) ) {
        return res.json({
            "in db": req.body.loginEmailInput,
            "isLoggedIn": true,
            "role": authUsers[userIndex].role,
            "logFormHideClasses": 'login-form hide-element',
        })
        // console.log(authUsers[userIndex].password, 'user pass success')
        // res.send('user is in the list')
        // userPass = authUsers[userIndex].password
        } else {
            res.json({
                "in db": req.body.loginEmailInput,
                "isLoggedIn": false,
            })
            // console.log(authUsers1, 'auth1....')
    }
        //bodyParser.json(res.send(JSON.stringify(req)));
})
app.post('/api/cookie-login', (req, res) => {
    // res.send('testing cookie...');
    // let logStatus = JSON.parse(req.body);
    if(req.body.loggedIn) {
        // console.log(req.body.loggedIn, 'req.status...')
        // res.send('received').end()
        res.header({
            'Content-Type': 'text/html',
        })
        // required '' for domain in local environment
        res.cookie('bsLoggedIn', true, {maxAge: 86400000, domain: app.settings.env === 'development' ? '' : 'bumpers.solvejs.com', secure: false, path: '/', httpOnly: false, signed: false}).status(200).send('cookie is sent');
    } else if(!req.param.status) {
        res.send('req param not present')
        // res.cookie('bsLoggedIn', false, {maxAge: 30, path: '/'}).send('cookie is sent')
    } else {
        //
    }
})
app.post('/api/cookie-logout', (req, res) => {
    res.cookie('bsLoggedIn', false, {expires: new Date(0), domain: app.settings.env === 'development' ? '' : 'bumpers.solvejs.com', secure: false, path: '/', httpOnly: false, signed: false}).status(200).send('cookie is cleared');
    // res.clearCookie('bsLoggedIn').send('cookie cleared')
})
app.post('/api/order', (req, res) => {
    try {
            res.status(200)
                .send('Order has been completed')
            } catch {
        throw new Error('something went wrong')
    }
}
)
app.post('/api/logout', (req, res) => {
    const userIndex = authUsers.findIndex((item) => 
    item.email === req.body.loginEmailInput);
    res.json({
            "in db": req.body.loginEmailInput,
            "isLoggedIn": false
        })
        // console.log(authUsers[userIndex].password, 'user pass success')
        // res.send('user is in the list')
        // userPass = authUsers[userIndex].password
    }
        //bodyParser.json(res.send(JSON.stringify(req)));
)
app.post('/dashboard', (err, req, res, next) => {
    if(!err) {
        res.send('res')
    }
        
})
app.get('/dashboard', (err, req, res, next) => {
    if(!err) {
        res.send('res')
    }
        
})
app.get('/admin.html', (req, res) => {  
    // logic will check if user is logged in && user is in admin group before loading the page
    // otherwise, a message (permission denied) will populate and load home page with bumper stickers
    // console.log(req.params);
    res.send('seeing page >>> /admin.html page')
    try {
        if(req.body.user === 'test') {
        // if(user != null) {
            res.send('worked. welcome.') // temp dummy code until complete
        }
    } catch {
        res.send('did not work')
        res.error(); // not working yet
//         ('You do not have permission to view this page')
    }
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.post('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// will need to set page param to auto-generate pages and change the url path on changes

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})
app.listen(port, (req, res) => {
    console.log('listening...')
    // console.log(`listening on port ${port}...using nodemon if green`);
    // console.log(app.settings.env, 'settings')
})