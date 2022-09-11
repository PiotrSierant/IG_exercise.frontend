import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IG_exercise.frontend/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/IG_exercise.frontend/About/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
