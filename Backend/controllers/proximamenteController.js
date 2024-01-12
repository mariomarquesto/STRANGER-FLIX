const axios = require("axios");
const Proximos = require("../models/proximamenteModel");
const contenidoCategorias = require('../models/contenidoCategoriasModel')

const getPeliculas = async (req, res) => {
  try {
    const result = await Proximos.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const peliculas = async (req, res) => {
  try {
    const peliculas = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=es-MX`
    );
    console.log(peliculas.data);
    const { results } = peliculas.data;
    await Proximos.deleteMany();
    results.map((pelicula) => {
      contenidoCategorias.create({
        id: pelicula.id,
        titulo: pelicula.title,
        poster: `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`,
        fecha: pelicula.release_date,
        genero: pelicula.genre_ids,
        descripcion: pelicula.overview,
        categoria: "Proximamente"
      });
    });

    res.status(200).json("peliculas proximas guardadas");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getPeliculas,
  peliculas,
};
