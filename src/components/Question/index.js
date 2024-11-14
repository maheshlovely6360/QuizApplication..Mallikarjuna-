import React from "react";
import "./index.css"

const Question = ({ question, onAnswerSelection }) => {
  return (
    <div className="question">
      <h2 className="questions">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswerSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
