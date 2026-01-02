import React, { useState } from "react";
import Login from "./Login";
import Quiz from "./Quiz";
import Result from "./Result";
import Leaderboard from "./Leaderboard";
import "./styles.css";

function App() {
  // User & navigation state
  const [username, setUsername] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Quiz data state
  const [score, setScore] = useState(0);
  const [analysisData, setAnalysisData] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  // Login handler
  const handleLogin = (user) => {
    setUsername(user);
    setShowQuiz(true);
  };

  // Quiz end handler (WITH ANALYSIS)
  const handleQuizEnd = (finalScore, answers) => {
    setScore(finalScore);
    setAnalysisData(answers);
    setShowQuiz(false);
    setShowResult(true);

    setLeaderboard((prev) => [
      ...prev,
      { username, score: finalScore },
    ]);
  };
  // Back to Home (Login Page)
const handleBackToHome = () => {
  setUsername("");
  setScore(0);
  setAnalysisData([]);
  setShowResult(false);
  setShowQuiz(false);
  setShowLeaderboard(false);
};


  // Restart quiz
  const handleRestart = () => {
    setScore(0);
    setAnalysisData([]);
    setShowResult(false);
    setShowQuiz(true);
  };

  // View leaderboard
  const handleLeaderboardView = () => {
    setShowResult(false);
    setShowLeaderboard(true);
  };

  // Back from leaderboard
  const handleBackFromLeaderboard = () => {
    setShowLeaderboard(false);
    setShowQuiz(true);
  };

  return (
    <div className="app">
      {!username && <Login onLogin={handleLogin} />}

      {showQuiz && <Quiz onQuizEnd={handleQuizEnd} />}

      {showResult && (
        <Result
          score={score}
          username={username}
          analysisData={analysisData}
          onRestart={handleRestart}
          onLeaderboard={handleLeaderboardView}
          onHome={handleBackToHome}   

        />
      )}

      {showLeaderboard && (
        <Leaderboard
          leaderboard={leaderboard}
          onBack={handleBackFromLeaderboard}
        />
      )}
    </div>
  );
}

export default App;
