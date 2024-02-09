const express = require("express");
const login = require("../controllers/auth/authLoginController.js");
//const register = require("../controllers/auth/authRegisterController.js");
//const resetPassword = require("");
//const forgottenPassword = require("");

const authRouter = express.Router();

authRouter.post("/login", login);
//authRouter.post("/register", register);

//authRouter.put("/forgottenPassword", forgottenPassword);
//authRouter.put("/resetPassword", resetPassword);

module.exports = authRouter;
