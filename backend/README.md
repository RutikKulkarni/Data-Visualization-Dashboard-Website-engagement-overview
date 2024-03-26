# Backend for Data Visualization Dashboard

This is the backend server for the data visualization dashboard project. It provides RESTful APIs for managing data.

## Setup

1. Install dependencies:

`npm install`


2. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:

`MONGODB_URI=your_mongodb_uri`


3. Start the server:

`npm start`


## API Endpoints

- GET /api/data - Get all data
- POST /api/data - Create new data
- PUT /api/data/:id - Update data
- DELETE /api/data/:id - Delete data
