const jwt = require("jsonwebtoken");

//validacion token entrante para proteger rutas , admin page

const ensureAdmin = async (req, res, next) => {
  const token = req.headers["token"];
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, payload) => {
      if (err) {
        console.log(err);
        res.status(401).json(err);
      } else {
        console.log(payload);
        if (payload.role == "admin") {
          next();
        } else {
          res.status(403).json({ mensaje: "no tenes permiso" });
        }
      }
    });
  } else {
    res.status(400).json({ mensaje: "token inexistente" });
  }
};

module.exports = { ensureAdmin };
