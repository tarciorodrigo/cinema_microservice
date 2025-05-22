const { test, expect, beforeAll, afterAll } = require("@jest/globals");
const request = require("supertest");
const movies = require("./movies");
const server = require("../server/server");
const repositoryMock = require("../repository/__MOCKS__/repository");

let app = null;

beforeAll(async () => {
  process.env.PORT = 3003;
  app = await server.start(movies, repositoryMock);
});

afterAll(async () => {
  await server.stop();
});

test("GET /movies 200 OK", async () => {
  const response = await request(app)
    .get("/movies")
    .set("authorization", `Bearer ${adminToken}`);

  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});

test("GET /movies 401 UNAUTHORIZED (token error)", async () => {
  const response = await request(app)
    .get("/movies")
    .set("authorization", `Bearer 3`);
  expect(response.status).toEqual(401);
});

test("GET /movies 401 UNAUTHORIZED", async () => {
  const response = await request(app).get("/movies");
  expect(response.status).toEqual(401);
});

test("GET /movies/:id 200 OK", async () => {
  const testMovieId = "1";
  const response = await request(app)
    .get(`/movies/${testMovieId}`)
    .set("authorization", `Bearer ${adminToken}`);
  expect(response.status).toEqual(200);
  expect(response.body).toBeTruthy();
});

test("GET /movies/:id 401", async () => {
  const testMovieId = "1";
  const response = await request(app).get(`/movies/${testMovieId}`);
  expect(response.status).toEqual(401);
});

test("GET /movies/:id 404 NOT FOUND", async () => {
  const testMovieId = "-1";
  const response = await request(app)
    .get(`/movies/${testMovieId}`)
    .set("authorization", `Bearer ${adminToken}`);
  expect(response.status).toEqual(404);
});

test("GET /movies/premieres 200 OK", async () => {
  const response = await request(app)
    .get("/movies/premieres")
    .set("authorization", `Bearer ${adminToken}`);
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});

test("GET /movies/premieres 401", async () => {
  const response = await request(app).get("/movies/premieres");
  expect(response.status).toEqual(401);
});
