//imports
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

//middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//port config
const port = 3006;
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;