
📘 CourseMaster Backend

CourseMaster is a full-featured educational learning platform backend, built with Node.js, Express.js, MongoDB, and secure JWT authentication.
This backend powers a complete e-learning system with:
User authentication & authorization (Admin/User)
Course management
Module & content management
Enrollment system
Quiz & assignment features
Quiz submissions & assignment submissions
Module progress tracking

🚀 Tech Stack
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Zod Validation
TypeScript (optional)

📂 Project Structure
src/
│── module/
│   ├── auth/
│   ├── course/
│   ├── enrollment/
│   ├── quiz/
│   ├── assignment/
│   ├── submitQuiz/
│   ├── submittedAssignment/
│── middleware/
│── utils/
│── app.ts
│── server.ts

🛠 Installation & Setup
1️⃣ Clone Repo
git clone https://github.com/mohammad-salim-23/CourseMaster-Backend.git
cd CourseMaster-Backend

2️⃣ Install Dependencies
npm install


3️⃣ Create a .env file
Create a .env file in the root directory:
NODE_ENV=development
PORT=5000

DATABASE_URL=mongodb+srv://your-db-url

BCRYPT_SALT_ROUNDS=10

JWT_ACCESS_SECRET=your-secret-key
JWT_ACCESS_EXPIRES_IN=1d


4️⃣ Run Project
Development
npm run start:dev
Production
npm run build
npm start


🔐 Authentication
POST /auth/register
Registers a new user
Body:
{
  "name": "Salim",
  "email": "test@gmail.com",
  "password": "123456"
}


POST /auth/login
Logs user in and returns access token
GET /auth/users
Admin-only — Fetch all users
PATCH /auth/users/:id
Update user status (block/unblock)
POST /auth/change-password
Authenticated users can change password


📘 Course Routes
POST /course/
Admin — Create course
GET /course/
Get all courses
GET /course/:id
Get a single course (user/admin)
PATCH /course/:id
Admin — Update course
DELETE /course/:id
Admin — Delete course



📦 Module Routes
POST /module/
Admin — Create module
GET /module/course/:courseId
Get modules by course
GET /module/:id/details
Get module details (user/admin)
PATCH /module/:id
Admin — Update module
DELETE /module/:id
Admin — Delete module
🎓 Enrollment Routes



POST /enrollment/
User enrolls in a course
GET /enrollment/user/:userId
Get all enrollments for a user
GET /enrollment/user/:userId/course/:courseId
Get specific enrollment
GET /enrollment/
Admin — Get all enrollments
POST /enrollment/complete-module
Mark module as completed
📝 Quiz Routes


POST /quiz/
Admin — Create quiz
GET /quiz/module/:moduleId
Get quizzes of a module
PATCH /quiz/:id
Admin — Update quiz
DELETE /quiz/:id
Admin — Delete quiz


🧪 Quiz Submission Routes
POST /quiz-submission/submit
User submits quiz
GET /quiz-submission/user/:userId
Get quiz submissions of a user
GET /quiz-submission/quiz/:quizId
Get all submissions for a quiz
GET /quiz-submission/all
Admin — All quiz submissions
GET /quiz-submission/user/:userId/quiz/:quizId
Get user’s single quiz submission


📚 Assignment Routes
POST /assignment/
Admin — Create assignment
GET /assignment/module/:moduleId
Get assignments by module
PATCH /assignment/:id
Admin — Update assignment
DELETE /assignment/:id
Admin — Delete assignment


📤 Assignment Submission Routes
POST /assignment-submission/submit
User submits assignment
PATCH /assignment-submission/:id/marks
Admin — Update marks
GET /assignment-submission/user/:userId
Get user’s submissions
GET /assignment-submission/module/:moduleId
Get submissions for a module
GET /assignment-submission/user/:userId/assignment/:assignmentId
Get single submission
GET /assignment-submission/
Admin — All assignment submissions