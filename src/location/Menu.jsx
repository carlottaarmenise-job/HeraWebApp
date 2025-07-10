import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

function MenuEditor() {
  // Definiamo i range fissi di persone
  const fixedRanges = [
    { label: "0-50", min: 0, max: 50 },
    { label: "51-100", min: 51, max: 100 },
    { label: "101-200", min: 101, max: 200 },
    { label: "200+", min: 201, max: null },
  ];

  // Prezzi associati a ciascun range
  const [priceRanges, setPriceRanges] = useState({
    "0-50": "",
    "51-100": "",
    "101-200": "",
    "200+": "",
  });

  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: "", price: "", image: "" });

  // Gestione cambio prezzo range persone
  const handleRangePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRanges({ ...priceRanges, [name]: value });
  };

  // Gestione cambio dati nuovo piatto
  const handleNewDishChange = (e) => {
    const { name, value } = e.target;
    setNewDish({ ...newDish, [name]: value });
  };

  // Aggiungi piatto
  const addDish = () => {
    if (!newDish.name || !newDish.price) return;
    setDishes([...dishes, newDish]);
    setNewDish({ name: "", price: "", image: "" });
  };

  return (
    <Card className="p-4">
      <h2 className="mb-4">Editor Menù</h2>

      <h4>Prezzi per Range Persone</h4>
      <Form.Group className="mb-3">
        {fixedRanges.map((range) => (
          <Row key={range.label} className="align-items-center mb-2">
            <Col xs={4}>
              <Form.Label>{range.label} persone</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control
                type="number"
                name={range.label}
                value={priceRanges[range.label]}
                onChange={handleRangePriceChange}
                placeholder="Inserisci prezzo (€)"
                min="0"
              />
            </Col>
          </Row>
        ))}
      </Form.Group>

      <h4>Aggiungi Piatto</h4>
      <Row className="mb-3">
        <Col>
          <Form.Control
            placeholder="Nome"
            name="name"
            value={newDish.name}
            onChange={handleNewDishChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Prezzo €"
            type="number"
            name="price"
            value={newDish.price}
            onChange={handleNewDishChange}
            min="0"
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="URL immagine"
            name="image"
            value={newDish.image}
            onChange={handleNewDishChange}
          />
        </Col>
        <Col xs="auto">
          <Button onClick={addDish}>Aggiungi</Button>
        </Col>
      </Row>

      <h4>Piatti</h4>
      {dishes.length === 0 && <p>Nessun piatto aggiunto.</p>}
      {dishes.map((dish, idx) => (
        <Card key={idx} className="mb-2 p-3">
          <Row>
            <Col md={3}>
              {dish.image && (
                <img
                  src={dish.image}
                  alt={dish.name}
                  style={{ width: "100%", maxHeight: 100, objectFit: "cover" }}
                />
              )}
            </Col>
            <Col>
              <h5>{dish.name}</h5>
              <p>Prezzo: €{dish.price}</p>
            </Col>
          </Row>
        </Card>
      ))}
    </Card>
  );
}

export default MenuEditor;
