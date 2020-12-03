var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0

var userName = readlineSync.question(chalk.red('Whats ur name? '))

console.log()

console.log(chalk.green('Welcome! ' +userName.toUpperCase()+ '. Please answer given questions which having two options. \n' +
'The questions are from famous Tarak mehta ka oolta chasma '))

console.log()

function quizGame(question, answer) {
  
var userAnswer = readlineSync.question(question+ ' OR enter e to exit!\n')
  if( userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green('  you are right'))
    score++;
    console.log(chalk.bgGreen('  current score is ',score))
  }else if(userAnswer === "e")
  {
    return userAnswer
  }else
  {
    console.log(chalk.red('  you are wrong'))
    console.log(chalk.bgRed('  current score is ',score))
  }

  console.log('*************************************************')
  console.log()
  console.log()
}


  var questions = [ { 
    question: chalk.yellow("1. Jethalal's wife?\n  a: daya, b: anjali"),
   
    answer: "a"
  },
  {
    question: chalk.red("2. Jethala's friend?\n  a: iyer, b: Tarak"),
   
    answer: "b"
  },
  {
    question: chalk.red("3. who is leader of tapusena?\n  a: tapu, b: sonu"),
   
    answer: "a"
  },
  {
     question: chalk.red("4. who is powerful man?\n  a: sodi, b: popatlal"),
   
    answer: "a"
  },
  {
     question: chalk.red("5. who want to turn world upside down?\n  a: bhide, b: popatlal"),
   
    answer: "b"
  }
   ]

var i = 0

do{
  var currentQuestions = questions[i]
  userAnswer = quizGame(currentQuestions.question, currentQuestions.answer)
  i++;
}
while(userAnswer!=="e" && i<questions.length)

if(score>=4){
console.log('WELLDONE!' ,userName.toUpperCase(), ' Total score is ',score)
}else{
  console.log('Try Again :( ', userName.toUpperCase(),' \nTotal score is :' ,score)
}
