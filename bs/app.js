const express = require('express');
const app = express();
const json = express.json(); // for parsing application/json
const port = 3000;

app.use(express.static('public'))
app.use(express.json()); // needed to add express. since has built-in body parser

let user = null;

// routes will be moved to another folder once base-level functionality set up

app.get('/', (req, res) => {
    res.send(console.log(req.params)); // sent message
    res.body.json('success');
    console.log('did not work');
})
app.get('/admin.html', (req, res) => {
    // logic will check if user is logged in && user is in admin group before loading the page
    // otherwise, a message (permission denied) will populate and load home page with bumper stickers
    console.log(req.body);
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
        res.send('did not work.')
    }
})
console.log('outside app.get');

// will need to set page param to auto-generate pages and change the url path on changes


app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...using nodemon`)
})