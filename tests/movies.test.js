const request = require("supertest");
const app = require("../app");

describe("Movies API Tests", () => {
  let savedMovieId;

  it("Should store a new Movie (POST /api/movies)", async () => {
    const res = await request(app).post("/api/movies").send({
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Pulp Fiction");

    savedMovieId = res.body.id;
  });

  it("Should list all movies (GET /api/movies)", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Should return 404 while trying to delete a movie that doesnt exist (DELETE /api/movies/:id)", async () => {
    const res = await request(app).delete("/api/movies/9999999");
    expect(res.statusCode).toEqual(404);
  });

  it("Should delete a movie and return 204 (DELETE /api/movies/:id)", async () => {
    const res = await request(app).delete(`/api/movies/${savedMovieId}`);
    expect(res.statusCode).toEqual(204);
  });
});
