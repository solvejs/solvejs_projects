const express = require('express');
const app = express();
const json = express.json(); // for parsing application/json
const port = process.env.PORT || 8080;
const path = require('path');

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
            return res.sendFile(path.join(__dirname, '../Frontend/public', view));
    }
    next();
}
app.use(reactPath); // middleware created
app.use(express.json()); // needed to add express. since has built-in body parser

let user = null;

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
        console.log(err)
        console.log('homepage did not work');
    }
})

app.get('/admin.html', (req, res) => {  
    // logic will check if user is logged in && user is in admin group before loading the page
    // otherwise, a message (permission denied) will populate and load home page with bumper stickers
    console.log(req.params);
    res.send('test /admin.html page')
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
    try {
        console.log(req.body.id, res.body.id);
    } catch {
        res.sendf('did not work.')
    }
})

// will need to set page param to auto-generate pages and change the url path on changes


app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...using nodemon`)
})