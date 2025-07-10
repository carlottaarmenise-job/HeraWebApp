import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

function MenuEditor() {
  const fixedRanges = [
    { label: "0-50", min: 0, max: 50 },
    { label: "51-100", min: 51, max: 100 },
    { label: "101-200", min: 101, max: 200 },
    { label: "200+", min: 201, max: null },
  ];

  const [priceRanges, setPriceRanges] = useState({
    "0-50": "",
    "51-100": "",
    "101-200": "",
    "200+": "",
  });

  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: "", price: "", image: "" });

  const handleRangePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRanges({ ...priceRanges, [name]: value });
  };

  const handleNewDishChange = (e) => {
    const { name, value } = e.target;
    setNewDish({ ...newDish, [name]: value });
  };

  const addDish = () => {
    if (!newDish.name || !newDish.price) return;
    setDishes([...dishes, newDish]);
    setNewDish({ name: "", price: "", image: "" });
  };

  return (
    <Card className="p-4 shadow" style={{ backgroundColor: "var(--primary)", border: "none" }}>
      <h2 className="mb-4 text-white text-center">Editor Menù</h2>

      <div className="mb-4 p-3 rounded" style={{ backgroundColor: "white" }}>
        <h4 style={{ color: "var(--secondary)" }}>Prezzi per Range Persone</h4>
        <Form.Group className="mt-3">
          {fixedRanges.map((range) => (
            <Row key={range.label} className="align-items-center mb-3">
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
      </div>

      <div className="mb-4 p-3 rounded" style={{ backgroundColor: "white" }}>
        <h4 style={{ color: "var(--secondary)" }}>Aggiungi Piatto</h4>
        <Row className="mb-3 mt-2">
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
            <Button variant="success" onClick={addDish}>
              Aggiungi
            </Button>
          </Col>
        </Row>
      </div>

      <div>
        <h4 className="text-white">Piatti</h4>
        {dishes.length === 0 && (
          <p className="text-white">Nessun piatto aggiunto.</p>
        )}
        {dishes.map((dish, idx) => (
          <Card key={idx} className="mb-3 p-3 shadow-sm border-0">
            <Row>
              <Col md={3}>
                {dish.image && (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </Col>
              <Col>
                <h5 style={{ color: "var(--secondary)" }}>{dish.name}</h5>
                <p>Prezzo: €{dish.price}</p>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </Card>
  );
}

export default MenuEditor;
