// build the interface with inquirer
var inquirer = require("inquirer");
var randomWord = require("./constructors/randomWord");
var Word = require("./constructors/parseWord");
var Letter = require("./constructors/letters");

//pulls random word from the random word constructor

var pullRandomWord = new randomWord;

function getNewWord(){
  pullRandomWord = pullRandomWord.newRandomWord;
};

getNewWord();


//parses words
var verifyWord = new Word(pullRandomWord);

verifyWord.addBlanks();


//verifies letter
var verLetter = new Letter;

verLetter.word = pullRandomWord;


//set number of guesses from difficulty of word (by length)

var guesses = pullRandomWord.length * 2;

function runGame(){

  verifyWord.showWord();

  console.log(`\nGuesses left: ${guesses}`);

  console.log(`${verLetter.word}`)
  

  if (guesses > 0){

    inquirer.prompt([
      
        {
          type: "input",
          name: "userInput",
          message: "Guess a Letter: "
        }
      
      ]).then(function(command) {

          //check if letter is in word

          verLetter.guess = command.userInput;

          searchLetter = verLetter.search();

          if(typeof(verLetter.search())=== 'object'){

            verifyWord.showletters(searchLetter,verLetter.guess);
            
            verLetter.hits = [];

            runGame();

          } else {

            guesses -= 1;
            // console.log(`Guesses left: ${guesses}`)
            // console.log(searchLetter);
            runGame();
          }

      });

  } else {
    
    console.log("Game Over");
    //inquirer asking if want to play again
      //if yes run game again
      //if no end app
  }

}

runGame();
