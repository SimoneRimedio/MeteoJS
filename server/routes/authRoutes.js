const express = require("express");
const login = require("../controllers/auth/authLoginController");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    res.send("ciaoès")
  });

authRouter.post("/login",login)

module.exports = authRouter;