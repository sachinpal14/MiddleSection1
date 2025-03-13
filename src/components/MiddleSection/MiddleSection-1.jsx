import React, { useState } from "react";
import "./MiddleSection-1.css";
import { GoLock } from "react-icons/go";
import { RiArrowDropRightLine } from "react-icons/ri";
import image from '../../assets/person.jpeg'
const MiddleSection1 = () => {
  // Static data for testing
  const [profilePic, setProfilePic] = useState(image);
  const [collabs, setCollabs] = useState(12);
  const [connections, setConnections] = useState(34);
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Full Stack Developer | React & Node.js");
  const [buttons, setButtons] = useState([ "Message", "Follow"]);
  const [about, setAbout] = useState("I am a passionate full-stack developer with expertise in React and Node.js.");
  const [collaboratorName, setCollaboratorName] = useState("Jane Smith");
  const [education, setEducation] = useState(["B.Tech in CS", "M.Tech in AI"]);
  const [subCollaborators, setSubCollaborators] = useState(["Alice", "Bob", "Charlie"]);
  const [paragraph, setParagraph] = useState("Passionate about coding and problem-solving.");
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "MongoDB"]);

  return (
    <div className="middle-section-1-mainParent">
      <div className="middle-section-1-middle-container">
        <div className="middle-section-1-middle-section">
          {/* Profile Details */}
          <div className="middle-section-1-profile-header">
            <div className="middle-section-1-imageContainer">
              <img src={profilePic} alt="Profile" className="middle-section-1-profile-pic" />
            </div>
            <div className="middle-section-1-collabsDetails">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="middle-section-1-connectionsDetails">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>

          {/* Name and Details */}
          <div className="middle-section-1-profile-info">
            <h2>{name}</h2>
            <p>{title}</p>
          </div>

          {/* Buttons */}
          <div className="middle-section-1-profile-buttons">
            {buttons.map((btn, index) => (
              <button key={index} className="middle-section-1-btn">
                {btn}
              </button>
            ))}
          </div>

          {/* About Section */}
          <div className="middle-section-1-about-section">
            <h3>About</h3>
            <p>{about}</p>
          </div>

          {/* Collaborators */}
          <div className="middle-section-1-collabs-section">
            <h3>Collabs</h3>
            <div className="middle-section-1-collabratorCard">
              <div className="middle-section-1-collabratorDetails">
                <h4>{collaboratorName}</h4>
                <div className="middle-section-1-education">
                  {education.map((val, index) => (
                    <h6 key={index}>{val}</h6>
                  ))}
                </div>
                <div className="middle-section-1-subCollabrators">
                  ({subCollaborators.map((val, index) => (
                    <h6 key={index}>{val},</h6>
                  ))})
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph and Arrow */}
          <div className="middle-section-1-paragraphAndArrow">
            <div className="middle-section-1-para">
              <p>{paragraph}</p>
            </div>
            <div className="middle-section-1-icon">
              <RiArrowDropRightLine className="middle-section-1-paragrapgh-icon" />
            </div>
          </div>

          {/* Skills */}
          <div className="middle-section-1-skills-section">
            <h3>Skills</h3>
            <div className="middle-section-1-skill-list">
              {skills.map((val, index) => (
                <div key={index} className="middle-section-1-skillsMiniDiv">
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Blur Section */}
          <div className="middle-section-1-blur">
            <div className="middle-section-1-lock">
              <GoLock className="middle-section-1-lockIcon" />
            </div>
            <div className="middle-section-1-headings">
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
