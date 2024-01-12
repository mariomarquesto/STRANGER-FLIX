const { Router } = require("express");
const route = Router();
const { peliculasId } = require("../controllers/peliculasIdController");

route.get("/:peliculaId", peliculasId);


module.exports = route;
