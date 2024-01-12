import React from "react";
import Image from "../assets/img/error.jpg";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <section
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-12"></div>
            <Card
              className="card bg-dark-overlay-4 overflow-hidden card-bg-scale  mt-5 mb-4 text-center"
              style={{
                background: "rgba( 255, 255, 255, 0.2 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                width: "50vw",
                height: "50vh",
              }}
            >
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 my-auto">
                  <Card.Title className="text-white display-4">404</Card.Title>
                  <h2 className="text-white display-5">
                    No se encuentra la página buscada
                  </h2>
                  <div className="d-flex justify-content-center">
                    {/*  <Link to="/" className="btn btn-danger mt-3">
                        Volver al inicio
                      </Link> */}
                  </div>
                  <Link to="/">
                    <button type="button" className="btn btn-primary my-4">
                      Volver
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error404;
