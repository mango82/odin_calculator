const previousOperand = document.querySelector("#previous-operand")
const currentOperand = document.querySelector("#current-operand")
const numberButtons = document.querySelectorAll(".number")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", e => {
        currentOperand.innerHTML += numberButtons[i].innerHTML
    })
}

clearButton.addEventListener("click", e => {
    currentOperand.innerHTML = ""
})

deleteButton.addEventListener("click", e => {
    currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1)
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
