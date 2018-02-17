function Letter() {
  this.guessed = false;
  this.letter = "";
  this.showLetter = function() {
    if (!this.guessed) {
      console.log("_");
    }
    else (
      console.log(this.letter)
    )
  };
  this.check = function(x) {
    if (x == this.letter) {
      this.guessed = true;
    };
  };
}
