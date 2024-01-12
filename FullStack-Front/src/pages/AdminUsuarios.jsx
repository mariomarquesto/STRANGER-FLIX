import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import clientAxios from "../config/clientAxios";
import styles from "./AdminUsuarios.module.css";
const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    clientAxios.get("/registro").then((response) => setUsuarios(response.data));
  }, [flag]);
  const eliminarUsuario = (id) => {
    if (window.confirm("Estas seguro de eliminar este usuario")) {
      clientAxios
        .delete(`/registro/userDelete/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ha ocurrido un error y no se pudo eliminar el usuario",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Usuario eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
            setFlag(!flag);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: `${error.response.data.mensaje}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <h1>Usuarios</h1>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="text-light">
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user._id}>
                <td className="text-light">{user.email}</td>
                <td className="text-light">{user.role}</td>
                <td>
                  <button
                    className={`${styles.boton}`}
                    onClick={() => eliminarUsuario(user._id)}
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

export default AdminUsuarios;
