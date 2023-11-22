import React from "react";
// credits image: https://www.studiozelden.com/cases/swapfiets/
import Swapfiets from "../images/Swapfiets.jpg";

function MarketingProject() {
  return (
    <div>
      {" "}
      <div className="container">
        {/* Styling - add body color */}
        <style>{`
body {
  background-color: white;
}
`}</style>
        {/* Component */}
        <div className="text-container">
          <h1>International Marketing: expand a successful brand</h1>
          <img src={Swapfiets} className="image-portfolio"></img>
          <p>Complete project coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default MarketingProject;
