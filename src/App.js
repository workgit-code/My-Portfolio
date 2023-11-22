import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Projects pages/components
import Home from "./components/Home";
import Projects from "./components/Projects";
import BoschProject from "./components/BoschProject";
import OnboardingProject from "./components/OnboardingProject";
import SkatrixxProject from "./components/SkatrixxProject";
import MarketingProject from "./components/MarketingProject";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/boschproject" element={<BoschProject />} />
          <Route
            path="/onboardingproject"
            element={<OnboardingProject />}
          ></Route>
          <Route path="/skatrixxproject" element={<SkatrixxProject />}></Route>
          <Route
            path="/marketingproject"
            element={<MarketingProject />}
          ></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
