# Project Management Website

## Overview
This project is a team-based project management website that manages multiple projects, multiple teams, allows for file uploads, and utilizes dashboards to look at the progress of each project.

## Features
- Manage multiple projects
- Manage multiple teams
- File uploads
- Dashboards to visualize project progress

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- React.js (for frontend, to be implemented)

## Project Structure
```
/To-Do Project
|-- models
|   |-- Project.js
|   |-- Team.js
|   |-- User.js
|-- routes
|   |-- projectRoutes.js
|   |-- teamRoutes.js
|   |-- userRoutes.js
|-- uploads
|-- server.js
|-- README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd /Users/jdjohns-la/Library/CloudStorage/OneDrive-PurdueUniversityFortWayne/UXR Files/Internal Projects/To-Do Project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server
1. Start MongoDB:
   ```sh
   mongod
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. The server will be running on `http://localhost:3000`.

## API Endpoints

### Projects
- `POST /projects` - Create a new project
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get a project by ID
- `PATCH /projects/:id` - Update a project by ID
- `DELETE /projects/:id` - Delete a project by ID

### Teams
- `POST /teams` - Create a new team
- `GET /teams` - Get all teams
- `GET /teams/:id` - Get a team by ID
- `PATCH /teams/:id` - Update a team by ID
- `DELETE /teams/:id` - Delete a team by ID

### Users
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `PATCH /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## File Uploads
Files can be uploaded to the `uploads` directory. The file upload setup is handled using Multer.