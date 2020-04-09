const { Pool, Client } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'bumpers',
    user: 'jsjames',
    password: 'df5HGSC3W',
})
/* const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'bumpers',
    user: 'jsjames',
    password: 'df5HGSC3W',
}) */
// asynchronous

// using pool instead of client
/* client.connect(() => {
    console.log('client database: ', client.database)
    // console.log('client database: ', client.database)
    client.end();
}); */
