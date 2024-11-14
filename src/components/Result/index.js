import React from "react";

import "./index.css"

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


const Result = ({ answers }) => {
  const score = answers.reduce((score, answer, index) => {
    if (answer === quizData[index].answer) {
      return score + 1;
    }
    return score;
  }, 0);

  const resultMessage =
    score === quizData.length ? "Well done!" : score >= 3 ? "Good job!" : "Try again!";

  return (
    <div className="result">
      <h2 className="heading">Your Result</h2>
      <p className="para">
        You got {score} out of {quizData.length} correct.
      </p>
      <p className="result-para">{resultMessage}</p>
      <div className="details">
        {quizData.map((q, index) => (
          <div key={index} className="question-result">
            <p>{q.question}</p>
            <p>
              <strong>Your answer: </strong>{answers[index]}{" "}
              <strong>Correct answer: </strong>{q.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
