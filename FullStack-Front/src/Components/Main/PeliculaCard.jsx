import { Link } from "react-router-dom";
import styles from "./PeliculaCard.module.css";

const PeliculaCard = ({ movie }) => {
  return (
    <li className={styles.peliculaCard}>
      <Link to={"/pelicula/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.peliculaImagen}
          src={movie.poster}
          alt={movie.titulo}
        />
        <div>{movie.titulo}</div>
      </Link>
    </li>
  );
};

export default PeliculaCard;
