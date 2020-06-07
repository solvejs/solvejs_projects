const express = require('express');
const app = express();

const authUsers = [
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

module.exports.authUsers = authUsers;