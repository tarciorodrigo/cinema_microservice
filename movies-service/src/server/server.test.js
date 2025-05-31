const { test, expect } = require("@jest/globals");
const request = require("supertest");
const server = require("./server");

const apiMock = jest.fn((app, repository) => {
  app.get("/error", (req, res, next) => {
    throw new Error("Mock error");
  });
});

test("Server Start", async () => {
  const app = await server.start(apiMock);
  expect(app).toBeTruthy();
});

test("Health Check", async () => {
  process.env.PORT = 3001;
  const app = await server.start(apiMock);
  const response = await request(app).get("/health");
  expect(response.status).toEqual(200);
});

test("Error Check", async () => {
  process.env.PORT = 3004;
  const app = await server.start(apiMock);
  const response = await request(app).get("/error");
  expect(response.status).toEqual(500);
});

test("Hello World", async () => {
  const app = await server.start(apiMock);
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
});

test("Server Stop", async () => {
  const isStopped = await server.stop();
  expect(isStopped).toBeTruthy();
});
