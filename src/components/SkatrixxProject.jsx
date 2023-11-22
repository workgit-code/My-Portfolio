import React from "react";
import SkatrixxMockUp from "../images/SkatrixxMockUp.jpg";
import SkatrixxEmpathyMap1 from "../images/SkatrixxEmpathyMap1.jpg";
import SkatrixxEmpathyMap2 from "../images/SkatrixxEmpathyMap2.jpg";
import SkatrixxUserJourneyMap from "../images/SkatrixxUserJourneyMap.jpg";
import SkatrixxMorphChart from "../images/SkatrixxMorphChart.jpg";
import SkatrixxHiFiPrototype from "../images/SkatrixxHiFiPrototype.jpg";

function SkatrixxProject() {
  return (
    <div>
      <div className="container">
        {/* Styling - add body color */}
        <style>{`
    body {
      background-color: white;
    }
  `}</style>
        {/* Component */}
        <div className="text-container">
          <h1>Building an app for Skaters</h1>
          <img src={SkatrixxMockUp} className="image-portfolio"></img>
          <p>Complete project coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default SkatrixxProject;
