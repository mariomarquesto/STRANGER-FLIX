import React from "react";
// import "./Footer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" container-fluid bg-dark text-white ">
      <div className="row">
        <div className="container-fluid col d-flex justify-content-center">
          <div className="row">
            <span className="fw-bolder">Información</span>
            <Link to={"/error404"}>Acerca de nosotros</Link>
            <Link to={"/error404"}>Avisos Legales</Link>
            <Link to={"/error404"}>Ayuda</Link>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div className="row ">
            <span className="fw-bolder">Registrate Gratis</span>
            <div>
              <Button
                href="/registro"
                variant="danger"
                className="d-flex justify-content-center"
              >
                Registrate
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid row">
        <div className="col-container-fluid">
          <div className="col d-flex justify-content-evenly">
            <Link to={"/error404"}>
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to={"/error404"}>
              <i className="bi bi-meta"></i>
            </Link>
            <Link to={"/error404"}>
              <i className="bi bi-github"></i>
            </Link>
            <Link to={"/error404"}>
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="  d-flex justify-content-center align-items-center fst-italic 
      "
      >
        Copyright © 2022
      </div>
    </div>
  );
};

export default Footer;
