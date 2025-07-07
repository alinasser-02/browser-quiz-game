/*-------------- Constants -------------*/
const football = [
  {
    question: `Messi has won a record number of Ballon d'Or awards - how many?`,
    choices: [
      `8 Ballon d'Ors`,
      `4 Ballon d'Ors`,
      `7 Ballon d'Ors`,
      `6 Ballon d'Ors`,
    ],
    correct: `8 Ballon d'Ors`,
  },
  {
    question: `Which club is associated with 'Galacticos'?`,
    choices: [`Barcelona`, `Arsenal`, `Real Madrid`, `Bayern Munich`],
    correct: `Real Madrid`,
  },
  {
    question: "Who won the FIFA World Cup in 2022?",
    choices: ["England", "Spain", "Germany", "Argentina"],
    correct: "Argentina",
  },
  {
    question: "Which football club has won the most Premier League titles?",
    choices: ["Chelsea", "Liverpool", "Manchester United", "Arsenal"],
    correct: "Manchester United",
  },
  {
    question: "Who is known as the “King of Football?",
    choices: ["Cristiano Ronaldo", "Lionel Messi", "Diego Maradona", "Pelé "],
    correct: "Lionel Messi",
  },
];
const animals = [
  {
    question: "What is the fastest land animal in the world?",
    choices: ["Cheetah", "Horse", "Tiger", "Lion"],
    correct: "Cheetah",
  },
  {
    question: "How many legs does a spider have?",
    choices: ["6", "4", "8", "14"],
    correct: "8",
  },
  {
    question: "Which sea creature has eight legs?",
    choices: ["Jellyfish", "Lobster", "Squid", "Octopus"],
    correct: "Octopus",
  },
  {
    question: "Which bird can mimic human speech?",
    choices: ["Owl", "Crow", "Parrot", "Swan"],
    correct: "Parrot",
  },
  {
    question: "Which animal has the strongest bite force?",
    choices: ["Lion", "Bear", "Crocodile", "Dog"],
    correct: "Crocodile",
  },
];
const numArray = [
  "question 1 of 5",
  "question 2 of 5",
  "question 3 of 5",
  "question 4 of 5",
  "question 5 of 5",
];

/*---------- Variables (state) ---------*/
let result = 0;
let currentQuestionIdx = 0;
let currentQuestions = [];

/*----- Cached Element References  -----*/
const categorySelected = document.querySelector("#category");
const startBtn = document.querySelector("#start-quiz");
const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const dialog = document.querySelector("#instructions");

const questionNum = document.querySelector("#question-number");
const questionText = document.querySelector("#question-text");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const nextBtn = document.querySelector("#next-button");

const resultText = document.querySelector("#result-text");
const theScore = document.querySelector("#the-score");
const playAgainBtn = document.querySelector("#play-again");
const sound = new Audio('https://www.orangefreesounds.com/wp-content/uploads/2018/01/Chopin-nocturne-op-9-no-1-1.mp3')
/*-------------- Functions -------------*/
const selectedCategory = localStorage.getItem("selectedCategory");
if (selectedCategory === "Football") {
  currentQuestions = football;
} else {
  currentQuestions = animals;
}
function render() {
  let currentQuestion = currentQuestions[currentQuestionIdx];
  questionText.textContent = currentQuestion.question;
  answer1.textContent = currentQuestion.choices[0];
  answer2.textContent = currentQuestion.choices[1];
  answer3.textContent = currentQuestion.choices[2];
  answer4.textContent = currentQuestion.choices[3];
  questionNum.textContent = numArray[currentQuestionIdx];
}

function nextQuestion() {
  currentQuestionIdx++;
  if (currentQuestionIdx >= currentQuestions.length) {
    localStorage.setItem("score", result);
    window.location.href = "result.html";
  } else {
    render();
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  let currentQuestion = currentQuestions[currentQuestionIdx];
  if (selectedAnswer === currentQuestion.correct) {
    result++;
  }
}

sound.play()
/*----------- Event Listeners ----------*/

if (startBtn) {
  startBtn.addEventListener("click", function () {
    const selectedCategory = categorySelected.value;
    localStorage.setItem("selectedCategory", selectedCategory);
    window.location.href = "quiz.html";
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", nextQuestion);
}
if (questionText) {
  render();
}
if (answer1) {
  answer1.addEventListener("click", checkAnswer);
}
if (answer2) {
  answer2.addEventListener("click", checkAnswer);
}
if (answer3) {
  answer3.addEventListener("click", checkAnswer);
}
if (answer4) {
  answer4.addEventListener("click", checkAnswer);
}
if (resultText) {
  const quizResult = localStorage.getItem("score");
  if (quizResult >= 3) {
    theScore.textContent = `${quizResult} of 5 You won, congrats!`;
  } else {
    theScore.textContent = `${quizResult} of 5 You lost, try again!`;
  }
}
if (playAgainBtn) {
  playAgainBtn.addEventListener("click", function () {
    window.location.href = "quiz.html";
  });
}
openModalBtn.addEventListener("click", () => dialog.showModal());
closeModalBtn.addEventListener("click", () => dialog.close());

