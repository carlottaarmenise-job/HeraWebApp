import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/location/profile", label: "Profilo Location" },
    { to: "/location/menu", label: "Menù" },
    { to: "/location/bookings", label: "Prenotazioni" },
    { to: "/location/stats", label: "Statistiche" },
  ];

  return (
    <Nav className="flex-column bg-light vh-100 p-3" style={{ width: "250px" }}>
      <h5 className="mb-4">Menu Location</h5>
      {links.map(({ to, label }) => (
        <Nav.Item key={to}>
          <Nav.Link
            as={Link}
            to={to}
            active={location.pathname === to}
            style={{ cursor: "pointer" }}
          >
            {label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Sidebar;
