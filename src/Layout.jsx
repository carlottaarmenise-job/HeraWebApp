import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
