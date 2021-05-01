var readlineSync = require('readline-sync')

var userName = readlineSync.question("Your name plz...\n");
console.log("hey welcome " + userName + " to HOW WELL YOU KNOW HRITHIK!");
score = 0;
console.log("\n          *******************************************          \n")
console.log("How to play?")
console.log("You will be asked few questions and given a set of options against them.\nYou need to just type in the option number and if it is correct your score will be upgraded by one. ")
console.log("\n          *******************************************          \n")

function checkAnswer(question,answer,option1,option2,option3){
  console.log(question )
  console.log("1. " + option1)
  console.log("2. " + option2)
  console.log("3. " + option3)
  var userAnswer = readlineSync.question()


  if(userAnswer===answer){
    console.log("Correct answer")
    score = score +1;
    console.log("Your score = " + score);
  }else{
  console.log("Wrong answer");
  console.log("Correct answer is option "+ answer);
  console.log("Your score = " + score);
  }
  console.log("\n          ----------*************************----------          \n")
}

// checkAnswer("Whats my favorite dish","Mushroom Manchurian");
// checkAnswer("Whats my favorite place to hang out","Mysore");

questions = [
  questionOne = {
  question:"What's  Hrithik's favorite dish?",
  answer:"3",
  option1:"noodles",
  option2:"manchurian",
  option3:"Masala Dosa",
},
questionTwo = {
  question:"What's  Hrithik's favorite colour?",
  answer:"3",
  option1:"Red",
  option2:"White",
  option3:"Black",
},
questionThree = {
  question:"What's  Hrithik's favorite city?",
  answer:"2",
  option1:"Mumbai",
  option2:"Mysore",
  option3:"Bengaluru",
},
questionFour = {
  question:"What's  Hrithik's dream bike?",
  answer:"1",
  option1:"Harley-Davidson cruiser",
  option2:"Duke 390",
  option3:"Apache RR-310",
},
questionFive = {
  question:"What's  Hrithik's favorite game?",
  answer:"2",
  option1:"Basketball",
  option2:"Football",
  option3:"Table Tennis",
},
questionSix = {
  question:"What's  Hrithik's favorite series?",
  answer:"3",
  option1:"Narcos",
  option2:"Game of Thrones",
  option3:"la casa de papel",
},
];

highScores = [
  player1 = {
    name:"Ajay",
    score:4
  },
  player2 = {
    name:"Koli",
    score:3
  },
  player3 = {
    name:"Satvik Saya",
    score:3
  },
  player4 = {
    name:"Aniket",
    score:2
  },
]

for(var i=0 ; i<questions.length;i++){
  currentQuestion = questions[i];
  checkAnswer(currentQuestion.question,currentQuestion.answer,currentQuestion.option1,currentQuestion.option2,currentQuestion.option3)
}

player0 = {
  name:"xyz",
  score:0
}
// var highScore = 0
var highScorename,highScorevalue=0;

for(var i=0;i<highScores.length;i++){
  currentScorer=highScores[i];
  if(currentScorer.score>highScorevalue){
    highScorename=currentScorer.name;
    highScorevalue=currentScorer.score;
  }
}

console.log("Your current score out of six is: "+score);

console.log("\nCurrent high scorer is " + highScorename + " scoring " + highScorevalue + " out of 6\n"  );

console.log("Let me know if you score more than the current high Score......\n")
console.log("Namaskara  🙏   Thank You for playing  ")
console.log("\n          *******************************************          \n")