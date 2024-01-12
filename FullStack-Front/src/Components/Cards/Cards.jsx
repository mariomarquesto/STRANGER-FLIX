import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
const Cards = ({ contenido }) => {
  return (
    <>
      <div
        className={`${styles.card} col-sm-7 col-md-3 col-lg-2 d-flex flex-wrap justify-content-center me-1 mt-5 p-0`}
      >
        <Link to={`/detalleCategoria/${contenido.id}`}>
          <img
            className={`${styles.img} rounded-top img-fluid`}
            src={contenido.poster}
            alt={contenido.titulo}
          />
        </Link>
      </div>
    </>
  );
};

export default Cards;
