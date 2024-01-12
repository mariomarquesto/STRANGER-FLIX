const { Schema, model } = require("mongoose");

const listPopulares = Schema({
  id: Number,
  titulo: String,
  fecha: String,
  genero: [Schema.Types.Mixed],
  descripcion: String,
  categoria: {
    type: String,
    default: String,
    require: true,
  },
  poster: String,
});

const Populares = model("populares", listPopulares);

module.exports = Populares;
