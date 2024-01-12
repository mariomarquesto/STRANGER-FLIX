const axios = require("axios");
const SeriesTv = require("../models/seriesTvModel");
const contenidoCategorias = require("../models/contenidoCategoriasModel");

const getPeliculas = async (req, res) => {
  try {
    const result = await SeriesTv.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const series = async (req, res) => {
  try {
    const series = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=es-MX`
    );
    console.log(series.data);
    const { results } = series.data;
    await SeriesTv.deleteMany();
    results.map((serie) => {
        contenidoCategorias.create({
        id: serie.id,
        titulo: serie.name,
        poster: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
        fecha: serie.first_air_date,
        genero: serie.genre_ids,
        descripcion: serie.overview,
        categoria: "Series TV"
      });
    });

    res.status(200).json("series de tv guardadas");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getPeliculas,
  series,
};
