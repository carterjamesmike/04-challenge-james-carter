var body = document.body;
var header = document.createElement("header")
var score = document.createElement("h3");
var timer = document.createElement("h3");
var questions = document.createElement("h1");
var answers = document.createElement("div");
var optionA = document.createElement("button");
var optionB = document.createElement("button");
var optionC = document.createElement("button");
var optionD = document.createElement("button");
var startButton = document.createElement("button"); 
var isCorrect = document.createElement("h2");

var question1 = ["Which button is A?", "A", "B", "C", "D"];
var question2 = ["Which button is B?", "A", "B", "C", "D"];
var question3 = ["Which button is C?", "A", "B", "C", "D"];
var question4 = ["Which button is D?", "A", "B", "C", "D"];
var questionCounter = 1;

score.textContent = "This is the score:"
timer.textContent = "This is the timer:"
questions.textContent = "Press start button to start game";
startButton.textContent = "Start";
optionA.textContent = "Option A";
optionB.textContent = "Option B";
optionC.textContent = "Option C";
optionD.textContent = "Option D";
isCorrect.textContent = "Good Luck"


body.appendChild(header);
header.appendChild(score);
header.appendChild(timer);
body.appendChild(questions);
body.appendChild(startButton);
body.appendChild(answers);
body.appendChild(isCorrect);

function startQuiz () {
    startButton.remove();
    questions.textContent = question1[0];
    answers.appendChild(optionA);
    optionA.textContent = question1[1];
    answers.appendChild(optionB);
    optionB.textContent = question1[2];
    answers.appendChild(optionC);
    optionC.textContent = question1[3];
    answers.appendChild(optionD);
    optionD.textContent = question1[4];

    optionA.addEventListener("click", correct);
    optionB.addEventListener("click", wrong);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", wrong);
}

 function correct () {
    // questions.textContent = "Boom!";
    isCorrect.textContent = "Correct";
    questionCounter++;
    nextQuestion();
 }

 function wrong () {
    // questions.textContent = "Dang!";
    isCorrect.textContent = "Incorrect";
    questionCounter++;
    nextQuestion();
 }

 function nextQuestion () {
    if (questionCounter === 2) {
        questions.textContent = question2[0];
        optionA.textContent = question2[1];
        optionB.textContent = question2[2];
        optionC.textContent = question2[3];
        optionC.textContent = question2[4];

        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", correct);
        optionC.addEventListener("click", wrong);
        optionD.addEventListener("click", wrong);

    } else if (questionCounter === 3) {
        questions.textContent = question3[0];
        optionA.textContent = question3[1];
        optionB.textContent = question3[2];
        optionC.textContent = question3[3];
        optionC.textContent = question3[4];

        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", wrong);
        optionC.addEventListener("click", correct);
        optionD.addEventListener("click", wrong);

    } else if (questionCounter === 4 ) {
        questions.textContent = question4[0];
        optionA.textContent = question4[1];
        optionB.textContent = question4[2];
        optionC.textContent = question4[3];
        optionC.textContent = question4[4];

        optionA.addEventListener("click", wrong);
        optionB.addEventListener("click", wrong);
        optionC.addEventListener("click", wrong);
        optionD.addEventListener("click", correct);

    } else {
        questions.textContent = "Game Over"
    }
 }


startButton.addEventListener("click", startQuiz)