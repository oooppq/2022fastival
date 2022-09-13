import React from "react";
// import { Reset } from "styled-reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Flea from "./pages/Flea";
import Food from "./pages/Food";
import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <Router>
      {/* <Reset /> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path="/event:event_id" element={<Event />}></Route> */}

        <Route path="/flea" element={<Flea />}></Route>

        <Route path="/food" element={<Food />}></Route>

        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
