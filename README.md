# Moviez API

A simple RESTful API for managing movies usind Node.js and Express, with tests and CI/CD pipeline

## Running the project

1. Install Node.js at your machine
2. Clone the repository

```bash
git clone
```

3. Install dependencies

```bash
npm install
```

4.Start the server

```bash
npm start
```

5. Open your browser and go to http://localhost:8080

## Available Endpoints

- `GET /api/filmes`: List movies.
- `POST /api/filmes`: Create a new movie. (Ex: `{"title": "Duna", "director": "Denis Villeneuve"}`).
- `DELETE /api/filmes/:id`: Remove a movie by ID (Return 204 if success, or 404 if not found).
