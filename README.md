# CSV Upload Trello Power-Up

This is a simple Trello Power-Up that allows users to upload a CSV file and create cards on a Trello board based on the CSV data.

## Setup

1. Clone the repository.
2. Install dependencies.
3. Serve the Power-Up locally using a local web server (e.g., `http-server`).
4. Register the Power-Up in the Trello Developer Console.
5. Add the Power-Up to your Trello board.

## How It Works

- Click on the "Upload CSV" button.
- Choose a CSV file with at least two columns (e.g., `Title, Description`).
- The CSV data is parsed and used to create Trello cards.

## Requirements

- Trello account
- Trello API key and token for integration

# Planning
PLANNED:

Trello-Powerup-Agile
│
├── backend/                 # Backend-related files
│   ├── models/              # MongoDB models (schemas)
│   │   └── metrics.js       # Schema for storing user metrics
│   ├── server.js            # Express server for handling API requests
│   └── config.js            # Configuration for MongoDB connection, environment variables
│
├── public/                  # Frontend files (Power-Up UI)
│   ├── index.html           # The Power-Up HTML interface
│   └── powerup.js           # JavaScript for CSV upload and card creation logic
│
├── manifest.json            # Power-Up configuration
├── .gitignore               # Git ignore file
└── README.md                # Project documentation

backend/ — This folder will contain the server-side components (Express server, MongoDB interaction, etc.).

models/ — This subdirectory holds MongoDB schemas. In this case, you'll store the metrics.js file that defines the schema for tracking user metrics.
server.js — This will be the main server file that sets up the Express app, handles API requests, and connects to MongoDB.
config.js — This file will contain configuration details like the MongoDB connection string and any other environment variables (e.g., API keys or authentication tokens).
public/ — This folder contains the frontend files that Trello interacts with. These files are served when the Power-Up is launched.

STARTED:
index.html — The HTML layout for the Power-Up user interface.
powerup.js — The JavaScript logic for handling CSV uploads, parsing, and creating cards in Trello.
manifest.json — This is the configuration file for your Trello Power-Up. It defines your Power-Up’s capabilities (e.g., buttons, board views) and its interactions with Trello.

.gitignore — Specifies files and directories that should be ignored by Git (like node_modules, logs, or environment files).

# Current State
Currently, the backend is not set up. The frontend contains a very simple index.html which has button to upload the csv, and allows you to attach a csv to it.

## Current top priority tasks:

### Frontend
1. It looks ugly. We need to make it not look ugly.
2. Form based way to map csv to attributes. Currently, your csv has to be set up to exactly the same as how I set it up. Obviously, we don't want that.
3. T Shirt Sizing/Planning Poker Capabilities (stretch goal)
4. Metrics reporting screen or display.

### Backend
1. Set up metrics in MongoDB
2. DB Models
3. Hosting

