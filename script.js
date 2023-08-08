let firstNumber = ""
let operator = undefined
let secondNumber = ""
let finalValue = undefined
const numContainer = document.querySelector('.digit-buttons');
const oppContainer = document.querySelector('.operator-buttons')
const equal = document.querySelector('#equal')
const body = document.querySelector('body')
const display = document.querySelector('.display')
const button = document.querySelector('.button')
const operatorNodeList = document.querySelectorAll('.operator-buttons')
handleNumbers()
handleOperators()
handleEqual()
handleDisplay()
// displayCurrentOperator()
function handleDisplay() {
    body.addEventListener('click', () => {
        if ((operator === undefined) && (secondNumber === "") && (finalValue === undefined)) {
            display.innerHTML = firstNumber
        }
        if ((operator !== undefined) && (firstNumber !== "") && (secondNumber !== "")) {
            display.innerHTML = secondNumber
        }
        if ((display.innerHTML !== undefined) && (display.innerHTML !== "")) {
            display.style.paddingTop = `20px`
        }
        if ((operator !== undefined) && (firstNumber == finalValue) && (secondNumber === "") && (firstNumber !== ""))
            display.innerHTML = firstNumber
    })
}
// function displayCurrentOperator() {
//     bruh=operatorNodeList[1]
//     oppContainer.addEventListener('click', ()=> {
//         bruh.style.backgroundColor='white'

//         console.log(bruh)
//         if (operator === "+") {

//         }
//         if (operator === "-") {

//         }
//         if (operator === "*") {

//         }
//         if (operator === "/") {

//         }
//     });
// }
function handleNumbers() {
    
    numContainer.addEventListener('click', function (e) {
        let checkButtons=e.target.innerHTML
        console.log(checkButtons)
        if (checkButtons.includes("button"))
            return;
        if (e.target.innerHTML === ".")
            return;
        if ((!operator)) {
            firstNumber = firstNumber + e.target.innerHTML
        }
        else {
            secondNumber = secondNumber + e.target.innerHTML
        }
    });
}

function addDot(dot) {

    if ((!operator)) {
        if (firstNumber.includes('.'))
            return;
        if (firstNumber === "")
            firstNumber = "0" + dot
        else
            firstNumber = firstNumber + dot
    }
    else {
        if (secondNumber.includes('.'))
            return;
        if (secondNumber === "")
            secondNumber = "0" + dot
        else
            secondNumber = secondNumber + dot
    }
}

function handleOperators() {
    oppContainer.addEventListener('click', function (e) {
        if ((!operator) && (firstNumber !== "")) {
            operator = e.target.innerHTML
            console.log(e.target.innerHTML)
        }
        if ((firstNumber !== "") && (secondNumber !== "") && (operator !== undefined)) {
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)
            operate(firstNumber, operator, secondNumber)
            operator = e.target.innerHTML
        }
    });
}
function handleEqual() {
    equal.addEventListener('click', () => {
        if ((firstNumber !== "") && (secondNumber !== "")) {
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)
            operate(firstNumber, operator, secondNumber)
            operator = undefined;
            display.innerHTML = finalValue

        }
    });
}

function addition(a, b) {
    return sum = a + b;
}
function subtraction(a, b) {
    return sub = a - b;
}
function division(a, b) {
    if (b === 0) {
        alert("Can not divide by zero, YET.")
        return firstNumber;
    }
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
        firstNumber = finalValue.toString()
        secondNumber = ""

    }
    if (opp === "-") {
        finalValue = subtraction(firstNum, secondNum)
        firstNumber = finalValue.toString()
        secondNumber = ""

    }
    if (opp === "/") {
        finalValue = division(firstNum, secondNum)
        firstNumber = finalValue.toString()
        secondNumber = ""
    }
    if (opp === "*") {
        finalValue = multiplication(firstNum, secondNum)
        firstNumber = finalValue.toString()
        secondNumber = ""

    }
}
function reset() {
    firstNumber = ""
    operator = undefined
    secondNumber = ""
    finalValue = undefined
    display.innerHTML = ""
    display.style.paddingTop = `68px`
}
// function doStuff() {
//     console.log("firstNumber " + firstNumber);
//     console.log("secondNumber " + secondNumber);
//     console.log("finalValue " + finalValue);
//     console.log("operator " + operator);
// }
// setInterval(doStuff, 3000)