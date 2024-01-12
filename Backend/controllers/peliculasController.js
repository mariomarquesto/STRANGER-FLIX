const axios = require("axios");
const Peliculas = require("../models/peliculasModel");

const getPeliculas = async (req, res) => {
  try {
    const result = await Peliculas.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getCarousel = async (req, res) => {
  try {
    const result = await Peliculas.find({}).limit(5);
    // .sort("-puntaje");
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const peliculas = async (req, res) => {
  try {
    const peliculas = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=es-MX`
    );
    console.log(peliculas.data);
    const { results } = peliculas.data;
    await Peliculas.deleteMany();
    results.map((pelicula) => {
      Peliculas.create({
        id: pelicula.id,
        titulo: pelicula.title,
        poster: `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`,
        fecha: pelicula.release_date,
        genero: pelicula.genre_ids,
        descripcion: pelicula.overview,
        imgFondo: `https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`,
        trailer: pelicula.title,
      });
    });

    res.status(200).json("peliculas guardadas");
  } catch (error) {
    res.status(404).json(error);
  }
};
const buscarYEditar = async (req, res) => {
  try {
    const edit = await Peliculas.findOneAndUpdate(
      {
        titulo: "Constantine: The House of Mystery",
      },
      {
        titulo: "Constantine: The House of Mystery",
        genero: ["Animación", "Fantasía", "Terror", "Acción"],
      }
    );
    res.status(200).json(edit);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getPeliculas,
  peliculas,
  getCarousel,
  buscarYEditar,
};
