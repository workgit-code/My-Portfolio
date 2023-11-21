import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import from free-brands-svg-icons for social media icons
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1>Let's connect</h1>
        <p>
          I would love to hear from you, to create awesome projects together
        </p>
        {/* <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} /> */}
      </div>
    </footer>
  );
}

export default Footer;
