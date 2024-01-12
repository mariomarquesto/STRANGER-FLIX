import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import PaginaDetalle from "./pages/PaginaDetalle";
import DetalleCategoria from "./pages/DetalleCategoria";
import FullContenido from "./pages/FullContenido";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";
import Error404 from "./pages/Error404";
import Header from "../src/Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import AdminCategorias from "./pages/AdminCategorias";
import AdminPeliculas from "./pages/AdminPeliculas";
import AdminUsuarios from "./pages/AdminUsuarios";
import AgregarCategoria from "./Components/AgregarCategoria/AgregarCategoria";
import AgregarPelicula from "./Components/AgregarPelicula/AgregarPelicula";
// import clientAxios from "./config/clientAxios";

function App() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <BrowserRouter>
        {user && <Header />}
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          {user && user.role === "admin" && (
            <Route path="/admin" element={<Admin />} />
          )}
          <Route path="/error404" element={<Error404 />} />
          <Route path="/registro" exact element={<Registro />} />
          <Route path="/login" exact element={<Login />} />
          {user && <Route path="/categorias" element={<Categorias />} />}
          {user && (
            <Route
              path="/fullContenido/:categoria"
              element={<FullContenido />}
            />
          )}
          {user && (
            <Route path="/pelicula/:peliculaId" element={<PaginaDetalle />} />
          )}
          {user && (
            <Route
              path="/detalleCategoria/:detalleId"
              element={<DetalleCategoria />}
            />
          )}
          <Route path="*" element={<Navigate replace to="/error404" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          {user && user.role === "admin" && (
            <Route path="/adminCategorias" element={<AdminCategorias />} />
          )}
          {user && user.role === "admin" && (
            <Route path="/adminPeliculas" element={<AdminPeliculas />} />
          )}
          {user && user.role === "admin" && (
            <Route path="/adminUsuarios" element={<AdminUsuarios />} />
          )}
          {user && user.role === "admin" && (
            <Route path="/agregarCategoria" element={<AgregarCategoria />} />
          )}
          {user && user.role === "admin" && (
            <Route path="/agregarPelicula" element={<AgregarPelicula />} />
          )}
        </Routes>
        {user && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
