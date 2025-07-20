const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors')
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api", ApiRoutes);
  const PORT = 3002;

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
setupAndStartServer();
