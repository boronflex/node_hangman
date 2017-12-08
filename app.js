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
var verLetter = new Letter("buttface", "T");

console.log(verLetter.search());


//need constructor to parse word
  //separate it into a string 
  //count it
  //put it on 'Word' object
  //just write function here then convert to constructor
  //show in 'message' in prompt

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
        // runGame();
      }

      //verify guess letter is string type and length === 1;

      //detemine if guess is in word

      //show correct/wrong message

        //show guesses left
        //prompt user to enter value
      //if the user guesses reveal the letter 


      console.log(command.userInput);

    
    });

  }


