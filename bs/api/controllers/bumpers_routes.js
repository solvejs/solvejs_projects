const bumpersRouter = require('express').Router();
const bumpers = require('../db/bumpers');

bumpersRouter.all('/', (req, res, next) => {
    let i=0;
    let locStore = req.headers.localstore;
    console.log(locStore, 'let locstore', typeof locStore)
<<<<<<< HEAD
    for(let bumper of bumpers) {
=======
    for(bumper of bumpers) {
>>>>>>> f35abca94f491dbd8ac33a502e06819854ede0e6
        bumper.id = i;
        if(req.headers.localStore) {
            bumper.inCart = true;
        } else {
            bumper.inCart = false;
        }
        i++;
    }
    console.log(req.headers.localstore.cartItemLocal, 'storloc')
    next()
})
bumpersRouter.get('/', (req, res) => {
    // res.set('Content-Type', 'application/json')
    console.log('get: stringify');
    console.log(bumpers[5], 'bumers -0')
    res.send(bumpers);
});
bumpersRouter.post('/', (req, res) => {
    // res.set('Content-Type', 'application/json')
    console.log('post: json')
    res.json(bumpers);
})

module.exports = bumpersRouter;