import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";

const quizData = [
    {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
    },
    {
    "question": "Which language is used for web development?",
    "options": ["Python", "Java", "JavaScript", "C++"],
    "answer": "JavaScript"
    },
    {
    "question": "What is 5 + 3?",
    "options": ["5", "8", "12", "15"],
    "answer": "8"
    },
    {
    "question": "What is the square root of 16?",
    "options": ["2", "3", "4", "5"],
    "answer": "4"
    },
    {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Venus", "Jupiter"],
    "answer": "Mars"
    },
    {
    "question": "What is the boiling point of water?",
    "options": ["90°C", "100°C", "120°C", "150°C"],
    "answer": "100°C"
    }
];

const Quiz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion(null); // Auto skip on timeout
    }
  }, [timeLeft]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion(selectedOption);
  };

  const handleNextQuestion = (selectedOption) => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60); // Reset timer
    } else {
      if (quizData[currentQuestionIndex].answer === selectedOption) {
        setScore(score + 1);
        onFinish(score + 1);
      } else {
        onFinish(score);
      }
    }
  };

  return (
    <div className="quiz-container">
      <QuestionCard
        question={quizData[currentQuestionIndex]}
        onAnswerClick={handleAnswerClick}
      />
      <p>Time Left: {timeLeft} sec</p>
    </div>
  );
};

export default Quiz;