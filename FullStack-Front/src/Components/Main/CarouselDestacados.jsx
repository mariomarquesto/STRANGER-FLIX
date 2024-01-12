import React, { useState, useEffect } from "react";
import clientAxios from "../../config/clientAxios";
import styles from "./CarouselDestacados.module.css";
const CarouselDestacados = () => {
  const [movieCarousel, setMovieCarousel] = useState([]);
  const getPeliculas = async () => {
    await clientAxios
      .get("/peliculas/getCarousel")
      .then((response) => {
        setMovieCarousel(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPeliculas();
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.themoviedb.org/t/p/original/tqUD26YGjKmFqOJAgbNBah1gX0N.jpg"
            className={styles.imgCarousel}
            alt="Lightyear"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Lightyear</h5>
            <p>
              Atrapado en un planeta hostil a 4,2 millones de años luz de la
              Tierra junto a su comandante y su tripulación, Buzz Lightyear
              intenta encontrar la manera de volver a casa a través del espacio
              y el tiempo. Pero la llegada de Zurg, una presencia imponente con
              un ejército de robots despiadados y una agenda misteriosa,
              complica aún más las cosas y pone en peligro la misión.
            </p>
          </div>
        </div>
        {movieCarousel.map((destacado, i) => {
          return (
            <div className="carousel-item" key={i}>
              <img
                src={destacado.imgFondo}
                className={styles.imgCarousel}
                alt={destacado.titulo}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{destacado.titulo}</h5>
                <p>{destacado.descripcion}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselDestacados;
