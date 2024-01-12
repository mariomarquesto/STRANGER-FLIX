import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Admin.module.css";
const Admin = () => {
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center flex-wrap mt-5">
        <Card className="m-4 bg-dark" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://conceptodefinicion.de/wp-content/uploads/2020/11/usuario.jpg"
          />
          <Card.Body className={styles.centradoBody}>
            <Card.Title className="mb-3">Usuarios</Card.Title>
            <Button href="/adminUsuarios" variant="danger">
              Ir a Usuarios
            </Button>
          </Card.Body>
        </Card>
        <Card className="m-4 bg-dark" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/5b/aa/c5/5baac533db7c93113c40709ce2c176e0.jpg"
          />
          <Card.Body className={styles.centradoBody}>
            <Card.Title className="mb-3">Categorias</Card.Title>
            <Button href="/adminCategorias" variant="danger">
              Ir a Categorias
            </Button>
          </Card.Body>
        </Card>
        <Card className="m-4 bg-dark" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://es.web.img3.acsta.net/r_654_368/newsv7/22/06/01/10/27/5428522.jpg"
          />
          <Card.Body className={styles.centradoBody}>
            <Card.Title className="mb-3">Peliculas</Card.Title>
            <Button href="/adminPeliculas" variant="danger">
              Ir a Peliculas
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Admin;
