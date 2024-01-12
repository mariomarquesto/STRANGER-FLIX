import React, { useState } from "react";
import Swal from "sweetalert2";
import clientAxios from "../../config/clientAxios";
import styles from "./AgregarPelicula.module.css";
import Button from "react-bootstrap/Button";

const AgregarPelicula = () => {
  const [peliculaNueva, setPeliculaNueva] = useState({
    id: "",
    titulo: "",
    fecha: "",
    descripcion: "",
    categoria: "",
    poster: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    clientAxios
      .post("/contenidoCategorias/agregarPelicula", {
        id: peliculaNueva.id,
        titulo: peliculaNueva.titulo,
        fecha: peliculaNueva.fecha,
        descripcion: peliculaNueva.descripcion,
        categoria: peliculaNueva.categoria,
        poster: peliculaNueva.poster,
      })
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Juego agregado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ha ocurrido un error y no se pudo agregar el juego",
          });
        }
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error y no se pudo agregar el juego",
        });
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeliculaNueva((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container my-5 d-flex flex-column">
        <h2 className="text-light text-center">Describe la pelicula:</h2>
        <form onSubmit={handleForm} className="d-flex justify-content-center">
          <div className="row flex-column">
            <div className="my-4">
              <label className="text-light" htmlFor="id">
                Id
              </label>
              <input
                minLength={6}
                maxLength={6}
                className={`${styles.inputJuego} ms-3`}
                type="Number"
                id="id"
                name="id"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <label className="text-light" htmlFor="titulo">
                Titulo
              </label>
              <input
                minLength={4}
                maxLength={25}
                className={`${styles.inputJuego} ms-3`}
                type="text"
                id="titulo"
                name="titulo"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <label className="text-light" htmlFor="fecha">
                Fecha
              </label>
              <input
                minLength={10}
                maxLength={10}
                className={` ${styles.inputJuego} ms-3`}
                type="date"
                id="fecha"
                name="fecha"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4 d-flex align-items-center">
              <label className="text-light" htmlFor="descripcion">
                Descripcion
              </label>
              <textarea
                cols={30}
                minLength={10}
                maxLength={300}
                rows={6}
                className={`ms-3`}
                type="text"
                id="descripcion"
                onChange={handleChange}
                name="descripcion"
                required
              />
            </div>
            <div className="my-4">
              <label className="text-light" htmlFor="categoria">
                Categoria
              </label>
              <input
                minLength={4}
                maxLength={15}
                className={`${styles.inputJuego} ms-3`}
                type="text"
                id="categoria"
                name="categoria"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <label className="text-light" htmlFor="poster">
                Poster
              </label>
              <input
                minLength={10}
                maxLength={100}
                className={` ${styles.inputJuego} ms-3`}
                type="text"
                id="poster"
                onChange={handleChange}
                name="poster"
                required
              />
            </div>
            <button className="btn btn-success" type="submit">
              Agregar Pelicula
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-5">
          <Button href="/adminPeliculas" variant="danger">
            Volver a Peliculas
          </Button>
        </div>
      </div>
    </>
  );
};

export default AgregarPelicula;
