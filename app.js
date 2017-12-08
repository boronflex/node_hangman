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

//getNewWord();


//parses words
var verifyWord = new Word(pullRandomWord);

verifyWord.addBlanks();
verifyWord.showWord();


//verifies letter
var verLetter = new Letter("buttface", "T");//newrandom word will go in here

console.log(verLetter.search());


//need constructor to parse word
  //separate it into a string 
  //count it
  //put it on 'Word' object
  //just write function here then convert to constructor
  //show in 'message' in prompt


//var guesses = 0

function runGame(){
  
  inquirer.prompt([
    
      {
        type: "input",
        name: "userInput",
        message: pullRandomWord,//blanks will go here in this is just a place holder for now
        suffix: "\n Guess a Letter: "
      }
    
    ]).then(function(command) {

      if (totalGuesses < guesses){
        //show guesses left

        //check if letter is in word
        //if letter is in word 
          //show success message
          //reveal letter in blanks
          //take away a guess
          //run game again
        //if letter is wrong or invalid
          //take away a guess
          //run game again
        
        // runGame();
      } else {
        //show game over message
        //inquirer asking if want to play again
          //if yes run game again
          //if no end app
      }

      console.log(command.userInput);

    
    });

  }


