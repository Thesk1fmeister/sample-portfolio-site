import React, { useState } from "react";
import "../App.css";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";

function Rezume() {
  const [exp, setExp] = useState([
    {
      id: 1,
      date: "March 2016 - Present",
      title: "Masteral in Information Technology",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      place: "New York University",
    },
    {
      id: 2,
      date: "March 2016 - Present",
      title: "Masteral in Information Technology",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      place: "New York University",
    },
    {
      id: 3,
      date: "March 2016 - Present",
      title: "Masteral in Information Technology",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      place: "New York University",
    },
    {
      id: 4,
      date: "March 2016 - Present",
      title: "Masteral in Information Technology",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      place: "New York University",
    },
  ]);
  const [educations, setEducations] = useState([
    ,
    {
      id: 1,
      date: "March 2016 - Present",
      title: "Lead Product Designer",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      company: "Facebook",
    },
    {
      id: 2,
      date: "March 2016 - Present",
      title: "Lead Product Designer",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      company: "Twitter",
    },
    {
      id: 3,
      date: "March 2016 - Present",
      title: "Lead Product Designer",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      company: "Shopify",
    },
    {
      id: 4,
      date: "March 2016 - Present",
      title: "Lead Product Designer",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      company: "Github",
    },
  ]);

  return (
    <section>
      <div className="resume-block" id='resume'>
        <h1>
          My <strong>Resume</strong>
        </h1>
        <div className="info-blocks">
          <div className="experience-block">
            <h2>Experience</h2>
            <ExperienceCard items={exp} />
          </div>
          <div className="education-block">
            <h2>Education</h2>
            <EducationCard items={educations} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rezume;
