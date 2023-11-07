import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BoschProject from "./components/BoschProject";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <Navbar />
      <Home /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boschproject" element={<BoschProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
