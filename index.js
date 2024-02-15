const express = require("express");
const bodyParser = require("body-parser");

const authRouter = require("./server/routes/authRoutes.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/views/index.html");
});

app.use("/auth",authRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
