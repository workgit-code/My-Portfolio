import React from "react";
import "../stylesheets/Home.css";
import MyPicture from "../images/MyPicture.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <h1>Content creator,</h1>
        <h1>Web developer</h1>
        <h1>& Services marketer</h1>
        <div className="intro-text">
          <p>Hi, I'm Sesil.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
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
  );
}

export default Home;
