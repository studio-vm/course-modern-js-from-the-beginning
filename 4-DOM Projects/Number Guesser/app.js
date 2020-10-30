// 1. guess a num between min max. 
// 2 3 guesses
// 3. notify player of remaining guesses
// 4. notify player of correct num if lose
//5. let player choose to play again

//! Game values
let min = 1,
   max = 10,
   winNum = getRandomNum(min, max);
console.log(winNum);
guessCount = 3;

//! UI elements
const gameEl = document.querySelector('#game'),
   minNumEl = document.querySelector('.min-num'),
   maxNumEl = document.querySelector('.max-num'),
   guessBtn = document.querySelector('#guess-btn'),
   guessInput = document.querySelector('#guess-input'),
   messageEl = document.querySelector('.message');

//! Assign UI min, max
minNumEl.textContent = min;
maxNumEl.textContent = max;

//! Play again event listener
gameEl.addEventListener('mousedown', function (e) {
   if (e.target.className === 'play-again') {
      window.location.reload();
   }
   console.log(1);
})

//! Event listener for guess
guessBtn.addEventListener('click', function () {
   let guess = parseInt(guessInput.value);
   //Validate input
   if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}`, "red");
   }
   //Check if won 
   if (guess === winNum) {
      //Game over won
      gameOver(true, `${winNum} is correct, you WIN!`)
      //Disable input
   } else {
      //Wrong Number, decrease count
      guessCount--;
      //Game over - lost
      if (guessCount === 0) {
         gameOver(false, `Game over, you lost. The correct number was ${winNum}`)
      } else {
         //Game continues - wrong answer
         // guessInput.value = "";
         setMessage(`${guess} is not correct, you have ${guessCount} guesses left.`, "blue")
         // gameOver(false, `${guess} is not correct, you have ${guessCount} guesses left.`);
      }
   }
})

//! Game Over 
function gameOver(won, msg) {
   let color;
   won ? color = 'green' : color = 'red';
   //Disable input
   guessInput.disabled = true;
   setMessage(msg, color);
   //Play again?
   guessBtn.value = 'Play again?';
   guessBtn.className += 'play-again';
   //since we are adding this value and class after initial page load, we must use event delegation on the parent element to listen for events.
};

//! Set message
function setMessage(msg, color) {
   // Change border and text color
   messageEl.style.color = color;
   guessInput.style.borderColor = color;

   guessInput.value = "";

   messageEl.textContent = msg;
}

//! Get randon winning num
function getRandomNum(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}