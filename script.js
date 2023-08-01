let firstNumber = ""
let operator = undefined
let secondNumber = ""
let finalValue = undefined
const numContainer = document.querySelector('.digit-buttons');
const oppContainer = document.querySelector('.operator-buttons')
const equal = document.querySelector('#equal')
numContainer.addEventListener('click', function (e) {
    if (!operator) {
        firstNumber = firstNumber + e.target.innerHTML
        firstNumber = parseInt(firstNumber)
    }
    else {
        secondNumber = secondNumber + e.target.innerHTML
        secondNumber = parseInt(secondNumber)
    }
});
oppContainer.addEventListener('click', function (e) {
    operator = e.target.innerHTML
});

equal.addEventListener('click', () => {
    if ((firstNumber && secondNumber) != (""))

        operate(firstNumber, operator, secondNumber)
});
function addition(a, b) {
    return sum = a + b
}
function subtraction(a, b) {
    return sub = a - b
}
function division(a, b) {
    return product = a / b
}
function multiplication(a, b) {
    return product = a * b
}
function operate(firstNum, opp, secondNum) {
    if (opp == "+")
        finalValue=(addition(firstNum, secondNum))
    if (opp == "-")
        finalValue = subtraction(firstNum, secondNum)
    if (opp == "/")
        finalValue = division(firstNum, secondNum)
    if (opp == "*")
        finalValue = multiplication(firstNum, secondNum)

}
function doStuff() {
    console.log("firstNumber " + firstNumber );
    console.log("secondNumber " + secondNumber);
    console.log("finalValue " + finalValue)
}
setInterval(doStuff, 5000);