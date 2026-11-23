const questionNumber = document.querySelector(".question-number");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const score = document.getElementById("score");
const nextBtn = document.getElementById("next");
const verifyResult = document.getElementById("verify-result");
var questions = [
  {
    question: "What is the output of `typeof null` in JavaScript?",
    answers: ["object", "null", "undefined", "number"],
    correctAnswer: 0,
  },
  {
    question:
      "Which array method is used to add one or more elements to the end of an array?",
    answers: ["shift()", "unshift()", "push()", "pop()"],
    correctAnswer: 2,
  },
  {
    question:
      "What does the strict equality operator (`===`) check in JavaScript?",
    answers: [
      "Value only with type coercion",
      "Type only",
      "Both value and type without coercion",
      "Memory reference only",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    answers: ["String", "Boolean", "Object", "Symbol"],
    correctAnswer: 2,
  },
  {
    question:
      "What scope does a variable declared with the `let` keyword have?",
    answers: ["Global scope", "Function scope", "Block scope", "Module scope"],
    correctAnswer: 2,
  },
];

var currentQuestion = 0;
let finalScore = 0;
var selectAnswer = -1;

const showQuestion = () => {
  let question = questions[currentQuestion];
  questionElement.textContent = question.question;
  answersElement.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    let button = document.createElement("button");
    button.classList.add("answer");
    button.textContent = questions[currentQuestion].answers[i];
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".answer")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.toggle("selected");
      selectAnswer = i;
    });
    answersElement.appendChild(button);
  }
};
verifyResult.addEventListener("click", () => {
  if (selectAnswer === questions[currentQuestion].correctAnswer) {
    document.querySelector("#answers").childNodes[
      selectAnswer
    ].style.backgroundColor = "green";
  } else {
    document.querySelector("#answers").childNodes[
      selectAnswer
    ].style.backgroundColor = "red";
    document.querySelector("#answers").childNodes[
      questions[currentQuestion].correctAnswer
    ].style.backgroundColor = "green";
  }
});

nextBtn.addEventListener("click", (event) => {
  if (selectAnswer < 0) {
    alert("you need to choose an answer");
    return;
  }
  if (selectAnswer === questions[currentQuestion].correctAnswer) {
    selectAnswer = -1;
    finalScore++;
    score.textContent = `Score : ${finalScore}`;
  }
  currentQuestion++;
  questionNumber.textContent++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionElement.textContent = "Quiz Finished ! ";
    questionNumber.textContent = "";
    answersElement.innerHTML = "";
    score.textContent = `your Final Score is ${finalScore} .`;
    nextBtn.style.display = "none";
  }
});

showQuestion();
