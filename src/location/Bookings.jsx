import React, { useState } from "react";
import { Card, Form, Button, ListGroup, Modal } from "react-bootstrap";

function BookingManager() {
  const [requests, setRequests] = useState([
    { id: 1, user: "Mario Rossi", date: "2025-08-12", budget: 5000, spent: 4800 },
    { id: 2, user: "Luisa Verdi", date: "2025-09-18", budget: 3000, spent: 3100 },
  ]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmation, setConfirmation] = useState({ date: "", time: "" });

  const handleConfirm = () => {
    alert(
      `Prenotazione confermata per ${selected.user} il ${confirmation.date} alle ${confirmation.time}`
    );
    setShowModal(false);
  };

  const handleTokenGenerate = () => {
    const token = Math.random().toString(36).substr(2, 8).toUpperCase();
    alert(`Token generato per ${selected.user}: ${token}`);
  };

  return (
    <Card className="p-4">
      <h2 className="mb-4">Gestione Prenotazioni</h2>

      <ListGroup>
        {requests.map((req) => (
          <ListGroup.Item
            key={req.id}
            action
            onClick={() => {
              setSelected(req);
              setShowModal(true);
            }}
          >
            Richiesta da {req.user} - {req.date}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Dettagli Prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <>
              <p><strong>Utente:</strong> {selected.user}</p>
              <p><strong>Data richiesta:</strong> {selected.date}</p>
              <p><strong>Budget:</strong> €{selected.budget}</p>
              <p><strong>Spesa:</strong> €{selected.spent}</p>
              <p>
                <strong>Esito:</strong>
                {selected.spent <= selected.budget
                  ? " All'interno del budget"
                  : " Fuori budget di €" + (selected.spent - selected.budget)}
              </p>
              <hr />
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Data Conferma</Form.Label>
                  <Form.Control
                    type="date"
                    value={confirmation.date}
                    onChange={(e) =>
                      setConfirmation({ ...confirmation, date: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Ora Conferma</Form.Label>
                  <Form.Control
                    type="time"
                    value={confirmation.time}
                    onChange={(e) =>
                      setConfirmation({ ...confirmation, time: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTokenGenerate}>
            Genera Token Voto
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Conferma Appuntamento
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default BookingManager;