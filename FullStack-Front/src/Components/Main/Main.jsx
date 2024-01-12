import React from "react";
import GrillaPeliculas from "./GrillaPeliculas";
import styles from "./Main.module.css";
import CarouselDestacados from "./CarouselDestacados";
const Main = () => {
  return (
    <>
      <CarouselDestacados />

      <h1 className={styles.title}>Peliculas Populares</h1>

      <GrillaPeliculas />
    </>
  );
};

export default Main;
