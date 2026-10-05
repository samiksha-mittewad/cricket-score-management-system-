Cricket Score Management System

A full-stack cricket score management platform built with Spring Boot, React, and MySQL. The system provides REST APIs for managing matches, players, and score updates, with a responsive frontend dashboard that periodically refreshes live match data.

Overview

The Cricket Score Management System is designed as a modular web application that separates the presentation layer, REST API layer, business logic, persistence layer, and relational database.

The application supports:

Live match score display

Match creation, retrieval, update, and deletion

Player management

Match-specific score history

RESTful API integration

MySQL persistence through Spring Data JPA

Responsive React dashboard

Automatic match-data refresh

Animated and interactive user interface

Environment-based database credentials for safer local configuration

The backend runs on Spring Boot and exposes REST endpoints on port 8080. The React frontend runs through Vite during development and communicates with the backend through HTTP requests.

System Architecture

+-----------------------------+
|        React Frontend       |
|     Vite + Framer Motion    |
|       + Lucide React        |
+-------------+---------------+
              |
              | HTTP / REST API
              v
+-----------------------------+
|       Spring Boot API       |
|        Controllers          |
+-------------+---------------+
              |
              v
+-----------------------------+
|          Services           |
|     Business Logic Layer    |
+-------------+---------------+
              |
              v
+-----------------------------+
|        Spring Data JPA      |
|         Repositories        |
+-------------+---------------+
              |
              v
+-----------------------------+
|          MySQL 8            |
|        cricket_db           |
+-----------------------------+

Technology Stack

Layer

Technology

Frontend

React

Frontend Tooling

Vite

UI Animation

Framer Motion

Icons

Lucide React

Backend

Spring Boot 4.1.1

Language

Java 17

API

REST

Persistence

Spring Data JPA / Hibernate

Database

MySQL 8

Build Tool

Maven Wrapper

Development IDE

Visual Studio Code

Core Features

Match Management

The system provides APIs to:

Create a match

Retrieve all matches

Retrieve an individual match

Update match information

Delete a match

Match records contain information such as:

Teams

Venue

Match status

Team scores

Wickets

Overs

Toss winner

Match result

Player Management

Players can be stored and retrieved through the player API.

Player records include:

Name

Team

Role

Runs

Wickets

Matches

Score Management

The score module stores score updates associated with a match.

Score information includes:

Match ID

Batting team

Runs

Wickets

Overs

Balls

Runs scored in the current over

The frontend periodically requests updated match data to provide a live-score style experience.

REST API

Match Endpoints

Method

Endpoint

Description

GET

/api/matches

Retrieve all matches

GET

/api/matches/{id}

Retrieve a match by ID

POST

/api/matches

Create a new match

PUT

/api/matches/{id}

Update a match

DELETE

/api/matches/{id}

Delete a match

Player Endpoints

Method

Endpoint

Description

GET

/api/players

Retrieve all players

POST

/api/players

Create a player

Score Endpoints

Method

Endpoint

Description

GET

/api/scores/match/{matchId}

Retrieve scores for a match

POST

/api/scores

Add a score update

Database Design

The application uses a MySQL database named:

cricket_db

The main persistence tables are:

matches
players
scores

Matches

Stores match-level information including teams, venue, status, scores, wickets, overs, toss information, and result.

Players

Stores player profiles and statistical information.

Scores

Stores score updates associated with individual matches.

The application uses Hibernate/JPA to manage persistence and automatically maintain the required database schema during development.

Project Structure

cricket-score-system/
|
+-- frontend/
|   +-- src/
|       +-- components/
|       |   +-- Navbar.jsx
|       |   +-- Hero.jsx
|       |   +-- MatchCard.jsx
|       |   +-- PlayerCard.jsx
|       |   +-- SystemStatus.jsx
|       |
|       +-- App.jsx
|       +-- App.css
|       +-- index.css
|       +-- main.jsx
|   +-- package.json
|   +-- vite.config.js
|
+-- src/
|   +-- main/
|       +-- java/
|       |   +-- com/cricket/scoresystem/
|       |       +-- controller/
|       |       +-- entity/
|       |       +-- repository/
|       |       +-- service/
|       |       +-- CricketScoreSystemApplication.java
|       |
|       +-- resources/
|           +-- application.properties
|
+-- .gitignore
+-- mvnw
+-- mvnw.cmd
+-- pom.xml
+-- README.md

