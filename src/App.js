import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IG_exercise.frontend" element={<Home />} />
        <Route path="/IG_exercise.frontend/" element={<Home />} />
        <Route path="*" element={<h1> not found </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
