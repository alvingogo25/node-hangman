var Word = require("./Word.js");
var inquirer = require('inquirer');

// use inquirer to display Prompts
var wordArr = ['apple', 'banana', 'cantaloupe', 'strawberry', 'watermelon', 'peach', 'durian', 'kiwi', 'cherry', 'grape'];

let rand = '';
let randwrd = {};
// randwrd.ltrObj(rand);
function pickWord(){
	rand = wordArr[Math.floor(Math.random() * wordArr.length)];
	randwrd = new Word(rand);
	randwrd.ltrObj(rand);
}
pickWord();

// console.log(rand);
var hangman = function() {

	if (!randwrd.solved) {
		// console.log(randwrd.ltrArr);
		inquirer.prompt([{
			name: 'guess',
			message: 'Guess a letter!',
			validate: function(input) {
				if (isNaN(input)) {
					if (randwrd.guessed.includes(input)){
						return false;
					}
					return true;
				} else {
					return "Letters only!"
				}
			}
		}]).then(function(answer) {
			randwrd.guessed += answer.guess
			// console.log(randwrd.guessed);
			randwrd.ltrCheck(answer.guess);
			if (randwrd.word.includes(answer.guess)) {
        console.log("\nCorrect!")
      }
      else {
        randwrd.guesses--;
        console.log("\nIncorrect! Remaining Guesses: " + randwrd.guesses)
      }


			// if (randwrd.guesses = 0) {
			// 	console.log("You lose. The word is: ", randwrd.word)
			//
			// }
			hangman();
		});
	}
	else {
		playAgain()
	}

};

hangman();

function playAgain() {
	inquirer.prompt([
		{
			type: "list",
			name: "reset",
			message: "Play Again?",
			choices: ["Yes", "No"]
		}
	]).then(function(res){
		if (res.reset === "Yes"){
			pickWord();
			hangman();
		}
	})
};
