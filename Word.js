var Letter = require('./Letter.js');

function Word() {
	this.ltrArr = [];
	this.word = '';
  this.solved = false;
  this.guesses = 10;
	this.guessed = '';
	this.display = '';

	// pushes each letter object to the array
	this.ltrObj = function(word) {
		for (var i = 0; i < word.length; i++) {
			this.ltrArr.push(new Letter(word[i]));
			this.word += word[i] + " ";
		}
	};
	// checks if the letter guessed is correct
	this.ltrCheck = function(gsdltr) {
    this.display = '';
		for (var i = 0; i < this.ltrArr.length; i++) {
			this.ltrArr[i].check(gsdltr);
			this.display += this.ltrArr[i].showLetter();
		}
		// checks if the word is solved
		if (this.display === this.word){
			this.solved = true;
		}
    console.log("\n", this.display);
	};


};
// tests cases
// var wrd = new Word('apple', 'l');
// wrd.ltrObj();
// wrd.ltrCheck('e');
// wrd.ltrCheck('a');
// wrd.ltrCheck('o');
// console.log(wrd.wordArr);
module.exports = Word;
