const { Router } = require("express");
const route = Router();
const {
  getPeliculas,
  series,
} = require("../controllers/seriesTvController");

route.get("/getSeries", series);
route.get("/", getPeliculas);
module.exports = route;
