import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LocationProfile from "./location/Profile";
import MenuEditor from "./location/Menu";
import BookingManager from "./location/Bookings";
import StatsPage from "./location/Stats";
import HomePage from "./Homepage";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/location/profile" element={<LocationProfile />} />
          <Route path="/location/menu" element={<MenuEditor />} />
          <Route path="/location/bookings" element={<BookingManager />} />
          <Route path="/location/stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

