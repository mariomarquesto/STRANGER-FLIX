const { Router } = require("express");
const { ensureAdmin } = require("../middleware/ensureAdmin");
const route = Router();
const {
  getPeliculas,
  getContenido,
  getDetalleContenido,
  getFullContenido,
  eliminarContenido,
  agregarPelicula,
  editarPelicula,
} = require("../controllers/contenidoCategoriasController");
route.get("/", getPeliculas);
route.get("/filtrarContenido/:categoria", getContenido);
route.get("/getFullContenido/:categoria", getFullContenido);
route.get("/verDetalle/:detalleId", getDetalleContenido);
route.post("/agregarPelicula", ensureAdmin, agregarPelicula);
route.delete("/eliminar/:id", ensureAdmin, eliminarContenido);
route.patch("/editarPelicula/:id", ensureAdmin, editarPelicula);
module.exports = route;
