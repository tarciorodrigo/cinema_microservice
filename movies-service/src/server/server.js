const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

let server = null;

async function start(api, repository) {
  const app = express();
  const port = process.env.PORT || 3000;
  const ms_name = process.env.MS_NAME;

  // Middleware
  app.use(helmet());
  app.use(morgan("dev"));

  app.use((error, req, res, next) => {
    console.error(error);
    res.sendstatus(500);
  });

  app.use(express.json());

  // Routes
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/health", (req, res) => {
    res.send(
      `Service ${ms_name} running on http://localhost:${port}`
    );
  });

  api(app, repository);

  // Start server
  server = app.listen(port, () => {
    console.log(
      `Service ${ms_name} running on http://localhost:${port}`
    );
  });

  return server;
}

async function stop() {
  if (server) await server.close();
  return true;
}

module.exports = {
  start,
  stop,
};