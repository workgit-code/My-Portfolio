import React from "react";
import "../stylesheets/BoschProject.css";
import BoschMockUp from "../images/BoschMockUp.jpeg";

function BoschProject() {
  return (
    <div className="container">
      {/* Styling - add body color */}
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      {/* Component */}
      <div className="text-container">
        <h1>Internship at Bosch Security Systems</h1>
        <img src={BoschMockUp} className="image-portfolio"></img>
      </div>
      <div className="text-container">Problem statement</div>
      <div className="text-container">
        <p className="stage-explanation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default BoschProject;
