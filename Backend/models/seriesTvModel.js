const { Schema, model } = require("mongoose");

const listSeriesTv = Schema({
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

const SeriesTv = model("SeriesTv", listSeriesTv);

module.exports = SeriesTv;