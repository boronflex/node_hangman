// var Word = require("./parseWord");

var Letter = function(word, guess){
  
  this.validate = /[a-zA-Z]/.test(guess);
  this.hits = [];
  this.word = word;
  this.guess = guess;

  this.search = function(){

  //need to limit length of input to one letter
  //need to do a switch case here maybe
    if (this.validate === true){
      this.guess = this.guess.toLowerCase();
      if (this.word.indexOf(this.guess) != -1){
        
        for (var i=0; i<word.length; i++){
          if (word[i]===this.guess){
            this.hits.push(i);
          }
        }
        return this.hits;
      } else {
        return "no match";
      }

    } else {
      return "please enter only alphanumeric characters";
    }

  }

}

// var tester = new Letter("awdord","o");

// tester.search();

module.exports = Letter