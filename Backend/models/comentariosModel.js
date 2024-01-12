const mongoose = require("mongoose");

const comentario = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  comentario: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("comentario", comentario);
