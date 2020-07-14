const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authUsers1 = [
    {
        'firstName': 'Mike',
        'email': 'mike@gmail.com',
        'password': 'jajajaja',
        'role': 'admin',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Jeff',
        'email': 'jeff@gmail.com',
        'password': 'jajajaja',
        'role': 'user',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Cliff',
        'email': 'cliff@gmail.com',
        'password': 'jajajaja',
        'role': 'user',
        'favCategories': [] // will push if user views certain # in a category
    },
    {
        'firstName': 'Stil',
        'email': 'stil@gmail.com',
        'password': 'jajajaja',
        'role': 'user',
        'favCategories': [] // will push if user views certain # in a category
    },
    
]

let authUsers = [];
authUsers1.forEach(item => {
    item.password = bcrypt.hashSync(item.password, saltRounds) 
authUsers.push(item)
})

module.exports= {
    authUsers, authUsers1
}