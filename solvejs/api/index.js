const express = require('express');
const { env } = require('process');
const app = express();
const port = process.env.port || 3030;

app.listen(port, console.log(`listening on port ${port}`))