import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import clientAxios from "../config/clientAxios";
import styles from "./AdminPeliculas.module.css";
import truncate from "../helpers/truncate";
const AdminPeliculas = () => {
  const [fullPeliculas, setFullPeliculas] = useState([]);
  const [peliculaEditada, setPeliculaEditada] = useState({
    id: "",
    titulo: fullPeliculas.titulo,
    poster: fullPeliculas.poster,
    categoria: fullPeliculas.categoria,
  });
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    clientAxios
      .get("/contenidoCategorias/")
      .then((response) => setFullPeliculas(response.data));
  }, [flag]);
  const eliminarPelicula = (id) => {
    if (
      window.confirm("Estas completamente seguro de eliminar esta pelicula?")
    ) {
      clientAxios
        .delete(`/contenidoCategorias/eliminar/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ha ocurrido un error y no se pudo eliminar la pelicula",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Pelicula eliminada",
              showConfirmButton: false,
              timer: 1500,
            });
            setFlag(!flag);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ha ocurrido un error y no se pudo eliminar la pelicula",
          });
        });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    clientAxios
      .patch(
        `/contenidoCategorias/editarPelicula/${peliculaEditada.id}`,
        peliculaEditada
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Pelicula editada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocurrio un error y no se pudo editar",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setFlag(!flag);
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ocurrio un error terrible",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeliculaEditada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <h1>Listado de Peliculas</h1>
      </div>
      <div className="d-flex justify-content-end me-5 ">
        <Button href="/agregarPelicula" variant="danger">
          Agregar
        </Button>
      </div>
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="text-light">
                <th scope="col">id</th>
                <th scope="col">Titulo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Categoria</th>
                <th scope="col">Poster</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {fullPeliculas.map((pelicula, i) => (
                <tr key={i}>
                  <td className="text-light">{pelicula.id}</td>
                  <td className="text-light">{pelicula.titulo}</td>
                  <td className="text-light">{pelicula.fecha}</td>
                  <td className="text-light">
                    {truncate(pelicula.descripcion)}
                  </td>
                  <td className="text-light">{pelicula.categoria}</td>
                  <td className="text-light">{pelicula.poster}</td>
                  <td>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal-${pelicula._id}`}
                      className={`${styles.botonEditar}`}
                    >
                      <FaEdit color="white" size={28} />
                    </button>
                    <div
                      className="modal fade"
                      id={`modal-${pelicula._id}`}
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Editar Pelicula
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form className="modal-body" onSubmit={handleForm}>
                            <div className="my-4">
                              <label htmlFor="id">Id</label>
                              <input
                                className={` ${styles.inputPelicula} ms-3`}
                                type="text"
                                onChange={handleChange}
                                defaultValue={pelicula.id}
                                id="id"
                                name="id"
                              />
                            </div>
                            <span>
                              Reemplazar el id actual por este codigo:{" "}
                              {pelicula._id}
                            </span>
                            <div className="my-4">
                              <label htmlFor="titulo">Titulo</label>
                              <input
                                minLength={4}
                                maxLength={20}
                                className={` ${styles.inputPelicula} ms-3`}
                                onChange={handleChange}
                                defaultValue={pelicula.titulo}
                                type="text"
                                id="titulo"
                                name="titulo"
                                required
                              />
                            </div>
                            <div className="my-4">
                              <label htmlFor="poster">Poster</label>
                              <input
                                minLength={10}
                                maxLength={300}
                                className={`${styles.inputPelicula} ms-3`}
                                type="text"
                                onChange={handleChange}
                                defaultValue={pelicula.poster}
                                id="poster"
                                name="poster"
                                required
                              />
                            </div>
                            <div className="my-4">
                              <label htmlFor="categoria">Categoria</label>
                              <input
                                minLength={4}
                                maxLength={30}
                                className={` ${styles.inputPelicula} ms-3`}
                                type="text"
                                onChange={handleChange}
                                defaultValue={pelicula.categoria}
                                id="categoria"
                                name="categoria"
                                required
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </button>
                              <button type="submit" className="btn btn-primary">
                                Guardar cambios
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      className={`${styles.boton}`}
                      onClick={() => eliminarPelicula(pelicula._id)}
                    >
                      <MdDelete size={25} color={"white"} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5 ">
        <Button href="/admin" variant="danger">
          Volver a Administracion
        </Button>
      </div>
    </div>
  );
};

export default AdminPeliculas;
