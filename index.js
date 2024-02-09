const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

const authRouter = require("./server/routes/authRoutes");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/views/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/client/views/login.html");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
