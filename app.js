const express = require("express");
const https = require("https");
const fs = require("fs");
const startup = require("./routes/startup");

const options = {
  key: fs.readFileSync("./certs/rootca.key"),
  cert: fs.readFileSync("./certs/rootca.crt"),
};

const app = express();

const server = https.createServer(options, app);
app.use(express.json());
app.use("/https-web-service/v1", startup);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
