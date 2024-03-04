const express = require("express");
const https = require("https");
const fs = require("fs");
const student = require("./routes/student");

// Configuration options for HTTPS server, specifying the SSL key and certificate files
const options = {
  // Reading the SSL private key file
  key: fs.readFileSync("./certs/rootca.key"),
  // Reading the SSL certificate file
  cert: fs.readFileSync("./certs/rootca.crt"),
};

const app = express();
const server = https.createServer(options, app);

// Using JSON parsing middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use("/api/v1", student);

// Starting the HTTPS server to listen on port 8080
server.listen(8080, () => {
  console.log("Server is running on https://localhost:8080/");
});
