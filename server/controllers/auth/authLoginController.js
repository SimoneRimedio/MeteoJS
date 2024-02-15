const Prisma = require("../../connection/connection");
//const jwt = require("jsonwebtoken");

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

  if (user.length != 0) {
    res.send("login eseguito")
  } else {
    res.send("credenziali sbagliate");
  }
};

module.exports = login;
