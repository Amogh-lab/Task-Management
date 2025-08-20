# README

## Overview

This is a full-stack application built with Node.js, Express.js, and React.js. The application allows users to manage tasks, including creating, reading, updating, and deleting tasks.

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