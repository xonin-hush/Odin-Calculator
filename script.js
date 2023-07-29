let firstNumber = undefined
let operator = undefined
let secondNumber = undefined



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