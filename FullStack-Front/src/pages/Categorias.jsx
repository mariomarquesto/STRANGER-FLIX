import { useState, useEffect } from "react";
import styles from "./Categorias.module.css";
import clientAxios from "../config/clientAxios";
import GridCategorias from "../Components/GridCategorias/GridCategorias";
const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    clientAxios
      .get("/categorias/getCategorias")
      .then((response) => setCategorias(response.data));
  }, []);
  return (
    <>
      <div>
        <h1 className={styles.titulo}>Categorias</h1>
        {categorias.map((categoria, i) => {
          return <GridCategorias key={i} categoria={categoria.name} />;
        })}
      </div>
    </>
  );
};

export default Categorias;
