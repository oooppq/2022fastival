import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestHeader from "./pages/TestHeader";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Flea from "./pages/Flea";
import Food from "./pages/Food";
import Schedule from "./pages/Schedule";
import { OuterTestDiv, AppContainer } from "./styledComponent";
import { useState } from "react";
import Header from "./pages/Header";

const App = () => {
  const [styledCm, setStyledCm] = useState("");
  const navFlag = document.location.href.split("/").slice(-1) !== "";

  return (
    <Router>
      <AppContainer>
        <OuterTestDiv setStyled={styledCm} navFlag={navFlag}>
          {/* logo, nav를 포함한 header */}
          <TestHeader setStyled={setStyledCm} />

          {/* 각각의 페이지로 라우팅 */}
          <Routes>
            <Route path="/" element={<Home />}></Route>

            {/* <Route path="/event:event_id" element={<Event />}></Route> */}

            <Route path="/flea" element={<Flea />}></Route>

            <Route path="/food" element={<Food />}></Route>

            <Route path="/schedule" element={<Schedule />}></Route>
          </Routes>

          {/* 크레딧을 위한 footer */}
          <Footer />
        </OuterTestDiv>
      </AppContainer>
    </Router>
  );
};

export default App;
