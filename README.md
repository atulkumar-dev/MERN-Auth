# React + Express Authentication App

A full-stack web application with user authentication built using React (frontend) and Express.js (backend).

## Features

- User registration (signup)
- User login
- Responsive UI with Tailwind CSS
- MongoDB database integration
- Password hashing with bcrypt

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- React Router
- React Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- CORS enabled

## Project Structure

```
backend/
├── controllers/    # Request handlers
├── models/        # Database models
├── routes/        # API routes
├── util/          # Utilities (DB connection)
└── index.js       # Server entry point

frontend/
├── src/
│   ├── components/  # Reusable components
│   ├── pages/      # Page components
│   └── main.jsx    # App entry point
└── index.html
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### Installation

1. **Clone the repository**
2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file with your MongoDB password:
     ```
     db_password=your_mongodb_password
     ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start Backend** (from backend directory):
   ```bash
   npm run dev
   ```
   Server runs on http://localhost:80

2. **Start Frontend** (from frontend directory):
   ```bash
   npm run dev
   ```
   App runs on http://localhost:5173

## API Endpoints

- `POST /signup` - User registration

## Pages

- `/` - Home page
- `/signup` - User registration
- `/login` - User login (UI only)