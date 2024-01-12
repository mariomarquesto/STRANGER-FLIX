import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import clientAxios from "../config/clientAxios";
import styles from "./AdminUsuarios.module.css";

const AdminCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    clientAxios
      .get("/categorias/getCategorias")
      .then((response) => setCategorias(response.data));
  }, [flag]);
  const eliminarCategoria = (id) => {
    if (window.confirm("Seguro quieres eliminar esta categoria?")) {
      clientAxios
        .delete(`/categorias/eliminarCategoria/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ha ocurrido un error y no se pudo eliminar esta categoria",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Categoria eliminada",
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
            text: "Ha ocurrido un error y no se pudo eliminar esta categoria",
          });
        });
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <h1>Categorias</h1>
      </div>
      <div className="d-flex justify-content-end me-5 ">
        <Button href="/agregarCategoria" variant="danger">
          Agregar
        </Button>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="text-light">
              <th scope="col">Categoria</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, i) => (
              <tr key={i}>
                <td className="text-light">{categoria.name}</td>
                <td>
                  <button
                    className={`${styles.boton}`}
                    onClick={() => eliminarCategoria(categoria._id)}
                  >
                    <MdDelete size={25} color={"white"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button href="/admin" variant="danger" className="my-3">
          Volver a Administracion
        </Button>
      </div>
    </div>
  );
};

export default AdminCategorias;
