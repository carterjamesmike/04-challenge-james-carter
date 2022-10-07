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

var question1 = ["Which button is A?", "A", "B", "C", "D"];
//
//
//

score.textContent = "Press button to start game:"
timer.textContent = "This is the timer:"
questions.textContent = "This is the question";
startButton.textContent = "Start";
optionA.textContent = "Option A";
optionB.textContent = "Option B";
optionC.textContent = "Option C";
optionD.textContent = "Option D";

body.appendChild(header);
header.appendChild(score);
header.appendChild(timer);
body.appendChild(questions);
body.appendChild(startButton);
body.appendChild(answers);

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
    questions.textContent = "Boom!";
 }

 function wrong () {
    questions.textContent = "Dang!";
 }
startButton.addEventListener("click", startQuiz)