import React, { useState } from "react";
import "./MiddleSection-1.css";
import { GoLock } from "react-icons/go";
import { RiArrowDropRightLine } from "react-icons/ri";
import image from "../../assets/person.jpeg";

const MiddleSection1 = () => {
  // Static data for testing
  const [profilePic] = useState(image);
  const [collabs] = useState(12);
  const [connections] = useState(34);
  const [name] = useState("John Doe");
  const [title] = useState("Full Stack Developer | React & Node.js");
  const [buttons] = useState(["Message", "Follow"]);
  const [about] = useState(
    "I am a passionate full-stack developer with expertise in React and Node.js."
  );
  const [collaboratorName] = useState("Jane Smith");
  const [education] = useState(["B.Tech in CS", "M.Tech in AI"]);
  const [subCollaborators] = useState(["Alice", "Bob", "Charlie"]);
  const [paragraph] = useState("Passionate about coding and problem-solving.");
  const [skills] = useState(["JavaScript", "React", "Node.js", "MongoDB"]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullAboutText] = useState(
    "Passionate developer with experience in web and mobile development. I specialize in React, Node.js, and building scalable applications. Love to work on open-source projects and contribute to the tech community."
  );

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const maxLength = 100;
  const displayedText = isExpanded
    ? fullAboutText
    : fullAboutText.slice(0, maxLength) +
      (fullAboutText.length > maxLength ? "..." : "");

  return (
    <div className="Followers-middle-section-1-mainParent-privacy">
      <div className="Followers-middle-section-1-middle-container-privacy">
        <div className="Followers-middle-section-1-middle-section-privacy">
          <div className="Followers-middle-section-1-profile-header-privacy">
            <div className="Followers-middle-section-1-imageContainer-privacy">
              <img src={profilePic} alt="Profile" className="Followers-middle-section-1-profile-pic-privacy" />
            </div>
            <div className="Followers-middle-section-1-collabsDetails-privacy">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="Followers-middle-section-1-connectionsDetails-privacy">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>

          <div className="Followers-middle-section-1-profile-info-privacy">
            <h2>{name}</h2>
            <p>{title}</p>
          </div>

          <div className="Followers-middle-section-1-profile-buttons-privacy">
            {buttons.map((btn, index) => (
              <button key={index} className="Followers-middle-section-1-btn-privacy">{btn}</button>
            ))}
          </div>

          <div className="Followers-middle-section-1-about-section-privacy">
            <h3>About</h3>
            <p>
              {displayedText}
              {fullAboutText.length > maxLength && (
                <button className="Followers-middle-section-1-about-button-privacy" onClick={toggleExpand}>
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
            </p>
          </div>

          <div className="Followers-middle-section-1-collabs-section-privacy">
            <h3>Collabs</h3>
            <div className="Followers-middle-section-1-collabratorCard-privacy">
              <div className="Followers-middle-section-1-collab-image-privacy">
                <img src={image} alt="" />
              </div>
              <div className="Followers-middle-section-1-collabratorDetails-privacy">
                <h4>{collaboratorName}</h4>
                <div className="Followers-middle-section-1-education-privacy">
                  {education.map((val, index) => (
                    <h6 key={index}>{val}</h6>
                  ))}
                </div>
                <div className="Followers-middle-section-1-subCollabrators-privacy">
                  (
                  {subCollaborators.map((val, index) => (
                    <h6 key={index}>{val},</h6>
                  ))}
                  )
                </div>
              </div>
            </div>
          </div>

          <div className="Followers-middle-section-1-paragraphAndArrow-privacy">
            <div className="Followers-middle-section-1-para-privacy">
              <p>{paragraph}</p>
            </div>
            <div className="Followers-middle-section-1-iconAndImage-privacy">
              <img src={image} alt="" />
              <RiArrowDropRightLine className="Followers-middle-section-1-paragrapgh-icon-privacy" />
            </div>
          </div>

          <div className="Followers-middle-section-1-skills-section-privacy">
            <h3>Skills</h3>
            <div className="Followers-middle-section-1-skill-list-privacy">
              {skills.map((val, index) => (
                <div key={index} className="Followers-middle-section-1-skillsMiniDiv-privacy">{val}</div>
              ))}
            </div>
          </div>

          <div className="Followers-middle-section-1-blur-privacy">
            <div className="Followers-middle-section-1-lock-privacy">
              <GoLock className="Followers-middle-section-1-lockIcon-privacy" />
            </div>
            <div className="Followers-middle-section-1-headings-privacy">
              <h2>Do you know privacy?</h2>
              <h3>Connect to explore further</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection1;