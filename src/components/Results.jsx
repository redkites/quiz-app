import React from "react";

const Result = ({ score, totalQuestions, onRestart }) => {
    return (
        <div className="results-screen">
            <h2>Quiz Completed!</h2>
            <h3>Your Score: {score} / {totalQuestions}</h3>
            <button onClick={onRestart}>Restart Quiz</button>
        </div>
    );
};

export default Result;