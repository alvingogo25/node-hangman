var Word = require("./Word.js");
var inquirer = require('inquirer');

// use inquirer to display Prompts
var wordArr = ['apple', 'banana', 'cantaloupe', 'strawberry', 'watermelon', 'peach', 'durian', 'kiwi', 'cherry', 'grape'];

var rand = wordArr[Math.floor(Math.random() * wordArr.length)];
var randwrd = new Word(rand);
randwrd.ltrObj(rand);

// console.log(rand);
var hangman = function() {

	if (!randwrd.solved) {
		// console.log(randwrd.ltrArr);
		inquirer.prompt([{
			// type: 'input',
			name: 'guess',
			message: 'Guess a letter!',
			validate: function(input) {
				if (isNaN(input) === true) {
					return true;
				} else {
					return "Letters only!"
				}
			}
		}]).then(function(answer) {
			randwrd.ltrCheck(answer.guess);
			if (randwrd.word.includes(answer.guess)) {
        console.log("\nCorrect!")
      }
      else {
        randwrd.guesses--;
        console.log("\nIncorrect! Remaining Guesses: " + randwrd.guesses)
      }
			hangman();
		});
	}

};

hangman();
