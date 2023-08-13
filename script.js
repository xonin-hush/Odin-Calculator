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
const operatorNodeList = document.querySelectorAll('.operator-buttons .button')
let pressedKey = null
window.addEventListener("keydown", (e) =>
  e.key === "/" ? e.preventDefault() : null
);

handleNumbers()
handleOperators()
handleEqual()
handleDisplay()
handleKeyboard()()
function handleDisplay() {
    // body.addEventListener('click', () => {
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
    displayCurrentOperator()
    // })
}
function displayCurrentOperator() {
    // oppContainer.addEventListener('click', () => {
    resetOperatorColor()
    if (operator === "+") {
        operatorNodeList[0].style.borderColor = 'white'
    }
    if (operator === "-") {
        operatorNodeList[1].style.borderColor = 'white'
    }
    if (operator === "*") {
        operatorNodeList[2].style.borderColor = 'white'
    }
    if (operator === "/") {
        operatorNodeList[3].style.borderColor = 'white'
    }
    if (operator === undefined) {
        return;
    }
    // });
}
function handleNumbers() {

    numContainer.addEventListener('click', function (e) {
        let checkButtons = e.target.innerHTML
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
        handleDisplay()
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
    handleDisplay()
}

function handleOperators() {
    oppContainer.addEventListener('click', function (e) {
        e = e.target.innerHTML
        operatorLogic(e)
        handleDisplay()
    });

}
function operatorLogic(e) {
    if ((!operator) && (firstNumber !== "")) {
        operator = e
    }
    if ((firstNumber !== "") && (secondNumber !== "") && (operator !== undefined)) {
        firstNumber = Number(firstNumber)
        secondNumber = Number(secondNumber)
        operate(firstNumber, operator, secondNumber)
        operator = e
    }
}
function handleEqual() {
    window.addEventListener('keyup', function (e) {
        let pressedButton = null
        pressedButton = document.querySelector(`button[data-key="${e.key}"]`)
        pressedButton = pressedButton.textContent
        console.log(pressedButton)
        if (pressedButton === "=")
            equalLogic()
    });


    function equalLogic() {
        if ((firstNumber !== "") && (secondNumber !== "")) {
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)
            operate(firstNumber, operator, secondNumber)
            operator = undefined;
            display.innerHTML = finalValue
            resetOperatorColor()
        }
    }
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
    handleDisplay()
}
function reset() {
    firstNumber = ""
    operator = undefined
    secondNumber = ""
    finalValue = undefined
    display.innerHTML = ""
    display.style.paddingTop = `68px`
    resetOperatorColor()
}
function resetOperatorColor() {
    for (let i = 0; i < operatorNodeList.length; i++) {
        operatorNodeList[i].style.borderColor = 'rgb(255, 171, 185)'
    }
}
// function doStuff() {
//     console.log("firstNumber " + firstNumber);
//     console.log("pressedKey " + pressedKey);
//     console.log("secondNumber " + secondNumber);
//     // console.log("finalValue " + finalValue);
//     console.log("operator " + operator);
// }
// setInterval(doStuff, 3000)
function handleKeyboard() {
    window.addEventListener('keyup', function (e) {
        pressedKey = document.querySelector(`button[data-key="${e.key}"]`)
        pressedKey = pressedKey.textContent
        if ((pressedKey === null) || (pressedKey === "="))
            return;
        if ((pressedKey === "*") || (pressedKey === "+") || (pressedKey === "-") || (pressedKey === "/"))
            operatorLogic(pressedKey)
        else {
            if (pressedKey === ".") {
                addDot('.')
                return;
            }
            if ((!operator)) {
                firstNumber = firstNumber + pressedKey
            }
            else {
                secondNumber = secondNumber + pressedKey
            }
        }
        handleDisplay()
    });
}