# Filim 🎬
**Filim** is a project designed to demonstrate the integration of a backend server built with `Java Spring Boot` and a frontend developed in `React`. The backend provides APIs to retrieve movie information and manage movie reviews, while the frontend interacts with these APIs to display movie data and allow users to add reviews.

## Features
- Retrieve a list of movies and details of individual movies.
- Add reviews for movies.
- Seamless integration between the backend (Spring Boot) and frontend (React).

## Tech Stack
- **Backend**: Java, Spring Boot, Maven
- **Frontend**: React, Axios, Material UI
- **Database**: Mongodb

## Prerequisites
Make sure you have the following installed on your system:
- **Java** (JDK 11 or higher)
- **Maven** (for building the backend)
- **Node.js & npm** (for running the frontend)

## Starting the Project

### 1. Clone the repository

```bash
git clone git@github.com:bp7968h/filim.git
cd filim
```

### 2. Start the backend

You can run the server locally using maven. This starts the project on `http://localhost:8080`

```bash
cd filim_server
./mvnw spring-boot:run
```

For more information you can check the [Backend Readme](./filim_server/HELP.md)

### 3. Start the frontend

You can start the local server using npm. This starts the project on `http://localhost:3000`

```bash
npm start
```

For more information you can check the [Frontend Readme](./filim_frontend/HELP.md)

## Backend Overview
The backend server exposes the following main APIs:
- `GET /api/v1/movies`: Retrieve a list of all movies.
- `GET /api/v1/movies/{id}`: Get details of a single movie by ID.
- `POST /api/v1/reviews`: Add a review for a movie.

## Frontend Overview
The frontend uses React to interact with the backend:
- Displays a list of movies on the homepage.
- Shows detailed information about a specific movie when selected.
- Allows users to add a review to a movie.

###Happy Coding! 🚀🎥
