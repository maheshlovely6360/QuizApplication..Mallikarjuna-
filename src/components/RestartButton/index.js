import React from "react";
import "./index.css"

const RestartButton = ({ onRestart }) => {
  return (
    <div>
      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default RestartButton;
