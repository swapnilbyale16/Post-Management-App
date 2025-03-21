# Post-Management-App

## Overview
This is a MERN stack-based Post Management Application with user authentication, post creation, updating, deletion, and like functionality.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Local)
- **Authentication**: JWT (JSON Web Token)

## Folder Structure
```
POST-MANAGEMENT-APP/
├── bknd/                 # Backend directory
│   ├── controllers/      # Controllers for handling logic
│   ├── model/           # Mongoose schemas and models
│   ├── routes/          # API route handlers
│   │   ├── rtes.js      # Main API routes
│   ├── index.js         # Entry point for backend
│   ├── package.json     # Backend dependencies
│
├── ftend/                # Frontend directory
│   ├── my-app/           # React app
│   │   ├── src/
│   │   │   ├── Comp/     # Components
│   │   │   │   ├── Nav.js, Home.js, Reg.js, etc.
│   │   │   ├── App.js    # Main application file
│   │   │   ├── index.js  # React entry point
│   │   ├── public/       # Static files
│   ├── package.json      # Frontend dependencies
│
├── node_modules/         # Dependencies
├── .gitignore            # Ignored files
├── README.md             # Documentation
```

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **MongoDB** (Locally installed or using MongoDB Atlas)

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd bknd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node index.js
   ```
   The server should now be running on `http://localhost:5000`

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ftend/my-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`

## API Endpoints
### User Authentication
- **POST** `/reg` - Register a new user
- **POST** `/login` - Authenticate user login

### Post Management
- **POST** `/addpost` - Add a new post (Auth required)
- **GET** `/allpost` - Retrieve all posts
- **GET** `/getpost` - Get a specific post
- **GET** `/catpost/:cat` - Get posts by category
- **GET** `/postbyme/:uid` - Get posts by user (Auth required)
- **PUT** `/updpst` - Update a post (Auth + Admin required)
- **DELETE** `/postdel/:id` - Delete a post (Auth required)
- **PUT** `/editpost` - Edit a post (Auth required)
- **POST** `/addlike` - Like a post (Auth required)
- **POST** `/dlike` - Dislike a post (Auth required)

## Features
- User authentication using JWT
- Secure API routes with authentication and role-based access
- Create, edit, delete, and fetch posts
- Like and dislike functionality

## Contributing
Feel free to fork this repository and submit pull requests.

