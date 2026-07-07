let numberOne = 0;
let numberTwo = 0;
let operator = "+"; 



function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo)
        case "-":
            return subtract(numberOne, numberTwo)
        case "*":
            return multiply(numberOne, numberTwo)
        case "/":
            return divide(numberOne, numberTwo)
    }
}


function add (a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b) {
    return a / b
}