import React from 'react';

const QuestionCard = ({ question, onAnswerClick }) => {
    return (
        <div className="question-card">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswerClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;