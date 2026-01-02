import React, { useEffect, useState } from "react";
import { questions } from "./data";

const QUESTION_TIME = 10;

function Quiz({ onQuizEnd }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [answers, setAnswers] = useState([]);

  // Timer
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(null);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleNext = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedOption === correctAnswer;

    const updatedScore = isCorrect ? score + 1 : score;

    const updatedAnswers = [
      ...answers,
      {
        question: questions[currentQuestion].question,
        selected: selectedOption,
        correct: correctAnswer,
        isCorrect,
      },
    ];

    setAnswers(updatedAnswers);
    setScore(updatedScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(QUESTION_TIME);
    } else {
      // ✅ SEND FINAL ANALYSIS DATA
      onQuizEnd(updatedScore, updatedAnswers);
    }
  };

  return (
    <div className="quiz-container">
      <div className="top-bar">
        <span>
          Question {currentQuestion + 1} / {questions.length}
        </span>
        <span className="timer">⏱ {timeLeft}s</span>
      </div>

      <div className="question-text">
        {questions[currentQuestion].question}
      </div>

      <div className="answer-section">
        {questions[currentQuestion].options.map((option) => (
          <button key={option} onClick={() => handleNext(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
