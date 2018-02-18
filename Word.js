var Letter = require('./Letter.js');

function Word(word, gsdltr) {
	this.ltrArr = [];
	this.word = word;
	// this.display = '';
	// pushes each letter object to the array
	this.ltrObj = function() {
		for (var i = 0; i < this.word.length; i++) {
			this.wordArr.push(new Letter(this.word[i]));
			// var show = this.wordArr[i].showLetter();
		}
	};
	this.ltrCheck = function(gsdltr) {
		var display = '';
		for (var i = 0; i < this.ltrArr.length; i++) {
			this.ltrArr[i].check(gsdltr);
			display += this.ltrArr[i].showLetter();
		}
    console.log(display);
	};


};

// var wrd = new Word('apple', 'l');
// wrd.ltrObj();
// wrd.ltrCheck('e');
// wrd.ltrCheck('a');
// wrd.ltrCheck('o');
// console.log(wrd.wordArr);
module.exports = Word;
