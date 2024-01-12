const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(409).send({ message: "Usuario o password incorecta" });
  }

  const match = bcrypt.compareSync(password, user.password);
  if (match) {
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "6000000",
    });

    console.log(token, payload, user.role);
    return res
      .status(200)
      .send({
        message: "Login Exitoso",
        token: token,
        payload: payload,
        role: user.role,
      });
  } else {
    return res.status(401).send({ message: "Usuario o password incorecta" });
  }
};

module.exports = {
  login,
};
