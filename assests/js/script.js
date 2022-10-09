var body = document.body;
var header = document.createElement("header")
var score = document.createElement("h3");
var timerEl = document.createElement("h3");
var questions = document.createElement("h1");
var answers = document.createElement("div");
var optionA = document.createElement("button");
var optionB = document.createElement("button");
var optionC = document.createElement("button");
var optionD = document.createElement("button");
var startButton = document.createElement("button"); 
var isCorrect = document.createElement("h2");
var timer;
var timerCount = 10;

var question1 = ["Which button is A?", "A", "B", "C", "D"];
var question2 = ["Which button is B?", "A", "B", "C", "D"];
var question3 = ["Which button is C?", "A", "B", "C", "D"];
var question4 = ["Which button is D?", "A", "B", "C", "D"];
var questionCounter = 1;

score.textContent = "This is the score:";
timerEl.textContent = (`Time remaining: ${timerCount}`);
questions.textContent = "Press start button to start game";
startButton.textContent = "Start";
optionA.textContent = "Option A";
optionB.textContent = "Option B";
optionC.textContent = "Option C";
optionD.textContent = "Option D";
isCorrect.textContent = "Good Luck"


body.appendChild(header);
header.appendChild(score);
header.appendChild(timerEl);
body.appendChild(questions);
body.appendChild(startButton);
body.appendChild(answers);
body.appendChild(isCorrect);

function startQuiz () {
    startTimer();
    startButton.remove();
    // questions.textContent = question1[0];
    answers.appendChild(optionA);
    // optionA.textContent = question1[1];
    answers.appendChild(optionB);
    // optionB.textContent = question1[2];
    answers.appendChild(optionC);
    // optionC.textContent = question1[3];
    answers.appendChild(optionD);
    // optionD.textContent = question1[4];
    console.log(`Start quiz question counter ${questionCounter}`);
    nextQuestion();
    // optionA.addEventListener("click", correct, {once: true});
    // optionB.addEventListener("click", wrong, {once: true});
    // optionC.addEventListener("click", wrong, {once: true});
    // optionD.addEventListener("click", wrong, {once: true});
}

 function correct () {
  
    isCorrect.textContent = "Correct";
    questionCounter++;
    console.log(`correct question counter ${questionCounter}`);
    optionA.removeEventListener("click", correct);
    optionA.removeEventListener("click", wrong);
    optionB.removeEventListener("click", correct);
    optionB.removeEventListener("click", wrong);
    optionC.removeEventListener("click", correct);
    optionC.removeEventListener("click", wrong);
    optionD.removeEventListener("click", correct);    
    optionD.removeEventListener("click", wrong);        
    nextQuestion();
 }

 function wrong () {

    isCorrect.textContent = "Incorrect";
    questionCounter++;
    console.log(`Incorrect question counter ${questionCounter}`);
    optionA.removeEventListener("click", correct);
    optionA.removeEventListener("click", wrong);
    optionB.removeEventListener("click", correct);
    optionB.removeEventListener("click", wrong);
    optionC.removeEventListener("click", correct);
    optionC.removeEventListener("click", wrong);
    optionD.removeEventListener("click", correct);    
    optionD.removeEventListener("click", wrong);    
    nextQuestion();
 } 
 

 function nextQuestion () {
    
    if (questionCounter === 1) {
        questions.textContent = question1[0];
        optionA.textContent = question1[1];
        optionB.textContent = question1[2];
        optionC.textContent = question1[3];
        optionD.textContent = question1[4];
        
        console.log(`Question counter 1 before click quetion is: ${questionCounter}`);
        optionA.addEventListener("click", correct);
        optionB.addEventListener("click", wrong);
        optionC.addEventListener("click", wrong);
        optionD.addEventListener("click", wrong);

     } else if (questionCounter === 2) {
        questions.textContent = question2[0];
        optionA.textContent = question2[1];
        optionB.textContent = question2[2];
        optionC.textContent = question2[3];
        optionD.textContent = question2[4];
        
        console.log(`Question counter 2 before click quetion is: ${questionCounter}`);
        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", correct);
        optionC.addEventListener("click", wrong);
        optionD.addEventListener("click", wrong);


    } else if (questionCounter === 3) {
        questions.textContent = question3[0];
        optionA.textContent = question3[1];
        optionB.textContent = question3[2];
        optionC.textContent = question3[3];
        optionD.textContent = question3[4];

        console.log(`Question counter 3 before click quetion is: ${questionCounter}`);
        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", wrong);
        optionC.addEventListener("click", correct);
        optionD.addEventListener("click", wrong);

    } else if (questionCounter === 4 ) {
        questions.textContent = question4[0];
        optionA.textContent = question4[1];
        optionB.textContent = question4[2];
        optionC.textContent = question4[3];
        optionD.textContent = question4[4];

        console.log(`Question counter 4 before click quetion is: ${questionCounter}`);
        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", wrong);
        optionC.addEventListener("click", wrong);
        optionD.addEventListener("click", correct);

    } else {
        questions.textContent = "Game Over"
    }   
 }

 function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
    //   timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if ( timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  } 

startButton.addEventListener("click", startQuiz)

// Create endGame fx that asks for initials imput and displays score then calls highScore fx
// Create highScore fx that displays all high scores and offers option to clear high scores
// Create timer fx that decreases with every incorrect answer
// 
//
//
