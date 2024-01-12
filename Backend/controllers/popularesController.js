const axios = require("axios");
const Populares = require("../models/popularesModel");
const contenidoCategorias = require("../models/contenidoCategoriasModel");

const getPeliculas = async (req, res) => {
  try {
    const result = await Populares.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const peliculas = async (req, res) => {
  try {
    const peliculas = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=es-MX`
    );
    console.log(peliculas.data);
    const { results } = peliculas.data;
    await Populares.deleteMany();
    results.map((pelicula) => {
      contenidoCategorias.create({
        id: pelicula.id,
        titulo: pelicula.title,
        poster: `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`,
        fecha: pelicula.release_date,
        genero: pelicula.genre_ids,
        descripcion: pelicula.overview,
        categoria: "Populares",
      });
    });

    res.status(200).json("peliculas populares guardadas");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getPeliculas,
  peliculas,
};
