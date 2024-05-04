var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var guessedNumberDisplay = document.getElementById("guessedNumberDisplay");

var answer = Math.floor(Math.random() * 100) + 1;
var numberOfGuesses = 0;
var guessedNumbers = [];

function play() {
  var userGuess = document.getElementById("guess").value;
  var regex = /^[0-9]+$/; // Regular expression to match only digits
  if (!regex.test(userGuess)) {
    alert("Please enter a valid number.");
    return;
  }

  userGuess = parseInt(userGuess);
  if (userGuess < 1 || userGuess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  guessedNumbers.push(userGuess);
  numberOfGuesses += 1;

  if (userGuess < answer) {
    msg1.textContent = "Your guess is too low.";
    msg2.textContent = "No. of guesses: " + numberOfGuesses;
    msg3.textContent = "Guessed numbers are: " +
      guessedNumbers;
  } else if (userGuess > answer) {
    msg1.textContent = "Your guess is too high.";
    msg2.textContent = "No. of guesses: " + numberOfGuesses;
    msg3.textContent = "Guessed numbers are: " +
      guessedNumbers;
  } else if (userGuess == answer) {
    msg1.textContent = "You're Correct!!";
    msg2.textContent = "The number was: " + answer;
    msg3.textContent = "You guessed it in " + numberOfGuesses + " guesses";
    document.getElementById("my_btn").disabled = true;
  }
}
