const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

let server = null;

async function start() {
  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware
  app.use(helmet());
  app.use(morgan("dev"));

  app.use((error, req, next) => {
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
      `Service ${process.env.MS_NAME} running on http://localhost:${port}`
    );
  });

  // Start server
  server = app.listen(port, () => {
    console.log(
      `Service ${process.env.MS_NAME} running on http://localhost:${port}`
    );
  });
}

async function stop() {
  if (server) await server.close();
  return true;
}

module.exports = {
  start,
  stop,
};
