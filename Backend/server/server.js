const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const morgan = require("morgan");
const port = 8080;
require("../dataBase/connection");

const peliculasRoutes = require("../routes/peliculasRoute");
const peliculaByIdRoute = require("../routes/peliculaByIdRoute");
const categoriasRoutes = require("../routes/categoriasRoute");
const popularesRoute = require("../routes/popularesRoute");
const proximamenteRoute = require("../routes/proximamenteRoute");
const valoradasRoute = require("../routes/valoradasRoute");
const seriesTvRoute = require("../routes/seriesTvRoute");
const contenidoCategorias = require("../routes/contenidoCategoriasRoute");
const containerComentarios = require("../routes/comentariosRoute");
const userRoutes = require("../routes/usersRoute");
const loginRoutes = require("../routes/loginRoutes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/peliculas", peliculasRoutes);
app.use("/peliculasById", peliculaByIdRoute);
app.use("/categorias", categoriasRoutes);
app.use("/peliculasPopulares", popularesRoute);
app.use("/peliculasProximas", proximamenteRoute);
app.use("/peliculasValoradas", valoradasRoute);
app.use("/peliculasSeriesTv", seriesTvRoute);
app.use("/contenidoCategorias", contenidoCategorias);
app.use("/comentarios", containerComentarios);
app.use("/registro", userRoutes);
app.use("/login", loginRoutes);

app.listen(process.env.PORT || port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
