const { Schema, model } = require("mongoose");

const listContenido = Schema({
  id: {
    type: Number,
    minLength: 6,
    maxLength: 6,
    require: true,
  },
  titulo: {
    type: String,
    minLength: 4,
    maxLength: 25,
    require: true,
  },
  fecha: {
    type: String,
    minLength: 10,
    maxLength: 10,
    require: true,
  },
  descripcion: {
    type: String,
    minLength: 10,
    maxLength: 300,
    require: true,
  },
  categoria: {
    type: String,
    default: String,
    minLength: 4,
    maxLength: 15,
    require: true,
  },
  poster: {
    type: String,
    minLength: 10,
    maxLength: 100,
    require: true,
  },
});

const contenidoCategorias = model("contenidoCategorias", listContenido);

module.exports = contenidoCategorias;
