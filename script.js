const previousOperand = document.querySelector("#previous-operand")
const currentOperand = document.querySelector("#current-operand")
const numberButtons = document.querySelectorAll(".number")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.getElementById("equal-sign")

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", e => {
        currentOperand.innerHTML += numberButtons[i].innerHTML
    })
}

clearButton.addEventListener("click", e => {
    currentOperand.innerHTML = ""
    previousOperand.innerHTML = ""
})

deleteButton.addEventListener("click", e => {
    currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1)
})

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", e => {
        if (previousOperand.innerHTML === ""){
           previousOperand.innerHTML = currentOperand.innerHTML + " " + operatorButtons[i].innerHTML
           currentOperand.innerHTML = ""
        }
        else {
            previousOperand.innerHTML = previousOperand.innerHTML.slice(0, -1) + " " + operatorButtons[i].innerHTML 
        }
    })
}

equalButton.addEventListener("click", e => {
    console.log(operate())
    
})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator){
    operator = previousOperand.innerHTML.charAt(previousOperand.innerHTML.length - 1)
    num1 = previousOperand.innerHTML.slice(0, -1)
    num1 = parseInt(num1)
    
    num2 = currentOperand.innerHTML
    num2 = parseInt(num2)
    let result = 0
    if (operator === '÷') {
        result = divide(num1, num2)
        previousOperand.innerHTML = ""
        currentOperand.innerHTML = result
    }
    else if (operator === '×') {
        result = multiply(num1, num2)
        previousOperand.innerHTML = ""
        currentOperand.innerHTML = result
    }
    else if (operator === '+') {
        result = add(num1, num2)
        previousOperand.innerHTML = ""
        currentOperand.innerHTML = result
    }
    else if (operator === '-') {
        result = subtract(num1, num2)
        previousOperand.innerHTML = ""
        currentOperand.innerHTML = result
    }
    return result
}