import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import clientAxios from "../config/clientAxios";
import styles from "./PaginaDetalle.module.css";
import Loader from "../Loader/Loader";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
const DetalleCategoria = () => {
  const { detalleId } = useParams();
  const [detalle, setDetalle] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  
  const alertComentario = () => {
    Swal.fire({
      icon: "success",
      title: "Comentario Enviado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    clientAxios
      .get(`/contenidoCategorias/verDetalle/${detalleId}`)
      .then((response) => {
        setDetalle(response.data);
        setIsLoader(true);
      });
  }, [detalleId]);
  return (
    <>
      {isLoader ? (
        <>
          <div className={styles.detalleContainer}>
            <img
              className={`${styles.col} ${styles.detalleImagen}`}
              src={detalle.poster}
              alt={detalle.titulo}
            />
            <div className={styles.col}>
              <p className={styles.firstItem}>
                <strong>Titulo: </strong>
                {detalle.titulo}
              </p>
              <p>
                <strong>Descripcion:</strong> {detalle.descripcion}
              </p>
              <p>
                <strong>Fecha de Estreno: </strong>
                {detalle.fecha}
              </p>
              <form>
                <h2>Deja tu comentario:</h2>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Reseña
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <Button variant="danger" onClick={() => alertComentario()}>Enviar</Button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DetalleCategoria;
