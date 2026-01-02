import React from "react";

function Leaderboard({ leaderboard, onBack }) {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No scores yet.</p>
      ) : (
        <ol>
          {leaderboard
            .sort((a, b) => b.score - a.score)
            .map((entry, index) => (
              <li key={index}>
                {entry.username}: {entry.score}
              </li>
            ))}
        </ol>
      )}
      <button onClick={onBack}>Back to Quiz</button>
    </div>
  );
}

export default Leaderboard;
