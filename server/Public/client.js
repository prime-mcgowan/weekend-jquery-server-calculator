console.log('in client.js');

let operator = "" //has to be a global variable so it 
//can be called on whenever and NOT just tucked into one 
//of the functions

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
    numberOne: newNumberOne, //first number being put in calculator
    numberTwo: newNumberTwo, //second number being put in calculator
    operator: operator //operator that was clicked
}

    // $('#numberOneInput').val('');
    // $('#numberTwoInput').val('');       

//create POST route - new data has been created that needs to be 
//sent to the server (sends the numbers and what type of math needs to be done)
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
}//input values will be set back to empty

//create GET route - need to be able to receive the new data (get 
//the answer and the newest calculation added to the list of calculations)
function renderCalculations () {
    $.ajax({
        url: '/calculations',
        method: 'GET'
    }).then((calculationsResponse) => {
        console.log('server sent us:', calculationsResponse);
        $('#storedProblemsAndAnswers').empty();
        for (let calculations of calculationsResponse) {
            $('#results').empty()
            $('#results').append(`${calculations.sum}`) //from the 
            //calculations array and I want just the sum/answer to render
            $('#storedProblemsAndAnswers').append(`
            <tr>
                <td>${calculations.numberOne} ${calculations.operator} ${calculations.numberTwo} = ${calculations.sum}</td>
            </tr>
            `)//also from the calculations array and I want the entire math
              //problem to render in my #storedProblemsAndAnswers "table"
        }
    })
}//end of renderCalculations function




