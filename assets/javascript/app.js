

var screen = document.getElementById('body-container');
screen.style.height = window.innerHeight;
screen.style.width = window.innerWidth;

let q1 = {
  "question" : "question for question 1",
  "optionA" : "option a for q1",
  "optionB" : "option b for q1",
  "optionC" : "option c for q1",
  "optionD" : "option d for q1",
  "correct" : "B"
  
}

let q2 = {
  "question" : "question for question 2",
  "optionA" : "option a for q2",
  "optionB" : "option b for q2",
  "optionC" : "option c for q2",
  "optionD" : "option d for q2",
  "correct" : "A"
}

let q3 = {
  "question" : "question for question 3",
  "optionA" : "option a for q3",
  "optionB" : "option b for q3",
  "optionC" : "option c for q3",
  "optionD" : "option d for q3",
  "correct" : "D"
}

let q4 = {
  "question" : "question for question 4",
  "optionA" : "option a for q4",
  "optionB" : "option b for q4",
  "optionC" : "option c for q4",
  "optionD" : "option d for q4",
  "correct" : "C"
}

let q5 = {
  "question" : "question for question 5",
  "optionA" : "option a for q5",
  "optionB" : "option b for q5",
  "optionC" : "option c for q5",
  "optionD" : "option d for q5",
  "correct" : "A"
}

let q6 = {
  "question" : "question for question 6",
  "optionA" : "option a for q6",
  "optionB" : "option b for q6",
  "optionC" : "option c for q6",
  "optionD" : "option d for q6",
  "correct" : "B"
}

let questionArr = [q1, q2, q3, q4, q5, q6];
console.log(q1.correct == q1.optionB);
let scaryImageArr = ["../images/Chuckie.jpg", "../images/freddy-kruger.jpg", "../images/it-the-clown.jpg", "../images/jason.jpg", "../images/jeepers-creepers.jpg", "../images/scream.jpg",];


let seconds = 10;
let ticket;

//stop clock functions 
$(".stop-clock").css("display","none");
$(".question").css("display","none");
$(".answer").css("display","none");

function secondCouter() {
seconds--; 
$("#stop-clock-text").text(seconds);
console.log("second counter was callled");
if(seconds == 0){
  timeIsOut();
}
}

function stopClockGo() {
 ticket =  setInterval(secondCouter, 1000);
 
}
function stopClockStop() {
  clearInterval(ticket);
}
function stopClockOperator() {
  stopClockGo();
  setTimeout(stopClockStop, 10000); 
}

function answerChecker(question) {
  if(event.target.name == question.correct) {
    console.log("you chose the correct answer");
    $(".stop-clock").css("display","none");
    $(".question").css("display","none");
    $(".answer").css("display","none");
    $(".instruction-box").css("display","flex");
    $(".main-instructions").text("Correct");
    $(".stats").text("");
  } else {
    console.log("you chose the wrong answer");
    $(".stop-clock").css("display","none");
    $(".question").css("display","none");
    $(".answer").css("display","none");
    $(".instruction-box").css("display","flex");
    $(".main-instructions").text("Wrong");
    $(".stats").text("The Correct Answer Was:" + " " + question.correct);
  }
}
function timeIsOut() {
  $(".instruction-box").css("display","flex");
  $(".stop-clock").css("display","none");
  $(".main-instructions").text("OUT OF TIME");
  $(".stats").text("The Correct Answer Was:" + " " + q1.correct);
  $(".question").css("display","none");
  $(".answer").css("display","none");
  $("#main-button").css("display","none");
  // setTimeout()
}

// stopClockOperator();
triviaQuestionAsked = false;
gameStarted= false;

function askQuestion(q) {
$(".stop-clock").css("display","flex");
$(".question").css("display","flex");
$(".answer").css("display","flex");
$(".question").text(q.question);
$("#answer-text-a").text(q.optionA);
$("#answer-text-b").text(q.optionB);
$("#answer-text-c").text(q.optionC);
$("#answer-text-d").text(q.optionD);
}


$("#game-container").click(function(event) {

if(event.target.id == 'main-button'){
  $(".instruction-box").css("display","none")
  stopClockOperator();
  askQuestion(q4);
}

if(event.target.classList.contains('submit-button')) {
stopClockStop();
answerChecker(q4);
};


});

