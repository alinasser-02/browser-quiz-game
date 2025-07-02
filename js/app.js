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
    correctAnswer: `8 Ballon d'Or`,
  },
  {
    question: `Which club is associated withm'Galacticos'?`,
    choices: [`Barcelona`, `Arsenal`, `Real Madrid`, `Bayern Munich`],
    correctAnswer: `Real Madrid`,
  },
  {
    question: "Who won the FIFA World Cup in 2022?",
    choices: ["England", "Spain", "Germany", "Argentina"],
    correctAnswer: "Argentina",
  },
  {
    question: "Which football club has won the most Premier League titles?",
    choices: ["Chelsea", "Liverpool", "Manchester United", "Arsenal"],
    correctAnswer: "Manchester United",
  },
  {
    question: "Who is known as the “King of Football?",
    choices: ["Cristiano Ronaldo", "Lionel Messi", "Diego Maradona", "Pelé "],
    correctAnswer: "Lionel Messi",
  },
];
const animals = [
  {
    question: "What is the fastest land animal in the world?",
    answers: ["Cheetah", "Horse", "Tiger", "Lion"],
    correct: "Cheetah",
  },
  {
    question: "How many legs does a spider have?",
    answers: ["6", "4", "8", "14"],
    correct: "8",
  },
  {
    question: "How many legs does a spider have?",
    answers: ["Jellyfish", "Lobster", "Squid", "Octopus"],
    correct: "Octopus",
  },
  {
    question: "Which bird can mimic human speech?",
    answers: ["Owl", "Crow", "Parrot ", "Swan"],
    correct: "Parrot",
  },
  {
    question: "Which animal has the strongest bite force?",
    answers: ["Lion", "Bear", "Crocodile", "Dog"],
    correct: "Crocodile",
  },
];

/*---------- Variables (state) ---------*/
let result = 0;
let currentQuestionIdx = 0;

/*----- Cached Element References  -----*/
const categorySelected = document.querySelector("#category");
const startBtn = document.querySelector("#start-quiz");
const questionNum = document.querySelector('#question-number');
const questionText = document.querySelector('#question-text');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const nextBtn = document.querySelector('#next-button');
const resultText = document.querySelector('#result-text');
const playAgainBtn = document.querySelector('#play-again');

/*-------------- Functions -------------*/

/*----------- Event Listeners ----------*/
