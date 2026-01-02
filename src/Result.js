import React from "react";
import { questions } from "./data";

function Result({
  score,
  username,
  analysisData = [],
  onRestart,
  onLeaderboard,
  onHome,
}) {
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  let performance =
    percentage >= 80
      ? "Excellent "
      : percentage >= 50
      ? "Good "
      : "Needs Improvement ";

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>

      <p>
        <b>{username}</b>, you scored <b>{score}</b> out of <b>{total}</b>
      </p>

      <h3>{percentage}%</h3>
      <p className="analysis-summary">{performance}</p>

      <hr />

      <h3>Result Analysis</h3>

      {analysisData.length === 0 ? (
        <p>No analysis data available.</p>
      ) : (
        <div className="analysis-list">
          {analysisData.map((item, index) => (
            <div
              key={index}
              className={`analysis-item ${
                item.isCorrect ? "correct" : "wrong"
              }`}
            >
              <p><b>Q{index + 1}:</b> {item.question}</p>
              <p>Your Answer: {item.selected || "Not Answered"}</p>
              <p>Correct Answer: {item.correct}</p>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 ACTION BUTTONS */}
      <button onClick={onRestart}>Back to Quiz</button>
      <button onClick={onLeaderboard}>View Leaderboard</button>
      <button onClick={onHome} className="home-btn">
        Back to Home
      </button>
    </div>
  );
}

export default Result;
