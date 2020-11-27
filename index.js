
var readlineSync = require('readline-sync');

var score = 0

var userName = readlineSync.question('Whats ur name? ')

console.log()

console.log('Welcome! ' +userName.toUpperCase()+ ' Please answer given questions ')

console.log()

console.log('The questions are from famous Tarak mehta ka oolta chasma ')

console.log()

function quizGame(question, answer) {
  
var userAnswer = readlineSync.question(question+ ' OR enter e to exit!')
  if( userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log('you are right')
    score++;
    console.log('current score is ',score)
  }else if(userAnswer === "e")
  {
    return userAnswer
  }else
  {
    console.log('you are wrong')
    console.log('current score is ',score)
  }

  console.log('*************************************************')
  console.log()
  console.log()
}


  var questions = [ { 
    question: "Jethalal's wife?  a: daya, b: anjali ",
   
    answer: "a"
  },
  {
    question: "Jethala's friend?  a: iyer, b: Tarak",
   
    answer: "b"
  },
  {
    question: "who is leader of tapusena?  a: tapu, b: sonu",
   
    answer: "a"
  },
  {
     question: "who is powerful man?  a: sodi, b: popatlal",
   
    answer: "a"
  },
  {
     question: "who want to turn world upside down?  a: bhide, b: popatlal",
   
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
console.log('YAY! total score is ',score)
}else{
  console.log('Try Again :( ', '\nTotal score is :' ,score)
}
