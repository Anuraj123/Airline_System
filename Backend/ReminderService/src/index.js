const express = require("express");

const bodyParser = require("body-parser");
const apiRouter = require("./routes/index");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api",apiRouter)
  const PORT = 3004;
  app.listen(PORT, () => {
    console.log("Reminder Server started at", PORT);
  });
};

setupAndStartServer();
