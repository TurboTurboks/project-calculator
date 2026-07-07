let numberOne = "";
let numberTwo = "";
let operator = "";
let numberSwitch = true;
let result = 0;

const operators = ["+", "-", "*", "/"]


let display = document.querySelector(".display")

buttons = document.querySelectorAll("button")

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
                result = operate(operator, Number(numberOne), Number(numberTwo))
                numberOne = result
                display.textContent = numberOne;
                numberTwo = "";
                operator = button.textContent;
                display.textContent += button.textContent;
            }

        }
        if (button.textContent == "=") {
            result = operate(operator, Number(numberOne), Number(numberTwo))
            display.textContent = result;
        }
        if (button.textContent == "C") {
            clear();
        }
        if (button.textContent == "Del") {
            if (result == display.textContent) return;
            if (Number(display.textContent.at(-1) >= 0 || display.textContent.at(-1) == ".")) {
                if (numberSwitch) numberOne = numberOne.slice(0, -1);
                if (!numberSwitch) numberTwo = numberTwo.slice(0, -1);
                display.textContent = display.textContent.slice(0, -1)
            }
        }
        if (button.textContent == ".") {
            if (numberSwitch) numberOne += button.textContent;
            if (!numberSwitch) numberTwo += button.textContent;
            display.textContent += button.textContent;
        }

    })
})



// da se ne mjenja kad spamam operacione znakove





function clear() {
    numberOne = "";
    numberTwo = "";
    operator = "";
    numberSwitch = true;
    display.textContent = "";
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
            if (numberOne == 0 || numberTwo == 0) return "DONT USE ZERO :("
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


