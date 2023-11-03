import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/MyProjects.css";
import MyPicture from "../images/MyPicture.jpg";
import BoschMockUp from "../images/BoschMockUp.jpeg";
import SimacMockUp from "../images/SimacMockUp.jpg";
import SkatrixxMockUp from "../images/SkatrixxMockUp.jpg";
// credits image: https://www.studiozelden.com/cases/swapfiets/
import Swapfiets from "../images/Swapfiets.jpg";

function Home() {
  return (
    <div className="main-container">
      <div className="home-container">
        {/* !!! INTRO SECTION !!! */}
        <div className="intro-container">
          <h1>Content creator,</h1>
          <h1>Web developer</h1>
          <h1>& Services marketer</h1>
          <div className="intro-text">
            <p>Hi, I'm Sesil.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div>
          <img src={MyPicture} className="my-picture" />
        </div>
      </div>
      {/* !!! MY PROJECTS SECTION !!! */}
      <div className="projects-container">
        <h1>My proudest projects</h1>

        <div className="projects">
          {/* Project 1 */}
          <div className="item">
            <img src={BoschMockUp} alt="Image 1" />
            <h3>Internship at Bosch Security Systems</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Project 2 */}
          <div className="item">
            <img src={SimacMockUp} alt="Image 1" />
            <h3>Creating a better Onboarding experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Project 3 */}
          <div className="item">
            <img src={SkatrixxMockUp} alt="Image 1" />
            <h3>Building an app for Skaters</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
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

export default Home;
