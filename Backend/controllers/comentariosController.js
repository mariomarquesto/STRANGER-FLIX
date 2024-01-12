const Comentarios = require("../models/comentariosModel");

const getComentarios = async (req, res) => {
  const comentarios = await Comentarios.find({});
  try {
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json("error");
  }
};
const agregarComentarios = async (req, res) => {
  const {email,comentario} = req.body
  try {
    const newComentario = new Comentarios({
      email: email,
      comentario: comentario,
    });
    const nuevoComentario = await newComentario.save();
    res.status(201).json("El comentario se ha creado exitosamente");
  } catch (error) {
    res.status(400).json(error);
  }
};

// const agregarReseña = async (req, res) => {
//   const { email, comentario } = req.body;
//   try {
//     const reseña = new Reseñas({
//       email: email,
//       comentario: comentario,
//     });
//     const nuevaReseña = await reseña.save();
//     res.status(201).json("La reseña se ha creado exitosamente");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

module.exports = {
  agregarComentarios,
  getComentarios,
};
