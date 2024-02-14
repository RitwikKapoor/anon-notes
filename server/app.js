const express = require("express");
const cors = require("cors");
const router = require("./route.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({message: "Hello World! I am here....."});
});

app.use("/api", router);

module.exports = app;
