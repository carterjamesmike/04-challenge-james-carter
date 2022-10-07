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

score.textContent = "This is the score:"
timer.textContent = "This is the timer:"
questions.textContent = "This is the question";
optionA.textContent = "Option A";
optionB.textContent = "Option B";
optionC.textContent = "Option C";
optionD.textContent = "Option D";

body.appendChild(header);
header.appendChild(score);
header.appendChild(timer);
body.appendChild(questions);
body.appendChild(answers);
answers.appendChild(optionA);
answers.appendChild(optionB);
answers.appendChild(optionC);
answers.appendChild(optionD);
