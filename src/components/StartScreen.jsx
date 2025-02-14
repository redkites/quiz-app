import React from 'react'

const StartScreen = ({ startQuiz }) => {
    return (
        <div className="start-screen">
        <h1>Quiz App</h1>
        <p>Test your knowledge with this fun quiz</p>
        <button onClick={startQuiz}>Start Quiz</button>
        </div>
    )
    }

export default StartScreen;