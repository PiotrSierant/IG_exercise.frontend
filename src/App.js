import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IG_exercise.frontend" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
