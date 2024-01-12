const { Schema, model } = require("mongoose");

const listPeliculas = Schema({
  id: Number,
  titulo: String,
  fecha: String,
  genero: [Schema.Types.Mixed],
  descripcion: String,
  poster: String,
  imgFondo: String,
  trailer:{
    type: String,
    default : "jose"
  }
});

const Peliculas = model("peliculas", listPeliculas);

module.exports = Peliculas;
