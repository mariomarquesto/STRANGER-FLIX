import React, { useState, useEffect } from "react";
import clientAxios from "../../config/clientAxios";
import styles from "./GridCategorias.module.css";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
const GridCategorias = ({ categoria }) => {
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    clientAxios
      .get(`/contenidoCategorias/filtrarContenido/${categoria}`)
      .then((response) => setContenido(response.data));
  }, [categoria]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-around shadow rounded my-3 pb-3">
          <p className="fs-1 text-center text-light">{categoria}</p>
          {contenido.map((data,i) => {
            return <Cards contenido={data} key={i} />;
          })}
          <Link to={`/fullContenido/${categoria}`}>
            <button className={`${styles.boton} text-end mt-4`}>
              Ver todos
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GridCategorias;
