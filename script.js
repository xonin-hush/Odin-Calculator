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
handleNumbers()
handleOperators()
handleEqual()
handleDisplay()
// test1()
// function test1() {
//     button.addEventListener('click', () => {
//         if (firstNumber !== "" || secondNumber !== "") {
//             // display.getAttribute('padding-top')
//             display.style.removeProperty('padding-top');

//             display.style.removeProperty('border-radius');
//             // display.style.removeProperty('padding-top');
//             // display.style.removeProperty('padding-top');
//             // display.style.removeProperty('padding-top');

//             // body.style.paddingTop=`20px`
//         }
//     })
// }
function handleDisplay() {
    body.addEventListener('click', () => {
        if (firstNumber !== "" || secondNumber !== "") {
                        // display.getAttribute('padding-top')
                        display.style.removeProperty('padding-top');
                        display.style.border = `thin solid rgb(65, 21, 21)`
                    }
        if ((operator === undefined) && (secondNumber === "") && (finalValue === undefined)) {
            display.innerHTML = firstNumber
        }
        if ((operator !== undefined) && (firstNumber !== "") && (secondNumber === "")) {
            display.innerHTML = operator
        }
        if ((operator !== undefined) && (firstNumber !== "") && (secondNumber !== "")) {
            display.innerHTML = secondNumber
        }
    })
}

function handleNumbers() {
    numContainer.addEventListener('click', function (e) {

        if (e.target.innerHTML === ".")
            return;
        if ((!operator)) {
            firstNumber = firstNumber + e.target.innerHTML
            // firstNumber = Number(firstNumber)
        }
        else {
            secondNumber = secondNumber + e.target.innerHTML
            //secondNumber = Number(secondNumber)
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
// function doStuff() {
//     console.log("firstNumber " + firstNumber);
//     console.log("secondNumber " + secondNumber);
//     console.log("finalValue " + finalValue);
//     console.log("operator " + operator);
//     console.log({numContainer})
// }
// setInterval(doStuff, 3000);
