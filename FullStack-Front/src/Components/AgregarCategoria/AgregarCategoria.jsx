import React, { useState } from "react";
import Swal from "sweetalert2";
import clientAxios from "../../config/clientAxios";
import styles from "./AgregarCategoria.module.css";
import Button from "react-bootstrap/Button";

const AgregarCategoria = () => {
  const [categoriaNueva, setCategoriaNueva] = useState({
    name: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    clientAxios
      .post("/categorias/agregarCategoria", {
        name: categoriaNueva.name.toLowerCase()
      })
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Categoria creada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ha ocurrido un error y no se pudo agregar la categoria",
          });
        }
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error y no se pudo agregar la categoria",
        });
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoriaNueva((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container">
        <form
          className="d-flex  flex-column align-items-center"
          onSubmit={handleForm}
        >
          <div className="my-4">
            <label className="text-light" htmlFor="nombre">
              Nombre
            </label>
            <input
              maxLength={20}
              className={`${styles.inputJuego} ms-3`}
              type="text"
              id="name"
              onChange={handleChange}
              name="name"
              placeholder="Ej: Estrenos"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-25">
            Agregar Categoria
          </button>
          <div className="d-flex justify-content-center mt-5">
            <Button href="/adminCategorias" variant="danger" className="my-3">
              Volver a Categorias
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgregarCategoria;
