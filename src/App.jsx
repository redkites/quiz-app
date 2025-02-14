import { useState } from 'react'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './App.css'

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true);
    setQuizStarted(false);
  };

  return (
    <div className='App'>
      {!quizStarted && !quizFinished && <StartScreen startQuiz={startQuiz} />}
      {quizStarted && <Quiz onFinish={finishQuiz} />}
      {quizFinished && <Results score={score} totalQuestions={6} onRestart={startQuiz} />}
    </div>
  )
}

export default App
