const express = require("express");
const router = express.Router();
const {
  agregarCategoria,
  Categorias,
  eliminarCategoria,
} = require("../controllers/categoriasController");
const { ensureAdmin } = require("../middleware/ensureAdmin");
const { body } = require("express-validator");
const { categoriaExiste } = require("../helpers/validation");

router.get("/getCategorias", Categorias);
router.post(
  "/agregarCategoria",
  ensureAdmin,
  body("name").custom(categoriaExiste),
  agregarCategoria
);
router.delete("/eliminarCategoria/:id", ensureAdmin, eliminarCategoria);

module.exports = router;
