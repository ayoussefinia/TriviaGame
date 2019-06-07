

var screen = document.getElementById('body-container');
screen.style.height = window.innerHeight;
screen.style.width = window.innerWidth;

let q1 = {
  "question" : "According to Forbes, what is the highest grossing R rated horror                 film of all time",
  "optionA" : "The Excorsit",
  "optionB" : "IT (the Clown)",
  "optionC" : "The Blair Witch Project",
  "optionD" : "Scream",
  "correct" : "B",
  "correctAnswer": "IT (the Clown)"
  
}

let q2 = {
  "question" : "In which movie did the horror Antagonist attack characters in their dreams",
  "optionA" : "A Nightmare on Elm Street",
  "optionB" : "The Shining",
  "optionC" : "The Ring",
  "optionD" : "The Omen",
  "correct" : "A",
  "correctAnswer": "A Nightmare on Elm Street"
}

let q3 = {
  "question" : "In what year did the original Friday the 13th debut",
  "optionA" : "1987",
  "optionB" : "1993",
  "optionC" : "1990",
  "optionD" : "1980",
  "correct" : "D",
  "correctAnswer": "1980"
}

let q4 = {
  "question" : "In which movie did Jack Nicholson play a character named Jack",
  "optionA" : "Halloween",
  "optionB" : "Saw",
  "optionC" : "The Shining",
  "optionD" : "Silence of the Lambs",
  "correct" : "C",
  "correctAnswer": "The Shining"
}

let q5 = {
  "question" : "Who was the psycho in the movie Halloween",
  "optionA" : "Michael Myers",
  "optionB" : "Jason Vorhees",
  "optionC" : "Hannibal Lector",
  "optionD" : "Billy Scott",
  "correct" : "A",
  "correctAnswer": "Michael Myers"
}

let q6 = {
  "question" : "in the 1982 film The Thing, what type of creature was the monster",
  "optionA" : "childrens doll",
  "optionB" : "Space Alien",
  "optionC" : "a man made monster",
  "optionD" : "a ghost in a human body",
  "correct" : "B",
  "correctAnswer": "Space Alien"
  
}

let questionArr = [q1, q2, q3, q4, q5, q6];
console.log(q1.correct == q1.optionB);
let scaryImageArr = ["../images/Chuckie.jpg", "../images/freddy-kruger.jpg", "../images/it-the-clown.jpg", "../images/jason.jpg", "../images/jeepers-creepers.jpg", "../images/scream.jpg",];


let seconds = 15;
let ticket; //clear interval
let i = 0; // question index
let Arr = questionArr; //scope fix
let y; //clear timeout
let nextQuestionTicket; //clear interval 
let correctAnswers = 0;
let incorrectAnswers = 0;


//start the game with no clock, question or answer display
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

function stopClockOperator() {
  
  stopClockGo();
  y = setTimeout(stopClockStop, 15000); 
  
}
function stopClockStop() {
  
  clearInterval(ticket);
 
  clearTimeout(y);
}



function answerChecker() {
  stopClockStop();
  console.log("answerchecker was run while i=" + i);
  Arr = questionArr;
  if(event.target.name == Arr[i].correct) {
    correctAnswers ++;
    console.log("you chose the correct answer");
    $(".stop-clock").css("display","none");
    $(".question").css("display","none");
    $(".answer").css("display","none");
    $("#main-button").css("display","none");
    $(".instruction-box").css("display","flex");
    $(".main-instructions").text("Correct");
    $(".stats").text("");
    nextQuestionTimer();
  } else {
    incorrectAnswers++;
    console.log("you chose the wrong answer");
    $(".stop-clock").css("display","none");
    $(".question").css("display","none");
    $(".answer").css("display","none");
    $("#main-button").css("display","none");
    $(".instruction-box").css("display","flex");
    $(".main-instructions").text("Wrong");
    $(".stats").text("The Correct Answer Was:" + " " + questionArr[i].correctAnswer);
    nextQuestionTimer();
  }
}

function nextQuestionTimer() {
  console.log("next question timer was run while i=" +i);
  console.log(Arr);
  seconds = 15;
  i++;
  if(i < Arr.length) {
    $(".stats-two").text(" ");
    $("#stop-clock-text").text("15");
    let nextQuestionTicket = setTimeout(function() {
    
      askQuestion(Arr[i]);
      $(".instruction-box").css("display","none");
    }, 2000);
  }else if(i>= Arr.length){
    stopClockStop();
    $(".instruction-box").css("display","flex");
    $(".main-instructions").text("Finished!!!");
    $(".stats").text("Correct Answers: "+ correctAnswers);
    $(".stats-two").text("Incorrect Answers: "+ incorrectAnswers);
    $("#main-button").css("display","flex");
    $("#main-button").text("Play Again");
    correctAnswers = 0;
    incorrectAnswers = 0;
  }
  // return nextQuestionTicket;
  // console.log("nqt:" + nextQuestionTicket);
}

function timeIsOut() {
  $(".instruction-box").css("display","flex");
  $(".stop-clock").css("display","none");
  $(".main-instructions").text("OUT OF TIME");
  $(".stats").text("The Correct Answer Was:" + " " + q1.correctAnswer);
  $(".question").css("display","none");
  $(".answer").css("display","none");
  $("#main-button").css("display","none");
  // setTimeout()
  nextQuestionTimer();
}

// stopClockOperator();
triviaQuestionAsked = false;
gameStarted= false;

function askQuestion() {
  console.log("nextquestionticket:"+ nextQuestionTicket);
  
  console.log("hello from inside ask question i:"+ i);
  console.log(questionArr[i]);
  stopClockOperator();
$(".stats-two").text("");
$(".stop-clock").css("display","flex");
$(".question").css("display","flex");
$(".answer").css("display","flex");
$(".question").text(questionArr[i].question);
// 
$("#submit-button-a").text(questionArr[i].optionA);
$("#submit-button-b").text(questionArr[i].optionB);
$("#submit-button-c").text(questionArr[i].optionC);
$("#submit-button-d").text(questionArr[i].optionD);
}


$("#game-container").click(function(event) {

if(event.target.id == 'main-button'){
  $(".instruction-box").css("display","none"); 
  if(i == questionArr.length ){
    i=0;
    $("#stop-clock-text").text("15");
  }
  console.log("the i above AQ:"+ i);
  askQuestion();
}




if(event.target.classList.contains('submit-button')) {
  answerChecker();
};


});

