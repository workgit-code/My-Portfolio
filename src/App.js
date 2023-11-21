import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Projects pages/components
import Home from "./components/Home";
import Projects from "./components/Projects";
import BoschProject from "./components/BoschProject";
import OnboardingProject from "./components/OnboardingProject";
import SkatrixxProject from "./components/SkatrixxProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/boschproject" element={<BoschProject />} />
          <Route
            path="/onboardingproject"
            element={<OnboardingProject />}
          ></Route>
          <Route path="/skatrixxproject" element={<SkatrixxProject />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
