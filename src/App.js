import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import RestartButton from "./components/RestartButton";
import "./App.css"
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
    answer: "Harper Lee"
  }
];


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelection = (selectedAnswer) => {
    const updatedAnswers = [...answers, selectedAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsQuizFinished(false);
  };

  return (
    <div className="app-container">
    <div className="quiz-container">
      {!isQuizFinished ? (
        <Question
          question={quizData[currentQuestionIndex]}
          onAnswerSelection={handleAnswerSelection}
        />
      ) : (
        <Result answers={answers} />
      )}
      {isQuizFinished && <RestartButton onRestart={handleRestart} />}
    </div>
    </div>
  );
};

export default App;
