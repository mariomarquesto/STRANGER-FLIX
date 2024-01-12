const { Schema, model } = require("mongoose");

const listValorados = Schema({
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

const Valorados = model("valorados", listValorados);

module.exports = Valorados;
