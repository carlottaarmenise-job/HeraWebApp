import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./assets/styles.css"; // Assicurati di avere questo file

import logo from "./assets/logo.png"; // Sostituisci con il percorso reale del logo

function HomePage() {
  return (
    <Container className="home-container">
      <div className="home-hero bg-light p-5 rounded-4 text-center">
        <img src={logo} alt="Hera Logo" className="home-logo mb-4" />
        <h1 className="home-title">Benvenuto in Hera Wedding App</h1>
        <p className="lead">Gestisci la tua location in modo semplice e veloce.</p>
        <hr />
        <p>Modifica il profilo, il menù, la vetrina e gestisci le prenotazioni.</p>
        <Button as={Link} to="/location/profile" variant="success" className="mt-3">
          Area Location
        </Button>
      </div>
    </Container>
  );
}

export default HomePage;
