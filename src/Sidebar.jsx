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
    <div
      className="p-4 d-flex flex-column"
      style={{
        height: '100%',
        minHeight:'100vh',
        width: "250px",
        alignItems: 'center',
        backgroundColor: "var(--primary)",
        color: "white",
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src="/logo.png" alt="Logo" style={{ width: "100%", maxWidth: 160, marginBottom: 20 }} />

      <Nav className="flex-column">
        {links.map(({ to, label }) => (
          <Nav.Item key={to}>
            <Nav.Link
              as={Link}
              to={to}
              active={location.pathname === to}
              style={{
                color: location.pathname === to ? "white" : "var(--secondary)",
                backgroundColor:
                  location.pathname === to ? "rgba(255,255,255,0.2)" : "transparent",
                borderRadius: "8px",
                padding: "10px 12px",
                marginBottom: "6px",
                fontWeight: location.pathname === to ? "bold" : "normal",
              }}
            >
              {label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
