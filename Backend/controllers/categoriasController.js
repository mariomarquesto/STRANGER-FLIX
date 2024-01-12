const Categoria = require("../models/categoriasModel");
const { validationResult } = require("express-validator");

const Categorias = async (req, res) => {
  const categorias = await Categoria.find({});
  try {
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json("errorr");
  }
};

const agregarCategoria = async (req, res) => {
  const { name, id } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  try {
    const categoria = new Categoria({
      name: name,
      id: id,
    });
    const nuevaCategoria = await categoria.save();
    res.status(201).json("La categoria se ha creado exitosamente");
  } catch (error) {
    res.status(400).json(error);
  }
};
const eliminarCategoria = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const existeCategoria = await Categoria.findById(id);
    if (existeCategoria) {
      res.status(200).json("Categoria eliminada");
      const resultado = await Categoria.findByIdAndRemove(id);
    } else {
      return res.status(400).json("La categoria no existee");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  agregarCategoria,
  Categorias,
  eliminarCategoria,
};
