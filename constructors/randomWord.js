//pulling a random word constructor
const randomWord = require('random-word');

var getRandomWord = function(){
  
  this.newRandomWord = randomWord();

}

// var tester = new getRandomWord;

// console.log(tester.newRandomWord);

module.exports = getRandomWord;
