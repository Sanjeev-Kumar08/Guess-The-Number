// console.log("Guess The Number!!")

//Generate Random Number
let randomNumebr = Math.round((Math.random() * 10)*10)
console.log(`Random Number is : ${randomNumebr}`)

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

function resetGame(){
  alert("Game Reseted")
  // console.log("Game Reset!")
  randomNumebr = Math.round((Math.random() * 10)*10)
  console.log(randomNumebr)

  result.innerText = "Result: ";

  previousGuesses = [];
  previousGuessesElement.innerHTML = `Previous Guess: ${previousGuesses}`;

  attempts = 10;
  attempsRemainig.innerHTML = `Attempts Remaining : ${attempts}`;

  showResult.innerHTML = "";

  statusDiv.innerHTML = "";
}

function checkstatus(inputNumber , randomNumebr){
  const difference = Math.abs(randomNumebr - inputNumber);
  // console.log(difference);
  if(difference < 15 && difference > 5){
    console.log("Your Number is Close to Random Number")
    statusDiv.innerHTML = "Your Number is Close to Random Number"
  }
  else if(difference < 5){
    console.log("Your Number is Very Close to Random Number")
    statusDiv.innerHTML = "Your Number is Very Close to Random Number"
  }
  else if(difference > 25){
    console.log("Your Number is Too Large")
    statusDiv.innerHTML = "Your Number is Too Large"
  }
  else{
    console.log("Your'e on Right Track")
    statusDiv.innerHTML = "Your'e on Right Track"
  }
}

function playGame(){
    const inputNumber = parseInt(inputElement.value); 
    if(inputNumber>=0 && inputNumber<=100){
      previousGuesses.push(inputNumber);
      checkstatus(inputNumber , randomNumebr);
      if(attempts >= 1){
        if(inputNumber === randomNumebr){
          alert(`You Won! Number Was : ${randomNumebr}`)
          result.innerText = "Found!"
          resetGame();
        }
        else{
          result.innerText = "Not Found!"

        //Display Previous Guesses on Page
        previousGuessesElement.innerHTML = `Previous Guess : ${previousGuesses}`
        // console.log(previousGuesses)

        //Display remaining Attempts
        attempsRemainig.innerHTML = `Attempts Remainig : ${--attempts}`
        }
      }
      else{
        alert("No Attempts Remaining")
        result.innerText = "You Lost!"

        //showResult
        // console.log(showResult)
        showResult.innerHTML = `Number Was : ${randomNumebr}`
      }
    }
    else{
      alert("Please Enter a Number Between 1-100")
    }
}

function rungame(){
  playGame();
  //clear the input
  inputElement.value = "";
}

const rungameOnKey = (event)=>{
  if(event.key === 'Enter'){  
    playGame();
    //clear the input
    inputElement.value = "";
  }
  // inputElement.addEventListener('keydown' , emptyInput , false);
}

resetbutton.addEventListener('click' , resetGame, false)

submitButton.addEventListener('click' , rungame , false)

inputElement.addEventListener('keydown', rungameOnKey, false)