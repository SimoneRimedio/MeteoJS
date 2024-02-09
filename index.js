const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const authRouter = require("./server/routes/authRoutes");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRouter);


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });