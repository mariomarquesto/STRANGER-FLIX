
const jwt = require("jsonwebtoken");

//validacion token entrante para proteger rutas , admin page

const jwtValidation = async (req, res, next) => {
  const token = req.headers["token"];
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.SECRET, (err) => {
      if (err) {
        console.log(err);
        res.status(401).json(err);
      } else {
        console.log();
        next();
      }
    });
  } else {
    res.status(400).json("token inexistente");
  }
};

module.exports = { jwtValidation };

