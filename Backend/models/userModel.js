const { Schema, model } = require("mongoose");

const userSchema = Schema({
  nombre: {
    type: String,
    minLength: 4,
    maxLength: 15,
  },
  apellido: {
    type: String,
    minLength: 4,
    maxLength: 15,
  },
  email: {
    type: String,
    minLength: 20,
    maxLength: 25,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 16,
  },

  role: {
    type: String,
    default: "Usuario",
  },
});

module.exports = model("user", userSchema);
