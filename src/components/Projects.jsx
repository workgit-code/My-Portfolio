import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/MyProjects.css";
import BoschMockUp from "../images/BoschMockUp.jpeg";
import SimacMockUp from "../images/SimacMockUp.jpg";
import SkatrixxMockUp from "../images/SkatrixxMockUp.jpg";
import Swapfiets from "../images/Swapfiets.jpg";

function Projects() {
  return (
    <div className="main-container">
      <div className="projects-container">
        <h1>My proudest projects</h1>

        <div className="projects">
          {/* Project 1 */}
          <Link
            to="/boschproject"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="item">
              <img src={BoschMockUp} alt="Image 1" />
              <h3>Internship at Bosch Security Systems</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            to="/onboardingproject"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="item">
              <img src={SimacMockUp} alt="Image 1" />
              <h3>Creating a better Onboarding experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Link>
          {/* Project 3 */}
          <Link
            to="/skatrixxproject"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="item">
              <img src={SkatrixxMockUp} alt="Image 1" />
              <h3>Building an app for Skaters</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Link>
          {/* Project 4 */}
          <div className="item">
            <img src={Swapfiets} alt="Image 1" />
            <h3>A marketing project</h3>
            <p>Complete project coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;