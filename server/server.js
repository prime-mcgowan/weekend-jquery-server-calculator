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
function mathOperator(num1, num2) {
    if (operation === 'add')
    num1 + num2
}

//app.post("add", function (req,res)
//let num1 = parseInt(req.body.num1);
//let num2 = parseInt(req.body.num2);
//let result = num1 = num2;
//res.send(????JSON.stringify(
// {ans:ans}));


//route sum

// const num1 = parseInt(request.params.num1);
// const num2 = parseInt(request.params.num2);
// let result = {
//     answer: num1 + num2
// };
// return result;










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

// app.post('/calculations', (req,res) => {
//     //send NEW calculations to the calculations array
//     conosle.log('POST /calculations')
//     calculations.push(req.body);
//     res.sendStatus(201);
// })//end of POST

app.post ('/calculations', (req, res) => {
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const add= n1 + n2
    res.send('the answer is' + add)
})







app.get('/calculations', (req, res) => {
    console.log('GET /calculations')
    res.send(calculations);
})//end of GET












app.listen(PORT, () => {
    console.log('Server is running', PORT);
})