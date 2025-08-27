# README

## Overview

This is a full-stack application built with Node.js, Express.js, and React.js. The application allows users to manage tasks, including creating, reading, updating, and deleting tasks.

## Features

- User registration and login (with hashed passwords)
- Create, read, update, and delete (CRUD) tasks
- Mark tasks as completed
- Responsive, dark-themed UI
- RESTful API backend
- MongoDB for persistent storage

##  Tech Stack

### Frontend
- [React](https://react.dev/) (with Hooks)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/) (for fast development)
- CSS (custom, dark mode)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (MongoDB ODM)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (password hashing)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT auth, planned)
- [dotenv](https://www.npmjs.com/package/dotenv) (environment variables)
- [cors](https://www.npmjs.com/package/cors) (CORS support)

### Database
- [MongoDB Atlas](https://www.mongodb.com/atlas) (cloud database)

---
## Backend

### API Endpoints

* `GET /api/tasks`: Retrieves a list of all tasks
* `POST /api/tasks`: Creates a new task
* `PUT /api/tasks/:id`: Updates a task by ID
* `DELETE /api/tasks/:id`: Deletes a task by ID

### Dependencies

* `express`: ^5.1.0
* `mongoose`: ^8.17.1
* `cors`: ^2.8.5
* `dotenv`: ^17.2.1

### Configuration

* `server.js`: The main entry point for the backend server
* `taskRoutes.js`: Defines the API endpoints for task management
* `Task.js`: Defines the Mongoose model for tasks

### Environment Variables

* `MONGO_URI`: The MongoDB connection URI
* `PORT`: The port number for the backend server

## Frontend

### Components

* `TaskCard`: Displays a list of tasks with details
* `App`: The main application component

### CSS Styles

* `taskcard.css`: Styles the `TaskCard` component
* `index.css`: Sets the background color of the application

### JavaScript Code

* `App.jsx`: Fetches tasks from the backend API and renders the `TaskCard` component
* `main.jsx`: Sets up the React application and renders the `App` component

### Configuration

* `vite.config.js`: Configures Vite for the frontend codebase
* `eslint.config.js`: Configures ESLint for the frontend codebase

### Dependencies

* `react`: ^19.1.1
* `react-dom`: ^19.1.1
* `vite`: ^7.1.2
* `@vitejs/plugin-react`: ^5.0.0

### Environment Variables
Create a `.env` file in the `backend/` directory:
```
MONGO_URI=your_mongodb_connection_string 
PORT=5000
```
* `VITE_PORT`: The port number for the frontend development server

## Getting Started

1. Clone the repository: `git clone https://github.com/your-repo.git`
2. Install dependencies: `npm install` (or `yarn install`)
3. Start the backend server: `npm run start` (or `yarn start`)
4. Start the frontend development server: `npm run dev` (or `yarn dev`)
5. Open your browser and navigate to `http://localhost:3000` (or the port number specified in `VITE_PORT`)

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Acknowledgements

- React
- Express
- MongoDB Atlas
- Vite