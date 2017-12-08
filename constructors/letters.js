var Word = require("./parseWord");

var Letter = function(word, guess){
  
  this.validate = /[a-zA-Z]/.test(guess);
  this.hits = [];
  this.word = word;
  this.guess = guess;

  this.search = function(){
    //if this.validate === true then run search
    if (this.word.indexOf(this.guess) != -1){
      
      for (var i=0; i<word.length; i++){
        if (word[i]===this.guess){
          this.hits.push(i);
        }
      }
      return this.hits;
    } else {
      console.log("no match");
    }
  }

}

var tester = new Letter("awdord","o");

console.log(tester.search());

module.exports = Letter