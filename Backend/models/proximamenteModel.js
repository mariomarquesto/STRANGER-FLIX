const { Schema, model } = require("mongoose");

const listProximos = Schema({
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

const Proximos = model("proximos", listProximos);

module.exports = Proximos;
