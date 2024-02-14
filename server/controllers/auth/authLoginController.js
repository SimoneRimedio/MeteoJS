const { Request, Response } = require("express");
const Prisma = require("../../connection/connection");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
    const { username, password } = req.body;
    const founded = await Prisma.utenti.findMany()
  
    console.log(founded)

    if (founded.length != 0) {
        res.sendFile(__dirname+"../../../client/views/myaccount.html");
    } else {
        res.write("credenziali sbagliate");
      
    }
};

module.exports = login;
