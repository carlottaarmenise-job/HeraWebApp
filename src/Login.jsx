import React, { useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulazione autenticazione
    if (email === "demo@hera.com" && password === "password") {
      navigate("/location/profile");
    } else {
      setError("Credenziali non valide. Riprova.");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo Hera" style={{ width: 120 }} />
          <h3 className="mt-3" style={{ color: "var(--secondary)" }}>
            Accedi all'Area Location
          </h3>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Accedi
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginPage;
