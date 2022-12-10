console.log('in client.js');

$(document).ready(handleReady);

function handleReady(){
    console.log('in handleReady Function')
    $('#equalsButton').on('click', addCalculation);
    renderCalculations();
}

function renderCalculations () {
    $.ajax({
        url: '/calculations',
        method: 'GET'
    }).then((calculationsResponse) => {
        console.log('server sent us:', calculationsResponse);
        $('#storedProblemsAndAnswers').empty();
        for (let calculations of calculationsResponse) {
            $('#storedProblemsAndAnswers').append(`
                ${calculations.num1}
               
                ${calculations.operator}
                ${calculations.num2}
                <p>=</p>
                ${calculations.result}
            `)
        }
    })
}











function addCalculation(){
//get values from inputs:
let newNumOne = $('#numberOneInput').val();
let newNumTwo = $('#numberTwoInput').val();
//??? operator
let newResult = $('#result').val();


//make the object we send the server:
let newCalculation = {
    num1: newNumOne,
    num2: newNumTwo,
    //operator: newOperator,
    result: newResult
}

//creat POST route
$.ajax({
    url: '/calculations',
    method: 'POST',
    data: newCalculation
}).then((response) => {
    console.log('POST /calculations sent:', response)
})
}//end of addCalculation function