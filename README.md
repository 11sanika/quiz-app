# Quiz Application

A fully functional **React-based Quiz Application** featuring authentication, timer-based questions, detailed result analysis, score percentage calculation, and a dynamic leaderboard. Designed with a clean UI and deployed using **GitHub Pages**.

---
## Live Demo

🔗 [View Live Demo](https://11sanika.github.io/quiz-app)  

---
## Features
- **Login System** (username-based)
- **React MCQ Quiz Questions**
- **Timer for each question**
- **Auto-submit when time runs out**
- **Score calculation & percentage display**
- **Detailed Result Analysis**:
  - Correct Answer
  - Selected Answer
  - Status (Correct / Wrong)
- **Leaderboard with User Scores**
- **Navigation Options**:
  - Back to Quiz
  - Back to Home (Login Page)
---
## Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS  
- **State Management:** React Hooks  
- **Deployment:** GitHub Pages
---
## 📁 Project Structure
src/
├── App.js 
├── Login.js 
├── Quiz.js 
├── Result.js 
├── Leaderboard.js 
├── data.js 
├── styles.css 
└── index.js 

---
## Timer Logic
- Each question has a fixed time limit.  
- If the timer reaches zero:
  - Question auto-submits
  - Automatically moves to the next question
---
## Result Analysis
After completing the quiz, users can see:
- Total score  
- Percentage score  
- Question-wise analysis  
- Correct vs Selected answers
---
## Installation & Run Locally
**Clone the repository**
```bash
git clone https://github.com/11sanika/quiz-app.git
cd quiz-app

