// build the interface with inquirer
var inquirer = require("inquirer");
var randomWord = require("./constructors/randomWord");
var Word = require("./constructors/parseWord");
var Letter = require("./constructors/letters");


//################################game set up
//pulls random word from the random word constructor

var pullRandomWord = new randomWord;

function getNewWord(){
  pullRandomWord = pullRandomWord.newRandomWord;
};

//parses words
var verifyWord = new Word(pullRandomWord);

verifyWord.addBlanks();

//verifies letter
var verLetter = new Letter;

verLetter.word = pullRandomWord;

//set number of guesses from difficulty of word (by length)

var guesses = pullRandomWord.length * 2;

function setUp(){
  getNewWord();

}

//###################################game set up

function startOver(){

  inquirer.prompt([
    
      {
        type: "confirm",
        name: "userInput",
        message: "Do you want play again",
      }
  
    
    ]).then(function(command) {

      switch (command.userInput) {
        case true:
          getNewWord();
          runGame();
          break;

        case false:
          console.log("ok- maybe later")
          break;

      }

    });

}

function runGame(){

  verifyWord.showWord();

  console.log(`\nGuesses left: ${guesses}`);

  console.log(`${verLetter.word}`) //for the TA's turn this on if you want to se the word, otherwise this game is hard as hell
  

  if (guesses > 0 && verifyWord.blankWord.indexOf('_') !== -1){

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

  } else if (verifyWord.blankWord.indexOf('_') === -1){

    console.log("You win");
    startOver();
  
  } else {
    
    console.log("Game Over");
    startOver();
  }

}

runGame();
