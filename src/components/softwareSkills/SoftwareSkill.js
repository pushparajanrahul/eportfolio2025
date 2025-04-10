import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <img
                  src={require(`../../assets/skills/${skills.logoPath}`)}
                  alt={skills.skillName}
                  className="skill-logo"
                />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
