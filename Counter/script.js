const outputNumber = document.getElementById("output-number");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const inputNumber = document.getElementById("input-number");
const resetButton = document.getElementById("reset-button");

let number = 0;

function getNumber() {
    number = parseInt(inputNumber.value) || 0;
}

function updateOutputNumber(newValue) {
    const currentNumber = parseInt(outputNumber.textContent) || 0;
    outputNumber.textContent = currentNumber + newValue;
}

function addNumber() {
    getNumber();
    updateOutputNumber(number > 0 ? number : 1);
}

function subtractNumber() {
    getNumber();
    updateOutputNumber(number > 0 ? -number : -1);
}

function resetAll() {
    inputNumber.value = "";
    outputNumber.textContent = 0;
}

addButton.addEventListener("click", addNumber);
subtractButton.addEventListener("click", subtractNumber);
resetButton.addEventListener("click", resetAll);
