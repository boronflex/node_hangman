// build the interface with inquirer
var inquirer = require("inquirer");
var randomWord = require("./constructors/randomWord");

var pullRandomWord = new randomWord;

inquirer.prompt([
  
    {
      type: "input",
      name: "userInput",
      message: pullRandomWord.newRandomWord,
      suffix: "\n Guess a Letter: "
    }
  
  ]).then(function(command) {

    //verify letter is string type and length === 1;

      //show blanks
      //show guesses left
      //prompt user to enter value
    //if the user guesses reveal the letter 


    console.log(command.userInput);

  
  });




