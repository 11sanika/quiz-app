React Quiz Application

A fully functional React-based Quiz Application with authentication, timer-based questions, detailed result analysis, score percentage calculation, and a dynamic leaderboard.
Designed with clean UI and deployed using GitHub Pages.

Live Demo

🔗 Live URL:
https://11sanika.github.io/quiz-app

Features

✅ Login system (username-based)
✅ React MCQ quiz questions
✅ Timer for each question
✅ Auto-submit when time runs out
✅ Score calculation
✅ Score percentage display
✅ Detailed result analysis:

Correct answer

Selected answer

Status (Correct / Wrong)

✅ Leaderboard with user scores
✅ Navigation options:

Back to Quiz

Back to Home (Login Page)

Tech Stack

Frontend: React.js

Styling: CSS

State Management: React Hooks

Deployment: GitHub Pages

📁 Project Structure
src/
│── App.js
│── Login.js
│── Quiz.js
│── Result.js
│── Leaderboard.js
│── data.js
│── styles.css
│── index.js

⏱️ Timer Logic

Each question has a fixed time limit

If the timer reaches zero:

Question auto-submits

Moves to next question

📊 Result Analysis

After quiz submission, users can see:

Total score

Percentage score

Question-wise analysis

Correct vs selected answers

🧪 Installation & Run Locally
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/quiz-app.git
cd quiz-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the App
npm start


App runs on:

http://localhost:3000

🚀 Deployment (GitHub Pages)
1️⃣ Install gh-pages
npm install gh-pages --save-dev

2️⃣ Add to package.json
"homepage": "https://YOUR_USERNAME.github.io/quiz-app"

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

3️⃣ Deploy
npm run deploy

🎯 Future Enhancements

Firebase authentication

Admin panel for adding questions

Difficulty levels

Dark mode

Quiz category selection

👩‍💻 Author

Sanika Dhage
Computer Science Engineering Student
React & Frontend Development Enthusiast

⭐ If you like this project

Give it a ⭐ on GitHub — it motivates a lot! 😊
