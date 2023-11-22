import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import from free-brands-svg-icons for social media icons
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1>Let's create awesome projects together!</h1>
        <p>Email: sesiltasim@gmail.com</p>
        <p>Phone: +31 6 27 91 86 47</p>
        {/* <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} /> */}
      </div>
    </footer>
  );
}

export default Footer;
