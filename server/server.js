console.log('in server.js');

let calculations = [
    {
        num1: 4,
        operator: '+',
        num2: 5,
        result:9
    }
]

//math operations
function mathOperator(num1, num2)










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

app.post('/calculations', (req,res) => {
    //send NEW calculations to the calculations array
    conosle.log('POST /calculations')
    calculations.push(req.body);
    res.sendStatus(201);
})//end of POST

app.get('/calculations', (req, res) => {
    console.log('GET /calculations')
    res.send(calculations);
})//end of GET












app.listen(PORT, () => {
    console.log('Server is running', PORT);
})