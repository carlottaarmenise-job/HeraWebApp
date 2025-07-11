import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar fissa su desktop */}
      <div className="d-none d-md-block" style={{ width: "250px" }}>
        <Sidebar />
      </div>

      {/* Offcanvas SOLO su mobile (d-md-none) */}
      <div className="d-md-none">
        <Offcanvas
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
          placement="start"
          style={{width: 'fit-content'}}
        >
            <Sidebar onNavigate={() => setShowSidebar(false)} />
        </Offcanvas>
      </div>


      {/* Main content */}
      <div style={{ flex: 1 }}>
        {/* Bottone visibile solo su mobile */}
        <div className="d-md-none p-3 border-bottom" >
          <Button variant="outline-primary" style={{backgroundColor:'var(--primary)', borderColor:'var(--secondary)', color:'var(--secondary)'}} onClick={() => setShowSidebar(true)}>
            ☰
          </Button>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
