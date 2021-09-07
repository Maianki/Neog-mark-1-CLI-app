var readlineSync = require('readline-sync')

//Variables used in the program
var score = 0

//array of object to store names of high scorer and their score
var highScore = [
  {
    name : "Ankit",
    score: 3
  },
  {
    name: "Neeraj",
    score: 2
  }
]

//array of objects to store questions
var questions = [
  {
    question: "Where do I live? ",
    answer: 'Tehri'
  },
  {
    question:'What is my favourite sport? ',
    answer: 'Football'
  },
  {
    question:'Do I like coffee or tea ? ',
    answer: 'tea'
  },
  {
    question:'Who among (Dravid, Virat , Dhoni and Sachin) is my favourite cricketer? ',
    answer: 'Dhoni'
  }
]

//function to welcome the user
function welcome(){
  var name = readlineSync.question("What's your name? ")
  console.log("Hello,",name,"Welcome to \"HOW WELL DO YOU KNOW ANKIT\" ")
  console.log("____________")
}

//definition of play function
function play(question,answer,questionNo){
  console.log("Question ", questionNo);
  var userAnswer = readlineSync.question(question)

  //if useranswer matches answer update score else keep it unchanged
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You are right!');
    score+=1
    console.log('Your current score is: ',score)
  }else{
    console.log('You are wrong!')
    console.log('Your current score is: ',score)
  }
}

//definition of quiz function
function quiz(){
    for(var i=0;i<questions.length;i++){
    questionNo = i+1
    play(questions[i].question,questions[i].answer,questionNo)
    console.log("\n")
  }
}

//function to display your final score
function displayScore(){    
  console.log("----------------------------")
  console.log("Your final score is: ",score)
  //calling showHighScore()
  showHighScore()

  console.log("----------------------------")
}

//function to display high scores
function showHighScore(){
  console.log("High scorer's: ")
  for(var i=0;i<highScore.length;i++){
    console.log(highScore[i].name,":",highScore[i].score)
  }
  if(score >= highScore[0].score || score >= highScore[0].score){
      console.log("Yipee! You made it to the high score chart. Send screenshot of your score to me!")
    }
}


//Calling welcome function
welcome()

//Calling quiz()
quiz()

//Calling displayScore()
displayScore()
