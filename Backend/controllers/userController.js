const User = require("../models/userModel");
const { validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getRoles = async (req, res) => {
  try {
    const result = await User.find({ role: "admin" });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteuserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(400).json({ mensaje: "El usuario no existe" });
    }

    if (userExist.role == "admin") {
      const cantidadUsuarios = await User.countDocuments({ role: "admin" });
      if (cantidadUsuarios > 1) {
        const resultado = await User.findByIdAndRemove(id);
        return res.status(200).json({mensaje:"Usuario eliminado"});
      } else {
        return res
          .status(400)
          .json({ mensaje: "No se puede borar el ultimo admin" });
      }
    } else {
      const resultado = await User.findByIdAndRemove(id);
      return res.status(200).json("Usuario eliminado");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const emailExiste = await User.findOne({ email });

    if (emailExiste) {
      return res.status(201).send({ message: "0" });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    const newUser = await user.save();
    res.status(201).send({ message: "1" });
  } catch (error) {
    console.log(error),
      res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getUsers,
  createUser,

  deleteuserById,
  getRoles,
};
