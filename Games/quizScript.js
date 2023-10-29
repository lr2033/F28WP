var qsAndAs = [
  { question: "Test 1?", answers: ["Y", "N", "N", "N"], correctA: 0 },
  { question: "Test 2?", answers: ["N", "Y", "N", "N"], correctA: 1 },
  { question: "Test 3?", answers: ["N", "N", "Y", "N"], correctA: 2 },
  { question: "Test 4?", answers: ["N", "N", "N", "Y"], correctA: 3 }
];

var questionText = document.getElementById("question");
var scoreText = document.getElementById("score");
var startQuiz = document.getElementById("startButton");
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");

var counter = 0;
var score = 0;

answerButton1.disabled = true;
answerButton2.disabled = true;
answerButton3.disabled = true;
answerButton4.disabled = true;

startQuiz.addEventListener("click", function () {
  if (counter < 4) {
    startQuiz.innerHTML = "Next";
    startQuiz.disabled = true;

    scoreText.innerHTML = score + "/" + (counter + 1);

    questionText.innerHTML = qsAndAs[counter].question;

    answerButton1.innerHTML = qsAndAs[counter].answers[0];
    answerButton2.innerHTML = qsAndAs[counter].answers[1];
    answerButton3.innerHTML = qsAndAs[counter].answers[2];
    answerButton4.innerHTML = qsAndAs[counter].answers[3];

    answerButton1.style.backgroundColor = "white";
    answerButton2.style.backgroundColor = "white";
    answerButton3.style.backgroundColor = "white";
    answerButton4.style.backgroundColor = "white";

    answerButton1.disabled = false;
    answerButton2.disabled = false;
    answerButton3.disabled = false;
    answerButton4.disabled = false;
  }

  else {
    if(score == qsAndAs.length){
      questionText.innerHTML = "You Win!";
    }

    else{
      questionText.innerHTML = "Game Over!";
    }
    
    
    answerButton1.innerHTML = "";
    answerButton2.innerHTML = "";
    answerButton3.innerHTML = "";
    answerButton4.innerHTML = "";

    answerButton1.disabled = true;
    answerButton2.disabled = true;
    answerButton3.disabled = true;
    answerButton4.disabled = true;

    answerButton1.style.backgroundColor = "white";
    answerButton2.style.backgroundColor = "white";
    answerButton3.style.backgroundColor = "white";
    answerButton4.style.backgroundColor = "white";

    startQuiz.innerHTML = "Restart";
    counter = 0;
    score = 0;
  }

});


answerButton1.addEventListener("click", function () {
  if (qsAndAs[counter].correctA == 0) {
    answerButton1.style.backgroundColor = "green";
    score++;
    scoreText.innerHTML = score + "/" + (counter + 1);
  }

  else {
    answerButton1.style.backgroundColor = "red";
  }

  counter++;
  startQuiz.disabled = false;
});

answerButton2.addEventListener("click", function () {
  if (qsAndAs[counter].correctA == 1) {
    answerButton2.style.backgroundColor = "green";
    score++;
    scoreText.innerHTML = score + "/" + (counter + 1);
  }

  else {
    answerButton2.style.backgroundColor = "red";
  }

  counter++;
  startQuiz.disabled = false;
});

answerButton3.addEventListener("click", function () {
  if (qsAndAs[counter].correctA == 2) {
    answerButton3.style.backgroundColor = "green";
    score++;
    scoreText.innerHTML = score + "/" + (counter + 1);
  }

  else {
    answerButton3.style.backgroundColor = "red";
  }

  counter++;
  startQuiz.disabled = false;
});

answerButton4.addEventListener("click", function () {
  if (qsAndAs[counter].correctA == 3) {
    answerButton4.style.backgroundColor = "green";
    score++;
    scoreText.innerHTML = score + "/" + (counter + 1);
  }

  else {
    answerButton4.style.backgroundColor = "red";
  }

  counter++;
  startQuiz.disabled = false;
});