import React, { useState } from "react";
import "./MiddleSection-1.css";
import { GoLock } from "react-icons/go";
import { RiArrowDropRightLine } from "react-icons/ri";

const MiddleSection1 = ({ initialData }) => {
  // Managing each piece of dynamic data separately


  // const [profilePic, setProfilePic] = useState(initialData.profilePic);
  // const [collabs, setCollabs] = useState(initialData.collabs);
  // const [connections, setConnections] = useState(initialData.connections);
  // const [name, setName] = useState(initialData.name);
  // const [title, setTitle] = useState(initialData.title);
  // const [buttons, setButtons] = useState(initialData.buttons);
  // const [about, setAbout] = useState(initialData.about);
  // const [collaboratorName, setCollaboratorName] = useState(initialData.collaborators.name);
  // const [education, setEducation] = useState(initialData.collaborators.education);
  // const [subCollaborators, setSubCollaborators] = useState(initialData.collaborators.subCollabrators);
  // const [paragraph, setParagraph] = useState(initialData.para);
  // const [skills, setSkills] = useState(initialData.skills);

  return (
    <div className="middle-section-1-mainParent">
      <div className="middle-section-1-middle-container">
        <div className="middle-section-1-middle-section">
          {/* Profile Details */}
          <div className="middle-section-1-profile-header">
            <div className="middle-section-1-imageContainer">
              {/* Profile Image */}
              <img src={image} alt="Profile" className="middle-section-1-profile-pic" />
            </div>
            {/* Number of Connections and Collabs */}
            <div className="middle-section-1-collabsDetails">
              <h4>Collabs</h4> <span>{120}</span>
            </div>
            <div className="middle-section-1-connectionsDetails">
              <h4>Connections</h4>
              <span>{260}</span>
            </div>
          </div>

          {/* Name and Details */}
          <div className="middle-section-1-profile-info">
            <h2>{"Harshit Sharma"}</h2>
            <p>{"Web Developer || Frontend"}</p>
          </div>

          {/* Buttons */}
          <div className="middle-section-1-profile-buttons">
            {/* {buttons.map((btn, index) => ( */}
              <button key={1} className="middle-section-1-btn">
                {"USB"}
              </button>
            {/* ))} */}
          </div>

          {/* About Section */}
          <div className="middle-section-1-about-section">
            <h3>About</h3>
            <p>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum nulla quas architecto illo dignissimos!"}</p>
          </div>

          {/* Collaborators */}
          <div className="middle-section-1-collabs-section">
            <h3>Collabs</h3>
            <div className="middle-section-1-collabratorCard">
              <div className="middle-section-1-collabratorDetails">
                <h4>{"vijay singh"}</h4>
                <div className="middle-section-1-education">
                  {/* {education.map((val, index) => ( */}
                    <h6 key={1}>{""}</h6>
                  {/* ))} */}
                </div>
                <div className="middle-section-1-subCollabrators">
                  {/* ({subCollaborators.map((val, index) => ( */}
                    <h6 key={1}>{"Tarun , Shivam "},</h6>
                  {/* ))}) */}
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph and Arrow */}
          <div className="middle-section-1-paragraphAndArrow">
            <div className="middle-section-1-para">
              <p>{"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, quo consectetur. Tenetur sit magni dolorum, debitis ab expedita autem quia laborum eum fuga atque consectetur?"}</p>
            </div>
            <div className="middle-section-1-icon">
              <RiArrowDropRightLine className="middle-section-1-paragrapgh-icon" />
            </div>
          </div>

          {/* Skills */}
          <div className="middle-section-1-skills-section">
            <h3>Skills</h3>
            <div className="middle-section-1-skill-list">
              {/* {skills.map((val, index) => ( */}
                <div key={1} className="middle-section-1-skillsMiniDiv">
                  C++
                </div>
              {/* ))} */}
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
