import React from "react";
import "./MiddleSection.css";import { GoLock } from "react-icons/go";

const MiddleSection = ({ dummyData }) => {
  return (
    <div className="middle-container">
      <div className="middle-section">
        {/* Profile Details */}
        <div className="profile-header">
          <div className="imageContainer">
            <img
              src={dummyData.profilePic}
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <div className="collabsDetails">
            <h4>Collabs</h4> <span>{dummyData.collabs} </span>
          </div>
          <div className="connectionsDetails">
            <h4>Connections</h4>
            <span>{dummyData.connections} </span>
          </div>
        </div>

        <div className="profile-info">
          <h2>{dummyData.name}</h2>
          <p>{dummyData.title}</p>
        </div>

        {/* Buttons */}
        <div className="profile-buttons">
          {dummyData.buttons.map((btn, index) => (
            <button key={index} className="btn">
              {btn}
            </button>
          ))}
        </div>

        {/* About Section */}
        <div className="about-section">
          <h3>About</h3>
          <p>{dummyData.about}</p>
        </div>

        {/* Collaborators */}
        <div className="collabs-section">
          <h3>Collabs</h3>

          <div className="collabratorCard">
            <div className="collabratorDetails">
              <h4> {dummyData.collaborators.name}</h4>
              <div className="education">
                {dummyData.collaborators.education.map((val) => (
                  <h6>{val} </h6>
                ))}
              </div>
              <div className="subCollabrators">
                (
                {dummyData.collaborators.subCollabrators.map((val) => (
                  <h6>{val},</h6>
                ))}
                )
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skill-list">
            
             
            {dummyData.skills.map((val)=><div className="skillsMiniDiv">
              {val}
            </div> )}
          </div>
        </div>

        <div className="blur">
        <div className="lock">
     <GoLock className="lockIcon"/>
     </div>
     <div className="headings">
      <h2>Do you know privacy ?</h2>
      <h3>Connect to explore Furthur</h3>
     </div>
        </div>
        
      </div>
    </div>
  );
};

export default MiddleSection;
