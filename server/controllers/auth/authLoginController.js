const { Request, Response } = require("express");
const Prisma = require("../../connection/connection");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  const founded = await Prisma.utenti.findMany({
    select: {
      Id: true,
    },
    where: {
      username: username,
      password: password,
    },
  });

  console.log(founded);

  if (founded.length != 0) {
    res.sendFile("/client/views/myaccount.html");
  } else {
    res.write("credenziali sbagliate");
    console.log("no");
  }
};

module.exports = login;
