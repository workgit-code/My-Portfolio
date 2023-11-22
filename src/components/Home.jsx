import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <p>Hey there! 🌍 </p>
            <p>
              I'm Sesil. I am originally from Bulgaria and I've spent over three
              years living and studying in the vibrant city of Eindhoven,The
              Netherlands. I always knew that working on creating content gave
              me a big sense of purpose and connection to the world.
            </p>
            <p>
              What sets my work apart is the infusion of emotions into my design
              process. I find immense joy in inspiring others through my work,
              striving to make life a tad bit easier for everyone who interacts
              with what I create.
            </p>
            <p>
              My mission to make the connection of the physical and the digital
              world easy, entertaining and useful. ✨
            </p>
          </div>
        </div>
        <div className="picture-placeholder">
          <img src={MyPicture} className="my-picture" />
        </div>
      </div>
      {/* !!! MY PROJECTS SECTION !!! */}
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
              <p>
                Improving the user experience and the front-end of a software.
              </p>
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
              <p>
                A platform to connect international employees within a company.
              </p>
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
              <p>Making a city community of skaters better and stronger. </p>
            </div>
          </Link>
          {/* Project 4 */}
          <Link
            to="/marketingproject"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="item">
              <img src={Swapfiets} alt="Image 1" />
              <h3>International Marketing: expand a successful brand </h3>
              <p>Complete project coming soon</p>
            </div>
          </Link>
        </div>
      </div>
      {/* MY SERVICES? */}
      <div className="my-services">
        <h1>My services</h1>
        <div className="my-services-options">
          <div className="service">
            <h3>Content creator</h3>
            <p>
              I have a passion for creating content - posters, Instagram stories
              or posts, videography, and photography. I also contribute to a
              student association in the Marketing team, where I mostly focus on
              social media platfoms.
            </p>
          </div>
          <div className="service">
            <h3>UX/UI designer</h3>
            <p>
              From designing fun and gamified apps to visualizing data in
              complex software, I have had experience in creating various
              interfaces for different users. Combining the study of user
              behavior with creative design, I bring ideas to life in awesome
              projects.
            </p>
          </div>
          <div className="service">
            <h3>Web developer</h3>
            <p>
              To me, coding is fun when I can visually see what is changing on
              the screen. That's why I stuck with front-end development and
              built a couple of projects using HTML, CSS, JavaScript, React,
              Node.js and Express.js etc.
            </p>
          </div>
        </div>
      </div>
      {/* WANT TO WORK TOGETHER? */}
      {/* <div className="want-to-work-together">
        <h1>Want to create an awesome project together?</h1>
      </div> */}
    </div>
  );
}

export default Home;
