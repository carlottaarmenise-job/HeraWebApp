import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container className="mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1>Benvenuto in Hera Wedding App</h1>
        <p className="lead">
          Gestisci la tua location in modo semplice e veloce.
        </p>
        <hr />
        <p>
          Modifica il profilo, il menù, la vetrina e gestisci le prenotazioni.
        </p>
        <Button as={Link} to="/location/profile" variant="primary">
          Area Location
        </Button>
      </div>
    </Container>
  );
}

export default HomePage;
