const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  peliculas,
} = require("../controllers/valoradosController");

route.get("/getPeliculas", peliculas);
route.get("/", getPeliculas);
module.exports = route;
