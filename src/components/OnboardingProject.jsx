import React from "react";
import SimacMockUp from "../images/SimacMockUp.jpg";
import AffinityMapSimac from "../images/AffinityMapSimac.png";
import CompetitiveAnalysis from "../images/CompetitiveAnalysis.png";
import SimacLowFiPrototype from "../images/SimacLowFiPrototype.png";
import SimacHighFiPrototype from "../images/SimacHighFiPrototype.png";

function OnboardingProject() {
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
        <h1>Creating a better Onboarding experience</h1>
        <img src={SimacMockUp} className="image-portfolio"></img>
      </div>
      {/* ABOUT */}
      <div className="text-container">
        <h2>About</h2>
        <p className="stage-explanation-text">
          In my sixth semester at Fontys University of Applied Sciences, my team
          of 5 worked on a group project for SimacIT. They brought us a specific
          problem to tackle, and the process described below is mostly about my
          contributions to the project. We woked with the Agile development
          methodology: Scrumban and we cycled through Sprints of 2 weeks.
        </p>
      </div>
      {/* THE PROBLEM */}
      <div className="text-container">
        <h2>Problem statement</h2>
        <h1>
          How can we enhance the onboarding process for international
          proffesionals at Simac.nl?
        </h1>
      </div>
      {/* SPRINT 1 */}
      <div className="text-container">
        <h2>
          Sprint 1 - Explore onboarding process by understanding and defining
          user requirements
        </h2>
        <p className="stage-explanation-text">
          During the initial Sprint of the project, I collaborated with a team
          member to conduct comprehensive Competitor research. This research
          proved to be highly insightful as it enabled us to explore and analyze
          the offerings provided by other prominent IT giants within the
          company, specifically targeting the needs and requirements of newly
          hired foreign employees.
        </p>
        <p>
          Among these companies, we found a common trend of providing services
          to enhance onboarding. They use onboarding videos, available on
          platforms like YouTube, to introduce and guide new employees. They
          also employ apps/websites, gamification techniques, facilitate
          feedback exchange and language adaptation.
        </p>
        <img src={CompetitiveAnalysis} className="image-portfolio"></img>
        <p>
          To clearly share our sprint results with the client, we created visual
          Infographics. By summarizing our findings and work in visual formats,
          the client could easily understand our progress without having to read
          lengthy documents. We also provided detailed documentation as email
          attachments in case they needed more information.
        </p>
      </div>
      {/* SPRINT 2 */}
      <div className="text-container">
        <h2>
          Sprint 2 - Converging the data we have and defining user requirments
          by highlight prelimenary research
        </h2>
        <p className="stage-explanation-text">
          We are following the Double Diamond design model, which means that if
          the previous sprint was dedicated to diverging research data and
          engaging in brainstorming sessions, this sprint focuses on converging
          and filtering that data into more refined pieces. In addition, this
          sprint emphasizes the crucial steps of Defining and Empathizing with
          the target audience. As a result of this process, we have achieved a
          clearer problem statement and gained insights into our target
          audience.
        </p>
        <p className="stage-explanation-text left-border">
          <strong>From the interviews</strong> we discovered that:
          <p className="stage-explanation-text ">
            <ul className="bulletpoints">
              <li className="list-item">
                &#128073; Many employees at Simac are <strong>unaware</strong>{" "}
                of who their coaches are.
              </li>
              <li className="list-item">
                &#128073; There is a strong emphasis on{" "}
                <strong>individual and career growth </strong>
                among the majority of employees.
              </li>
              <li className="list-item">
                &#128073; We also found that there is a high level of interest
                among employees in participating in{" "}
                <strong>more team-bonding events</strong>.
              </li>
            </ul>
          </p>
        </p>

        <p className="stage-explanation-text">
          Personally, my focus during this phase was on defining the User
          Requirements and conducting thorough analysis of the Interviews. The
          methods listed:
        </p>

        <ul className="bulletpoints">
          <li className="list-item">Interviews analysis</li>
          <li className="list-item">Affinity mapping</li>
          <li className="list-item">User Requirements</li>
          <li className="list-item">Infographics</li>
        </ul>
        <img src={AffinityMapSimac} className="image-portfolio"></img>
      </div>
      {/* SPRINT 3 */}
      <div className="text-container">
        <h2>Sprint 3 - Concepting + Design</h2>
        <p className="stage-explanation-text">
          Before forming the final concept we had a few other ones that were
          discarded as they didn't fit in the requirements of the project.
        </p>
        <p>
          What is important as we had multiple iterations and modifications to
          the final idea in ordrer to contribute with a solution that will
          convince the clients that our product will solve an existing problem
          efficiently.
        </p>
        <p>
          Example: We decided to let go of the app idea involving the Personal
          Development Plan (PDP) because it had too much of an HR focus, and the
          app was becoming too complex with multiple functions. Our goal was to
          create a simpler app that focuses on single objectives and
          straightforward goals.(the image below shows the brainstorming of my
          first concepts).
        </p>
        <p>
          THE CONCEPT - SIMAC IN presents weekly or daily "socializing
          challenges" through notifications and guides you to the Wheel of
          Fortune, where you can spin to receive a new challenge. Upon
          completing challenges, you earn a collection of diverse achievements
          that contribute to your social status within the app.
        </p>
        <p>
          Here are some of the low fi prototypes I did based on the concept:
        </p>
        <img src={SimacLowFiPrototype} className="image-portfolio"></img>
      </div>
      {/* SPRINT 4 */}
      <div className="text-container">
        <h2>Sprint 4 - High Fidelity implimentation + Testing</h2>
        <p className="stage-explanation-text">
          We adhered to our stakeholders' brand style guide while designing the
          app, especially while using the colors. In particular, I took charge
          of designing and implementing the “Wheel of Fortune” feature.
        </p>
        <p>
          Why a “Wheel of Fortune”? I believe that the integration of a spinning
          wheel would invoke feeling of curiosity of what challenge might come
          next and it could also be viewed as a playful element of the design. I
          wanted it to be a simple yet satisfying feature to which users would
          be excited to come back to.
        </p>
        <p>
          I also had to indicate to the user that the wheel can be spinned once
          a day or week, so that was communicated through a visible timer,
          indicating until when the wheel was temporarily disabled.
        </p>
      </div>
      <img src={SimacHighFiPrototype} className="image-portfolio"></img>
      {/* CONCLUSION */}
      <div className="text-container">
        <h2>Conclusion: Project Summary and Retrospective</h2>
        <p className="stage-explanation-text">
          To enhance the onboarding process for international professionals at
          Simac.nl, we conducted thorough research, defined user requirements,
          and developed a concept called "SIMAC IN."
        </p>
        <p>
          The assignment’s scope gave us a great range of onboarding activities
          that we can discover, however we sticked to one “hook” as we call it:
          socializing.
        </p>
        <p>
          Through collaborative efforts and iterative design, we created a
          user-friendly app that fosters communication and socialization. Our
          solution aims to streamline the onboarding experience and support
          international professionals in their transition at Simac.nl.
        </p>
      </div>
    </div>
  );
}

export default OnboardingProject;
