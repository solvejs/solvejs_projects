const express = require('express');
const app = express();
const json = express.json(); // for parsing application/json
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const path = require('path');
const users = require('./db/users');
const authUsers = users.authUsers;
const bumpersRouter = require('./controllers/bumpers_routes');
app.use('/api/bumpers', bumpersRouter);
bumpersRouter.get('/api/bumpers', (req, res) => res.json({'test': 'test'}))
// app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '../Frontend/public')));
/* app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "'default-src' 'self'");
    console.log('has csp header?');
    console.log(res.hasHeader('Content-Security-Policy'))
    next();
}); */

const router = require('./controllers/site_routes');
app.use(router);

// console.log(path.join(__dirname, '../') + 'Frontend/public')
function reactPath(req, res, next) { // middleware created to handle dirname
        res.sendReactPath = function(view) {
            return res.sendFile(path.join(__dirname, '/client/public', view));
    }
    next();
}
// app.use(reactPath); // middleware created
app.use(express.json()); // needed to add express. since has built-in body parser
app.use(express.static(path.join(__dirname, 'client/public')))
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
app.get('/', (err, req, res, next) => {
    if(!err) {
        // res.sendFile(path.join(__dirname, '..Frontend/src   ', 'index.js') );
        console.log('tested before res.send')
        res.send('Express');
        // res.send(console.log(req.params)); // sent message
    } else {
        console.log('homepage did not work');
    }
})
app.post('/', (err, req, res, next) => {
    if(err) console.log('error', err)
    else console.log('no error')
})  

app.post('/api/login', (req, res) => {
    const userIndex = authUsers.findIndex((item) => 
    item.email === req.body.loginEmailInput);
    let userPass = authUsers[userIndex] === undefined ? null 
    : authUsers[userIndex].password;
    if(userIndex != -1 && userPass === req.body.loginPasswordInput ) {
        res.json({
            "in db": req.body.loginEmailInput,
            "isLoggedIn": true,
            "role": authUsers[userIndex].role,
            "logFormHideClasses": 'login-form hide-element'
        })
        // console.log(authUsers[userIndex].password, 'user pass success')
        // res.send('user is in the list')
        // userPass = authUsers[userIndex].password
        } else {
            res.json({
                "in db": req.body.loginEmailInput,
                "isLoggedIn": false,
            })
    }
        //bodyParser.json(res.send(JSON.stringify(req)));
})
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
    console.log(req.params);
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
    console.log('testing profile');
    try {
            res.json([
                {id: 1, user: "frank"},
                {id: 2, user: "mike"}
            ]);
    } catch {
        res.send('did not work.')
    }
})
app.post('/profile', (req, res) => {
    console.log('testing profile');
    try {
            res.json([
                {type: "post", id: 1, user: "EXPRESS"},
                {type: "post", id: 2, user: "RENDERED"},
                {type: "post", id: 3, user: "RESPONSE"}
            ]);
    } catch {
        res.send('did not work.')
    }
})

// will need to set page param to auto-generate pages and change the url path on changes

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...using nodemon if green`)
})