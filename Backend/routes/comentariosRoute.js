const express = require("express");
const router = express.Router();
const { getComentarios, agregarComentarios } = require("../controllers/comentariosController");

router.get("/getComentarios", getComentarios);
router.post("/agregarComentario", agregarComentarios);

module.exports = router;
