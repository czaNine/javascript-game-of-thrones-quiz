"use strict";

let userName;
let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "Who is known as the 'Mother of Dragons'?",
    options: ["Cersei Lannister", "Daenerys Targaryen", "Sansa Stark"],
    correctAnswer: 1
  },
  {
    question: "What is the name of Jon Snow's direwolf?",
    options: ["Ghost", "Nymeria", "Summer"],
    correctAnswer: 0
  },
  {
    question: "Who sits on the Iron Throne at the end of the series?",
    options: ["Jon Snow", "Daenerys Targaryen", "Bran Stark"],
    correctAnswer: 2
  },
  {
    question: "Which house's motto is 'Winter is Coming'?",
    options: ["House Lannister", "House Stark", "House Baratheon"],
    correctAnswer: 1
  },
  {
    question: "Who was the first character to be killed by a White Walker?",
    options: ["Benjen Stark", "Will", "Waymar Royce"],
    correctAnswer: 2
  },
  {
    question: "Who was responsible for the creation of the Night King?",
    options: ["The Children of the Forest", "The First Men", "The White Walkers"],
    correctAnswer: 0
  },
  {
    question: "Who poisoned King Joffrey?",
    options: ["Olenna Tyrell", "Sansa Stark", "Petyr Baelish"],
    correctAnswer: 0
  },
  {
    question: "What is the name of Arya Stark's sword?",
    options: ["Ice", "Needle", "Longclaw"],
    correctAnswer: 1
  },
  {
    question: "Who is known as the 'Kingslayer'?",
    options: ["Jaime Lannister", "Tywin Lannister", "Sandor Clegane"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of the Seven Kingdoms?",
    options: ["King's Landing", "Winterfell", "Dragonstone"],
    correctAnswer: 0
  }
];

document.addEventListener("DOMContentLoaded", function() {
  userName = prompt("Enter your name:");
  startQuiz();
});

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('optionA').textContent = `A) ${currentQuestion.options[0]}`;
  document.getElementById('optionB').textContent = `B) ${currentQuestion.options[1]}`;
  document.getElementById('optionC').textContent = `C) ${currentQuestion.options[2]}`;
}

function selectAnswer(index) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isCorrect = checkAnswer(index, currentQuestion.correctAnswer);
  giveFeedback(isCorrect, currentQuestion.options[currentQuestion.correctAnswer]);
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    alert(`Quiz complete! ${userName}, your score is ${score}/${quizQuestions.length}`);
    if (confirm("Do you want to restart the quiz?")) {
      startQuiz();
    }
  }
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

function giveFeedback(isCorrect, correctAnswer) {
  if (isCorrect) {
    alert("Correct!");
    score++;
  } else {
    alert(`Incorrect. The correct answer is ${correctAnswer}.`);
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffleArray(quizQuestions);
  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
