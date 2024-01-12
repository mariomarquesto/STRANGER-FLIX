const { Router } = require("express");
const route = Router();
const { ensureAdmin } = require("../middleware/ensureAdmin");
const {
  getPeliculas,
  peliculas,
  getCarousel,
  buscarYEditar,
} = require("../controllers/peliculasController");

route.get("/getPeliculas", ensureAdmin, peliculas);
route.get("/", getPeliculas);
route.get("/getCarousel", getCarousel);
route.get("/getEdit", buscarYEditar);

module.exports = route;
