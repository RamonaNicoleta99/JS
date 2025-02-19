let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess a number between 1 and 10:");
userGuess = Number(userGuess);
if (userGuess === randomNumber) {
  console.log("Correct! You guessed the number.");
} else {
  console.log(`Try again! The correct number was ${randomNumber}.`);
}
