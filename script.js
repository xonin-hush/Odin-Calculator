let firstNumber = ""
let operator = undefined
let secondNumber = ""

const numContainer = document.querySelector('.digit-buttons');
const oppContainer=document.querySelector('.function-buttons')

numContainer.addEventListener('click', function (e) {
    if (!operator)
        firstNumber = firstNumber + e.target.innerHTML
    else secondNumber = secondNumber + e.target.innerHTML
});
oppContainer.addEventListener('click', function (e) {
    operator=e.target.innerHTML
});
function addition(a, b) {
    sum = a + b
}
function subtraction(a, b) {
    sub = a - b
}
function division(a, b) {
    product = a / b
}
function multiplication(a, b) {
    product = a * b
}
function operate(firstNum, opp, secondNum) {
    if (opp == "+")
        addition(firstNum, secondNum)
    if (opp == "-")
        subtraction(firstNum, secondNum)
    if (opp == "/")
        division(firstNum, secondNum)
    if (opp == "*")
        multiplication(firstNum, secondNum)

}
function doStuff() {
    console.log("firstNumber " + firstNumber);
    console.log("secondNumber " + secondNumber);
}
setInterval(doStuff, 5000);