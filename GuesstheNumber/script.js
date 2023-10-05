const inputNumber = document.getElementById("input-number");
const submitButton = document.getElementById("submit-button");
const startButton = document.getElementById("start-button");
const outputMessage = document.getElementById("score-sensitivity");
const outputGuesses = document.getElementById("guess-number");

let number = 0;
let initialOutputGuesses = "Guesses: ";
let chances = 10;
let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 99);
}

function updateOutput(message, guesses = "") {
  outputMessage.innerHTML = message;
  outputGuesses.innerHTML = guesses;
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disabled-button");
}

function enableButton(button) {
  button.disabled = false;
  button.classList.remove("disabled-button");
}

function checkGuess() {
  getNumber();
  if (chances === 1) {
    looser();
  } else if (number < randomNumber) {
    updateOutput("Your guess is too low", initialOutputGuesses + number + ", ");
    chances--;
  } else if (number > randomNumber) {
    updateOutput(
      "Your guess is too high",
      initialOutputGuesses + number + ", ",
    );
    chances--;
  } else if (number === randomNumber) {
    updateOutput("You guessed the number!");
    disableButton(submitButton);
    initialOutputGuesses += number + ", ";
    updateOutput(initialOutputGuesses, "");
    enableButton(startButton);
  }
}

function looser() {
  updateOutput("You lost!<br> The number was " + randomNumber);
  disableButton(submitButton);
  enableButton(startButton);
}

function getNumber() {
  number = parseInt(inputNumber.value) || 0;
  inputNumber.value = "";
  inputNumber.focus();
}

function startButtonHandler() {
  getNumber();
  randomNumber = generateRandomNumber();
  updateOutput("Guess the number!");
  updateOutput("", "");
  enableButton(submitButton);
  disableButton(startButton);
}

submitButton.addEventListener("click", checkGuess);
startButton.addEventListener("click", startButtonHandler);
