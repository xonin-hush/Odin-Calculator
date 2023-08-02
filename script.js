let firstNumber = ""
let operator = undefined
let secondNumber = ""
let finalValue = undefined
const numContainer = document.querySelector('.digit-buttons');
const oppContainer = document.querySelector('.operator-buttons')
const equal = document.querySelector('#equal')
handleNumbers()
handleOperators()
handleEqual()
function handleNumbers() {
    numContainer.addEventListener('click', function (e) {
        if ((!operator)) {
            firstNumber = firstNumber + e.target.innerHTML
            firstNumber = parseInt(firstNumber)
        }
        else {
            secondNumber = secondNumber + e.target.innerHTML
            secondNumber = parseInt(secondNumber)
        }
    });
}
function handleOperators(){
oppContainer.addEventListener('click', function (e) {
    if ((!operator) && (firstNumber !== "")) {
        operator = e.target.innerHTML
    }
    if ((firstNumber !== "") && (secondNumber !== "") && (operator !== undefined)) {
        operate(firstNumber, operator, secondNumber)
        operator = e.target.innerHTML
    }
});}
function handleEqual(){
equal.addEventListener('click', () => {
    if ((firstNumber !== "") && (secondNumber !== "")) {
        operate(firstNumber, operator, secondNumber)
        operator = undefined;
    }
});}

function addition(a, b) {
    return sum = a + b;
}
function subtraction(a, b) {
    return sub = a - b;
}
function division(a, b) {
    if (b === 0)
        alert("bruh")
    else {
        return product = a / b;
    }

}
function multiplication(a, b) {
    return product = a * b;
}
function operate(firstNum, opp, secondNum) {
    if (opp === "+") {
        finalValue = (addition(firstNum, secondNum))
        firstNumber = finalValue
        secondNumber = ""

    }
    if (opp === "-") {
        finalValue = subtraction(firstNum, secondNum)
        firstNumber = finalValue
        secondNumber = ""

    }
    if (opp === "/") {
        finalValue = division(firstNum, secondNum)
        firstNumber = finalValue
        secondNumber = ""
    }
    if (opp === "*") {
        finalValue = multiplication(firstNum, secondNum)
        firstNumber = finalValue
        secondNumber = ""

    }
}
function reset() {
    firstNumber = ""
    operator = undefined
    secondNumber = ""
    finalValue = undefined
}
function doStuff() {
    console.log("firstNumber " + firstNumber);
    console.log("secondNumber " + secondNumber);
    console.log("finalValue " + finalValue);
    console.log("operator " + operator);
}
setInterval(doStuff, 3000);