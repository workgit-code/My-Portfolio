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
        <img src={BoschHighFiPrototype} className="image-portfolio"></img>
        <p className="stage-explanation-text">
          In redesigning the Edit Characteristics page, my goal was to enhance
          the definition and editing of product types. To avoid errors, I
          revamped the layout, introducing dropdown menus for single options and
          checkboxes for multiple choices. The design allows for future
          expansion in characteristics and business units through a tabs menu.
        </p>
        <p className="stage-explanation-text">
          Critical to the redesign was error prevention, ensuring a seamless
          user experience. For instance, the design dynamically grays out
          irrelevant options based on user selections. A dialog window now
          provides immediate feedback after clicking the update button,
          confirming the defined product type and addressing potential issues.
        </p>
        <p className="stage-explanation-text">
          The result is a more streamlined and user-friendly Edit
          Characteristics page, offering clearer feedback and accommodating
          future growth. You can see the page below:
        </p>
        <img src={PCCEditProductChar1} className="image-portfolio"></img>
        <p className="stage-explanation-text">
          The Home page design serves as a visual representation of the
          software's core functions, addressing user confusion. Reporting
          buttons act as shortcuts, efficiently collecting key functionalities.
          To streamline user interaction, prefiltering within a 6-month to
          1-year period is implemented.
        </p>
        <p className="stage-explanation-text">
          A vital feature is risk management, tracking expiring requirements.
          The Home page provides a concise overview with colored date
          indications, ensuring users are promptly informed. The result is a
          functional and intuitive Home page, emphasizing key features for
          efficient user engagement and risk management.
        </p>
        <img src={PCCHomePage} className="image-portfolio"></img>
      </div>
      <div className="text-container">
        <h2>Coding</h2>
        <p className="stage-explanation-text">
          While working on the front end, I encountered new tools like
          Bitbucket, TortoiseGit, and Redux. Understanding the existing code,
          especially with Redux, posed a challenge. I delved into articles and
          videos to get a grip on Redux, sought help from colleagues, and
          invested extra time to understand the code better.
        </p>
        <p className="stage-explanation-text">
          Technically, I used React with Redux to handle global states
          efficiently. Material UI helped create sleek front-end graphics, using
          grid containers and Box elements for scalability across different
          screens. I referred to the Material UI documentation for guidance
          (https://mui.com/material-ui/getting-started/overview/).
        </p>
        Each task involved creating branches, getting feedback through pull
        requests on Bitbucket, making improvements, and deploying the updated
        code to a live server for users to see the latest version of the front
        end tool.
      </div>
      <div className="text-container">
        <h2>End result</h2>
        <p className="stage-explanation-text">
          In wrapping up this project, I want to express gratitude for the
          guidance from my mentors. My focus centered on improving the usability
          of the Edit Characteristics and Home pages.
        </p>
        <p className="stage-explanation-text">
          For the Edit Characteristics page, enhancements include organized
          categories, preventing wrong combinations, and saving/pre-loading
          data. The Home page now provides clarity on the tool's purpose and key
          functionalities.
        </p>
        <p className="stage-explanation-text">
          Adhering to Bosch Design Guidelines, the redesigned Products page
          ensures a professional and cohesive look. Notably, users can now click
          on Characteristic labels to edit them directly.
        </p>
        <p className="stage-explanation-text">
          These improvements collectively aim to provide a more intuitive and
          user-friendly experience for PCC users, facilitating smoother data
          monitoring and manipulation.
        </p>
      </div>
    </div>
  );
}

export default BoschProject;
