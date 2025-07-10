import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function StatsPage() {
  const [stats] = useState({
    totalRequests: 18,
    confirmedEvents: 12,
    pendingEvents: 6,
  });

  const cardStyle = {
    backgroundColor: "var(--primary)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  };

  const statValueStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: 0,
  };

  return (
    <Card className="p-4 shadow-sm">
      <h2 className="mb-4 text-center" style={{ color: "var(--primary)" }}>
        Statistiche Location
      </h2>

      <Row className="text-center g-3">
        <Col md={4}>
          <Card className="p-4" style={cardStyle}>
            <p style={titleStyle}>Totale Prenotazioni</p>
            <div style={statValueStyle}>{stats.totalRequests}</div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4" style={cardStyle}>
            <p style={titleStyle}>Eventi Confermati</p>
            <div style={statValueStyle}>{stats.confirmedEvents}</div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4" style={cardStyle}>
            <p style={titleStyle}>In Attesa</p>
            <div style={statValueStyle}>{stats.pendingEvents}</div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default StatsPage;
