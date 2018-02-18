function Letter(ltr, gsdltr) {
  this.guessed = false;
  this.letter = ltr;
  this.showLetter = function() {
    if (!this.guessed) {
      return " _ ";
    }
    else {
      return this.letter
    };
  };
  this.check = function(gsdltr) {
    if (gsdltr == this.letter) {
      this.guessed = true;
    };
  };
}

var letter = new Letter('k', 'o');
// console.log(letter.guessed, letter.letter, letter.showLetter(), letter.check('k'));

module.exports = Letter;
