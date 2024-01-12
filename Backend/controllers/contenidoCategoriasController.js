const axios = require("axios");
const contenidoCategorias = require("../models/contenidoCategoriasModel");

const getPeliculas = async (req, res) => {
  try {
    const result = await contenidoCategorias.find({});
    // .sort("-puntaje").limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getDetalleContenido = async (req, res) => {
  const { detalleId } = req.params;
  try {
    const result = await contenidoCategorias.findOne({ id: detalleId });
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
const getContenido = async (req, res) => {
  try {
    const { categoria } = req.params;
    const juegos = await contenidoCategorias
      .find({ categoria })
      .sort("name")
      .limit(5);
    res.status(200).json(juegos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getFullContenido = async (req, res) => {
  try {
    const { categoria } = req.params;
    const juegos = await contenidoCategorias
      .find({ categoria })
      .sort("categoria");
    res.status(200).json(juegos);
  } catch (error) {
    res.status(400).json(error);
  }
};
const agregarPelicula = async (req, res) => {
  const { id, titulo, descripcion, fecha, categoria, poster } = req.body;
  try {
    const pelicula = new contenidoCategorias({
      id: id,
      titulo: titulo,
      descripcion: descripcion,
      fecha: fecha,
      categoria: categoria,
      poster: poster,
    });
    const nuevaPelicula = await pelicula.save();
    res.status(201).json("pelicula agregada correctamente");
  } catch (error) {
    res.status(400).json(error);
  }
};
const eliminarContenido = async (req, res) => {
  const { id } = req.params;
  try {
    const existePeliculas = await contenidoCategorias.findById(id);
    if (existePeliculas) {
      res.status(200).json("Juego eliminado");
      const resultado = await contenidoCategorias.findByIdAndRemove(id);
    } else {
      return res.status(400).json("La pelicula no existe");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
const editarPelicula = async (req, res) => {
  const { id } = req.params;
  const { titulo, poster, categoria } = req.body;
  try {
    const peliculaEditada = await contenidoCategorias.findByIdAndUpdate(id, {
      titulo: titulo,
      poster: poster,
      categoria: categoria,
    });
    res.status(200).json(peliculaEditada);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getPeliculas,
  getContenido,
  getDetalleContenido,
  getFullContenido,
  eliminarContenido,
  agregarPelicula,
  editarPelicula,
};
