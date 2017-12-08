//need constructor to parse word
  //separate it into a string 
  //count it
  //export blanks
  //export blanks/right letters
  //put it on 'Word' object
  //just write function here then convert to constructor
  //show in 'message' in prompt

var Word = function(word){

  //this.word = word.split.split('');
  this.blankWord = [];
  this.addBlanks = function (){
    for (var i=0; i<=word.length; i++){
      this.blankWord.push('_');
    }
  };
  this.showWord = function(){
    for (var i=0; i<this.blankWord.length; i++){
      process.stdout.write(`${this.blankWord[i]} `);
    }
  };
}

var tester = new Word('blankets');

tester.addBlanks();

//tester.showWord();

module.exports = Word;