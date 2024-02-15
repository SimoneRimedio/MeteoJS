const express = require("express");
const login = require("../controllers/auth/authLoginController");
const register = require("../controllers/auth/authRegisterController");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    res.send("ciaoès")
  });

authRouter.post("/login",login);
authRouter.post("/register",register)


module.exports = authRouter;