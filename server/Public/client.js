console.log('in client.js');

let operator = "" //has to be a global variable so it 
//can be called on whenever and NOT just tucked into one 
//function

$(document).ready(handleReady);


function handleReady(){
    console.log('in handleReady Function')
    $('.button').on('click', function(){
      operator=$(this).html(); 
    })//this targets ALL my operator buttons
    $('#equalsButton').on('click',equalsButton );
    $('#clearButton').on('click', clearInputs);
    renderCalculations();
}

function equalsButton() {
    addCalculation();
    renderCalculations();
}

function addCalculation(){
//get values from inputs:
let newNumberOne = $('#numberOneInput').val();
let newNumberTwo = $('#numberTwoInput').val();


//make the object we send the server:
let newCalculation = {
    numberOne: newNumberOne, //value of # being put in calculator
    numberTwo: newNumberTwo,
    operator: operator
}

    $('#numberOneInput').val('');
    $('#numberTwoInput').val('');       

//creat POST route
$.ajax({
    url: '/calculations',
    method: 'POST',
    data: newCalculation
}).then((response) => {
    console.log('POST /calculations sent:', response)
})    
}//end of addCalculation function

function clearInputs () {
    $('#numberOneInput').val('');
    $('#numberTwoInput').val('');
}


function renderCalculations () {
    $.ajax({
        url: '/calculations',
        method: 'GET'
    }).then((calculationsResponse) => {
        console.log('server sent us:', calculationsResponse);
        $('#storedProblemsAndAnswers').empty();
      
        for (let calculations of calculationsResponse) {
            $('#results').empty()
            $('#results').append(`${calculations.sum}`)
            $('#storedProblemsAndAnswers').append(`
            <tr>
                <td>${calculations.numberOne} ${calculations.operator} ${calculations.numberTwo} = ${calculations.sum}</td>
            </tr>
            `)
        }
    })
}




