import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function StatsPage() {
  const [stats, setStats] = useState({
    totalRequests: 18,
    confirmedEvents: 12,
    pendingEvents: 6,
  });

  return (
    <Card className="p-4">
      <h2 className="mb-4">Statistiche Location</h2>

      <Row className="text-center">
        <Col>
          <Card className="p-3">
            <h4>Totale Prenotazioni</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stats.totalRequests}</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <h4>Eventi Confermati</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stats.confirmedEvents}</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <h4>In Attesa</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stats.pendingEvents}</p>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default StatsPage;
