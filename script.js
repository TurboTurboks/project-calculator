let numberOne = "";
let numberTwo = "";
let operator = "";
let numberSwitch = true;
let result = "";

const operators = ["+", "-", "*", "/"]


let display = document.querySelector(".display")

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {

        if (Number(button.textContent) >= 0) {
            if (result == display.textContent) clear();


            display.textContent += button.textContent;
            if (numberSwitch) numberOne += button.textContent;
            if (!numberSwitch) numberTwo += button.textContent;



        }
        if (operators.includes(button.textContent)) {
            if (operator == "") {
                operator = button.textContent;
                display.textContent += button.textContent;
                numberSwitch = false;
            }
            else {
                if (numberTwo != "") {
                    result = operate(operator, Number(numberOne), Number(numberTwo))
                    numberOne = result
                    display.textContent = numberOne;
                    numberTwo = "";
                    operator = button.textContent;
                    display.textContent += button.textContent;
                }
                else {
                    operator = button.textContent;
                    display.textContent = display.textContent.slice(0, -1)
                    display.textContent += button.textContent;
                }
            }

        }

        if (button.textContent == "=") {
            if (numberTwo != "") {
                result = operate(operator, Number(numberOne), Number(numberTwo))
                numberOne = result;
                numberTwo = "";
                operator = "";
                numberSwitch = true;
                display.textContent = result;
            }
        }
        if (button.textContent == "C") {
            clear();
        }
        if (button.textContent == "Del") {
            if (result == Number(display.textContent)) return;
            if (Number(display.textContent.at(-1)) >= 0 || display.textContent.at(-1) == ".") {
                if (numberSwitch) numberOne = numberOne.slice(0, -1);
                if (!numberSwitch) numberTwo = numberTwo.slice(0, -1);
                display.textContent = display.textContent.slice(0, -1)
            }
            if (operators.includes(display.textContent.at(-1))) {
                operator = "";
                display.textContent = display.textContent.slice(0, -1)
            }
        }
        if (button.textContent == ".") {

            if (numberSwitch && !numberOne.includes(".")) { //numberOne prvi
                console.log(numberOne)
                if (numberOne == "") {
                    numberOne += "0";
                    display.textContent += "0";
                }
                numberOne += button.textContent;
                display.textContent += button.textContent;

            }


            if (!numberSwitch && !numberTwo.includes(".")) { //numberTwo drugi
                if (numberTwo == "") {
                    numberTwo += "0";
                    display.textContent += "0";
                }
                numberTwo += button.textContent;
                display.textContent += button.textContent;
            }


        }
    })
})




function clear() {
    numberOne = "";
    numberTwo = "";
    operator = "";
    numberSwitch = true;
    display.textContent = "";
    result = "";
}

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo)
        case "-":
            return subtract(numberOne, numberTwo)
        case "*":
            return multiply(numberOne, numberTwo)
        case "/":
            if (numberTwo == 0) return "DONT USE ZERO :("
            else return divide(numberOne, numberTwo)
    }
}


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


