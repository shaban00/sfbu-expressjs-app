const express = require("express");

const startup = express.Router();

startup.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "It is working",
  });
});

startup.get("/alive", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "HTTPS Web Service is alive",
  });
});

module.exports = startup;
