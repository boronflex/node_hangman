//pulling a random word constructor
const randomWord = require('random-word');

var GetRandomWord = function(){
  
  this.newRandomWord = randomWord();

}

// var tester = new getRandomWord;

// console.log(tester.newRandomWord);

module.exports = GetRandomWord;
