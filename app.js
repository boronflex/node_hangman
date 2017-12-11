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
var verLetter = new Letter;

verLetter.word = pullRandomWord;


//console.log(verLetter.search());

//var guesses = 0

function runGame(){

  verifyWord.showWord();

  console.log(verLetter.word)
  
  inquirer.prompt([
    
      {
        type: "input",
        name: "userInput",
        message: "\nGuess a Letter: "
      }
    
    ]).then(function(command) {

      console.log(command.userInput);

      //if (totalGuesses < guesses){
        //show guesses left

        //check if letter is in word

        verLetter.guess = command.userInput;

        searchLetter = verLetter.search();

        if(typeof(verLetter.search())=== 'object'){

          verifyWord.showletters(searchLetter,verLetter.guess);
          
          verLetter.hits = [];

          runGame();

        } else {

          console.log(searchLetter);
          runGame();
        }



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
