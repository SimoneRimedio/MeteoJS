const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/views/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/client/views/login.html");
});

const login = require("./server/controllers/auth/authLoginController");
app.post("/login",login);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
