var Letter = require('./Letter.js');

function Word() {
	this.ltrArr = [];
	this.word = '';
  this.solved = false;
  this.guesses = 10;

	// pushes each letter object to the array
	this.ltrObj = function(word) {
		for (var i = 0; i < word.length; i++) {
			this.ltrArr.push(new Letter(word[i]));
			this.word += word[i] + " ";
		}
	};
	this.ltrCheck = function(gsdltr) {
    var display = "";
		for (var i = 0; i < this.ltrArr.length; i++) {
			this.ltrArr[i].check(gsdltr);
			display += this.ltrArr[i].showLetter();
		}
    console.log("\n", display);
	};


};

// var wrd = new Word('apple', 'l');
// wrd.ltrObj();
// wrd.ltrCheck('e');
// wrd.ltrCheck('a');
// wrd.ltrCheck('o');
// console.log(wrd.wordArr);
module.exports = Word;
