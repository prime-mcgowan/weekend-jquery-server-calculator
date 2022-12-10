console.log('in server.js');

let calculation = [];

let calculations = [
    //Dummy Data
    // {
    //     numberOne: 4,
    //     operator: '+',
    //     numberTwo: 5,
    //     sum:9
    // },
    // {
    //     numberOne: 1,
    //     operator: '+',
    //     numberTwo: 3,
    //     sum:4
    // }

]

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


// START OF POST ROUTE
app.post ('/calculations', (req, res) => {
let numberOne = req.body.numberOne
let numberTwo = req.body.numberTwo
let operator = req.body.operator
let sum = 0


//I came across the switch operator on the following site: https://www.programiz.com/javascript/examples/simple-calculator
//Henri helped walk me through how to use it
//I got it working for addition first...then added the other operators
//On line 95 and below are other ways I had tried/collected to try and 
//handle the operators...this one just looks so nice
switch (operator) {
    case "+":
        sum = Number(numberOne) + Number(numberTwo)
    break;
    case "-":
        sum = Number(numberOne) - Number(numberTwo)
    break;
    case "x":
        sum = Number(numberOne) * Number(numberTwo)
    break;
    case "/":
        sum = Number(numberOne) / Number(numberTwo)
}//end switch operator

calculation = {
numberOne: numberOne,
numberTwo: numberTwo,
operator:operator,
sum: sum
}//calculated the newest inputs (numbers and operators)

calculations.push(calculation);//newest calculation gets pushed to my calculations array 
})//  END OF POST ROUTE


// START OF GET ROUTE
app.get('/calculations', (req, res) => {
    console.log('GET /calculations')
    res.send(calculations);
})//END OF GET ROUTE


app.listen(PORT, () => {
    console.log('Server is running', PORT);
})






// / app.post ('/calculations', (req, res) => {
    //     const n1=Number(req.body.num1)
    //     const n2=Number(req.body.num2)
    //     const add = n1 + n2
    //     //calculations.push(req.body);
    //     //res.sendStatus(201);
    //    res.send('the answer is' + add)
    // })
    

//math operations
// function mathOperator(num1, num2) {
//     if (operation === 'add')
//     num1 + num2
// }


// app.post('/calculations', (req,res) => {
//     //send NEW calculations to the calculations array
//     conosle.log('POST /calculations')
//     calculations.push(req.body);
//     res.sendStatus(201);
// })//end of POST

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
