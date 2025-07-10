import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        {/* Homepage SENZA sidebar */}
        <Route path="/" element={<HomePage />} />

        {/* Tutto il resto CON sidebar */}
        <Route path="/" element={<Layout />}>
          <Route path="location/profile" element={<LocationProfile />} />
          <Route path="location/menu" element={<MenuEditor />} />
          <Route path="location/bookings" element={<BookingManager />} />
          <Route path="location/stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
