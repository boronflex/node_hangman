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

//need to have a new game function that pulls new random word and adds blanks, then plays run game


//verifies letter
var verLetter = new Letter("face", "T");//newrandom word will go in here

//console.log(verLetter.search());

//var guesses = 0

function runGame(){

  verifyWord.showWord();
  
  inquirer.prompt([
    
      {
        type: "input",
        name: "userInput",
        message: "\n Guess a Letter: "
      }
    
    ]).then(function(command) {

      console.log(command.userInput);

      //if (totalGuesses < guesses){
        //show guesses left

        //check if letter is in word

        var verLetter = new Letter(pullRandomWord, command.userInput);

        //if letter is in word 
          //show success message
          //reveal letter in blanks
          //take away a guess
          //run game again
        //if letter is wrong or invalid
          //take away a guess
          //run game again
        
        // runGame();
      //} else {
        //show game over message
        //inquirer asking if want to play again
          //if yes run game again
          //if no end app
      //}

    
    });

  }

runGame();
