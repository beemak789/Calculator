//Need to get the values printing for every time you're clicking.
//Variables
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const display = document.querySelector(".calculator_display");
const clear = document.querySelector('#clearbutton');


//You want to add an event Listener on the keys, because once clicked, there should
// be functionality.
keys.addEventListener("click", function () {
   const key = event.target;
   const keyValue = key.textContent;
    let displayValue = display.textContent;
    const type = key.dataset.type;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (type === "number") {
        if (display.textContent === "0") {
            display.textContent = keyValue;
        } else if (previousKeyType === "operator") {
            display.textContent = keyValue 
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    //When I press the operators, what functionalities do I want to occur?
    if (type === "operator") {
        const operatorKeys = keys.querySelectorAll('[data-type = "operator"]');
        operatorKeys.forEach((key) => {
            key.dataset.state = " "
        })
        key.dataset.state = "selected";
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    //The equals operand
    if (type === "equal") {
    const firstNumber  = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);

    let result = "";
    if (operator === "plus") {
        result = firstNumber + secondNumber
        display.textContent = result;
    }
    if (operator === "minus") {
        result = firstNumber - secondNumber;
        display.textContent = result;
    }
    if (operator === "multiply") {
        result = firstNumber * secondNumber;
        display.textContent = result;
    }
    if (operator === "divide") {
        result = firstNumber / secondNumber;
        display.textContent = result;
    }
}
    calculator.dataset.previousKeyType = type; //this prints number or operand.
})

clear.addEventListener("click", function () {
    display.innerText = "0"
})