Frontend

The frontend provides a dashboard-oriented interface with:

Cricket-focused visual design

Match cards

Player cards

Live status indicators

Animated interface elements

Responsive layouts

Backend API integration

Automatic match refresh

The frontend communicates with the Spring Boot backend at:

http://localhost:8080

During development, the Vite frontend normally runs at:

http://localhost:5173

Screenshots

The repository should contain the following screenshots inside:

screenshots/

Recommended screenshots:

Dashboard

screenshots/dashboard.png



Match and Score Section

screenshots/match-dashboard.png



Player Statistics

screenshots/player-statistics.png



Add the actual application screenshots using the filenames above. The README is intentionally linked to relative paths so the images will render directly on GitHub.

Getting Started

Prerequisites

Install the following:

Java 17

MySQL 8

Node.js and npm

Git

Visual Studio Code or another Java/React development environment

Verify Java:

java -version

Verify Node.js:

node -v

Verify npm:

npm -v

The project uses the Maven Wrapper, so a global Maven installation is not required.

Database Setup

Create the database in MySQL:

CREATE DATABASE cricket_db;

The application uses the following database configuration:

Database: cricket_db
Username: root
Host: localhost
Port: 3306

For local development, the database password should be supplied through an environment variable rather than committed to source control.

The application uses:

spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:yourpassword}

Set the password before starting the backend.

Windows PowerShell

$env:DB_USERNAME="root"
$env:DB_PASSWORD="YOUR_REAL_MYSQL_PASSWORD"

Do not commit real database credentials to GitHub.

Running the Backend

From the project root:

.\mvnw.cmd spring-boot:run

The backend will start at:

http://localhost:8080

A successful startup should indicate that Tomcat is running on port 8080.

Running the Frontend

Open a second terminal:

cd frontend
npm install
npm run dev

Then open:

http://localhost:5173

Example API Request

Create a match:

Invoke-RestMethod `
  -Uri "http://localhost:8080/api/matches" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{
    "team1": "India",
    "team2": "Australia",
    "venue": "Wankhede Stadium",
    "status": "LIVE",
    "team1Score": 142,
    "team1Wickets": 3,
    "team1Overs": 17.4,
    "team2Score": 0,
    "team2Wickets": 0,
    "team2Overs": 0.0,
    "tossWinner": "India",
    "result": ""
  }'

Retrieve matches:

Invoke-RestMethod "http://localhost:8080/api/matches"

Retrieve players:

Invoke-RestMethod "http://localhost:8080/api/players"

Retrieve score history for match 1:

Invoke-RestMethod "http://localhost:8080/api/scores/match/1"

Configuration

The primary Spring Boot configuration file is:

src/main/resources/application.properties

The project is configured to use:

Server port: 8080
Database: MySQL
Database name: cricket_db
JPA/Hibernate: enabled

The project uses environment variables for database credentials so that sensitive values are not stored in the repository.

Git and Repository Hygiene

The repository excludes generated and sensitive files such as:

frontend/node_modules/
frontend/dist/
target/
.env
*.log

This keeps the Git repository focused on source code, configuration, and project documentation instead of generated dependencies and local build artifacts.

Development Notes

The frontend currently uses periodic API polling to refresh match information. This provides a live-score style interface without requiring a WebSocket infrastructure.

The backend follows a layered architecture:

Controller
    |
    v
Service
    |
    v
Repository
    |
    v
Entity / MySQL

This separation keeps HTTP handling, business logic, persistence, and data models independent and easier to maintain.

Future Improvements

Potential extensions include:

WebSocket-based real-time score streaming

Authentication and role-based access control

Admin dashboard for live score entry

Ball-by-ball commentary

Player performance analytics

Tournament and series management

Team management

Match search and filtering

Advanced statistics and visualizations

Docker-based deployment

Cloud deployment

Automated testing and CI/CD

Project Status

The current version provides the core full-stack implementation with:

Spring Boot REST backend

React frontend

MySQL database integration

Match management

Player management

Score management

API-driven dashboard

Responsive UI

Live-style score refresh

GitHub-ready project structure

Author

Developed as a full-stack web technology project using Java, Spring Boot, React, REST APIs, and MySQL.

Samiksha Mittewad

License

This project was developed for academic and educational purposes.