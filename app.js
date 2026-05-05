const express = require("express");
const app = express();

app.use(express.json());

const movies = [];

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.post("/api/movies", (req, res) => {
  const { title, director } = req.body;
  const newMovie = {
    id: Date.now().toString(),
    title,
    director,
  };
});

app.delete("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found!" });
  }

  movies.splice(index, 1);
  res.status(204).send();
});

module.exports = app;
