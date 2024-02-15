const { Request, Response } = require("express");
const Prisma = require("../../connection/connection");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = await Prisma.utenti.findMany({
    select: {
      Id: true,
    },
    where: {
      username: username,
      password: password,
    },
  });

  console.log(user);

  if (user) {
    res.writeHead(200);
    res.end("login eseguito");
  } else {
    res.end("credenziali sbagliate");
    console.log("no");
  }
};

module.exports = login;
