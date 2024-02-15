const express = require("express");
const login = require("../controllers/auth/authLoginController");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    res.sendFile(__dirname + "/client/views/login.html");
  });

authRouter.post("/login",login);

module.exports = authRouter;
