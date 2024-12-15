// console.log("Guess The Number!!")

//Generate Random Number
let randomNumebr = Math.round((Math.random() * 10) * 10)
// console.log(`Random Number is : ${randomNumebr}`)

const inputElement = document.querySelector('#input')
// const inputNumber = parseInt(inputElement.value);

const submitButton = document.querySelector('#button')

//result
const result = document.querySelector('#result')

//Guesses
const previousGuessesElement = document.querySelector('#previousGuess')
let previousGuesses = [];


//Attempts
const attempsRemainig = document.querySelector('#attempts')
let attempts = 10;

//Reset
const resetbutton = document.querySelector('#resetButton')
// console.log(resetbutton)

//Show Result
const showResult = document.querySelector('#showResult')

//Status
const statusDiv = document.querySelector('#status')
// console.log(statusDiv)

/*
const emptyInput = (event)=>{
  if(event.key === 'Enter'){
    event.target.value = "";
  }
} */

function resetGame() {
  alert("Game Reseted")
  randomNumebr = Math.round((Math.random() * 10) * 10)

  result.innerText = "Result: ";

  previousGuesses = [];
  previousGuessesElement.innerHTML = `Previous Guess: ${previousGuesses}`;

  attempts = 10;
  attempsRemainig.innerHTML = `Attempts Remaining : ${attempts}`;

  showResult.innerHTML = "";

  statusDiv.innerHTML = "";
}

function checkstatus(inputNumber, randomNumebr) {
  const difference = Math.abs(randomNumebr - inputNumber);

  if (difference < 5) {
    statusDiv.innerHTML = "You're too close..."
  }
  else if (difference > 5 && difference < 15) {
    statusDiv.innerHTML = "You're close..."
  }
  else if (difference > 15 && difference < 25) {
    statusDiv.innerHTML = "Going in Right Direction my friend..."
  }
  else {
    statusDiv.innerHTML = "Too far buddy..."
  }
}

function playGame() {
  const inputNumber = parseInt(inputElement.value);
  if (inputNumber > 0 && inputNumber <= 100 && attempts >= 1) {
    previousGuesses.push(inputNumber);
    checkstatus(inputNumber, randomNumebr);
    if (inputNumber === randomNumebr) {
      alert(`You Won! Number Was : ${randomNumebr}`)
      result.innerText = "Found!"
      resetGame();
    }
    else {
      result.innerText = "Not Found!"

      previousGuessesElement.innerHTML = `Previous Guess : ${previousGuesses}`
      attempsRemainig.innerHTML = `Attempts Remainig : ${--attempts}`
    }
  }
  else if (attempts <= 1) {
    alert("No Attempts Remaining")
    result.innerText = "You Lost!"
    showResult.innerHTML = `Number Was : ${randomNumebr}`
  }
  else {
    alert("Please Enter a Number Between 1-100")
  }
}

function rungame() {
  playGame();
  inputElement.value = "";
}

const rungameOnKey = (event) => {
  if (event.key === 'Enter') {
    playGame();
    inputElement.value = "";
  }
}

resetbutton.addEventListener('click', resetGame, false)

submitButton.addEventListener('click', rungame, false)

inputElement.addEventListener('keydown', rungameOnKey, false)