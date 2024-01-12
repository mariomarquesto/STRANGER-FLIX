const axios = require("axios");
const Peliculas = require("../models/peliculasModel");

const peliculasId = async (req, res) => {
  const { peliculaId } = req.params;
  try {
    const result = await Peliculas.findOne({ id: peliculaId });
    // .sort("-puntaje").limit(5);
    if (result !== null) {
      res.status(200).json(result);
    } else {
      res.status(404).json("no se encontro la pelicula");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  peliculasId,
};
