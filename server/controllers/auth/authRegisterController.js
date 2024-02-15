const Prisma = require("../../connection/connection");

const register = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    await Prisma.utenti.create({
        data: {
          username: username,
          password: password,
        },
      });
      res.send("Registration done, check emails to confirm the account");
    }

module.exports = register;