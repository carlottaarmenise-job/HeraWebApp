import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={2} className="p-0">
          <Sidebar />
        </Col>
        <Col xs={12} md={9} lg={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
