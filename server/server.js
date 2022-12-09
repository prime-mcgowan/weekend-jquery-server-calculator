console.log('in server.js');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// Teach our server how to read incoming data (req.body):
app.use(bodyParser.urlencoded({ extended: true }));

// tell the server what port to run on:
const PORT = 5004;

// tell the server where our "static assets" live:
// what are static assets? HTML/CSS/JS
app.use(express.static('server/public'));













app.listen(PORT, () => {
    console.log('Server is running', PORT);
})