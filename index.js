var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Shlok",
    score: 3,
  },

  {
    name: "Prajjwal",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Who got stuck in a pair of leather pants? ",
  answer: "Ross"
}, 
{
  question: "Who sang the Friends theme? ",
  answer: "The Rembrandts"
},
{
  question: "What instrument does Phoebe Buffay play? ",
  answer: "guitar"
},
// {
//   question: "Where did ross and rachel did their first kiss ?",
//   answer: "Central Perk"
// },
{
  question:"Where did ross and rachel did their first kiss ?",
  answer: "Central Perk"
},
{
  question:"Where did Ross and Rachel get married while drunk?",
  answer: "Las Vegas"
},
{
  question:"Where was Rachel’s first job?",
  answer: "Central Perk"
},
{
  question:"What is the name of Ross’ first wife?",
  answer: "Carol"
},
{
  question:"Which character owns a pet monkey?",
  answer: "Ross"
},
{
  question:"Who peed on Monica when she got stung by a jellyfish?",
  answer: "Chandler"
},
{
  question:"Who was Ross’ best friend in college?",
  answer: "Chandler"
}


];

var userAnswer1
function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName );
  console.log("Let's see how much you love your favorite show FRIENDS");
  var userAnswer1=readlineSync.question("Would you like to start your quiz (Y/N)")
  if(userAnswer1.toUpperCase()=="Y"){
game();
showScores();
}

}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  //highScores.map(score => console.log(score.name, " : ", score.score))
  for(var i=0; i<highScores.length; i++){
    console.log(highScores[i].name+" : "+highScores[i].score)
  }
}


welcome();


