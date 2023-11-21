import React from "react";
import "../stylesheets/BoschProject.css";
import BoschMockUp from "../images/BoschMockUp.jpeg";
import BoschHighFiPrototype from "../images/BoschHighFiPrototype.jpg";
import PCCInitialEditChar from "../images/PCCInitialEditChar.jpg";
import PCCEditProductChar1 from "../images/PCCEditProductChar1.jpg";
import PCCHomePage from "../images/PCCHomePage.jpg";

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
      <div className="text-container">
        <h2>About:</h2>
        Product Compliance Checker or PCC: A software that allows Bosch
        employees to maintain and monitor gobal product regulatory compliance.
      </div>
      <div className="text-container theProblem">
        <h2>The problem:</h2>
        <h1>
          How can I make the PCC software easier to use by improving certain
          parts of it, especially in the front-end design?
        </h1>
      </div>
      <div className="text-container">
        <h2>Start with why: Researching & Defining</h2>

        <p>
          I wanted to figure out why the software needed to get better. I talked
          to five Bosch employees from around the world who will use the
          software in the future. I showed them the software and prepared some
          questions to ask. The main reason to make it better was because, it
          didnt have a user-friendly interface and flow. There are many examples
          and issues that I have found by talking to the future users, but for
          the making the portfolio easier to read I will guide you through two
          main issues:
        </p>
        <ul className="bulletpoints">
          <li className="list-item">
            When Bosch employees first begin to use the software, they don't
            really get what it's all about and what it does.
          </li>
          <li className="list-item">
            The "Edit Characteristics" page is a bit of a mess too. It's
            confusing, and there are lots of options on the screen without any
            clear order. That's why it needs an improvement.
          </li>
        </ul>

        <img src={PCCInitialEditChar} className="image-portfolio"></img>
      </div>
      <div className="text-container">
        <h2>The How: Ideate</h2>
        <ul>
          <li>
            How can I clearly explain what the software is all about to others?
          </li>
          <li>
            What is the actual purpose of the software, and how can I
            effectively communicate that to users?
          </li>
          <li>
            Additionally, how can I improve the "Edit Characteristics" page,
            making it smoother and easier to use?
          </li>
        </ul>
        <p className="stage-explanation-text">
          In addressing the second part, I delved into understanding the origin
          and combination of product characteristics. I explored what these
          characteristics are, the logic behind their combination, and how best
          to convey this information to the user.
        </p>
      </div>
      <div className="text-container">
        <h2>The What: Prototyping and Solutions</h2>
        <p className="stage-explanation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src={BoschHighFiPrototype} className="image-portfolio"></img>
        <img src={PCCEditProductChar1} className="image-portfolio"></img>
        <img src={PCCHomePage} className="image-portfolio"></img>
      </div>
      <div className="text-container">
        <h2>Coding</h2>
        <p className="stage-explanation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="text-container">
        <h2>End result</h2>
        <p className="stage-explanation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="text-container">
        <h2>More projects</h2>
      </div>
    </div>
  );
}

export default BoschProject;
