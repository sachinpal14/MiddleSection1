import React from "react";
import "./MiddleSection-1.css";
import { GoLock } from "react-icons/go";
 
import { RiArrowDropRightLine } from "react-icons/ri";
const MiddleSection = ({ dummyData }) => {
  return (
    <div className="middle-section-1-mainParent">
      <div className="middle-section-1-middle-container">
      <div className="middle-section-1-middle-section">
        {/* Profile Details */}
        <div className="middle-section-1-profile-header">
          <div className="middle-section-1-imageContainer">
            {/* ProfileImage */}
            <img
              src={dummyData.profilePic}
              alt="Profile"
              className="middle-section-1-profile-pic"
            />
          </div>
          {/* Number of the Connection and Collabs*/}
          <div className="middle-section-1-collabsDetails">
            {/* Collabs */}
            <h4>Collabs</h4> <span>{dummyData.collabs} </span>
          </div>
          <div className="middle-section-1-connectionsDetails">
            {/* Connections */}
            <h4>Connections</h4>
            <span>{dummyData.connections} </span>
          </div>
        </div>
        {/* Name and the Details */}
        <div className="middle-section-1-profile-info">
          <h2>{dummyData.name}</h2>
          <p>{dummyData.title}</p>
        </div>

        {/* Buttons */}
        <div className="middle-section-1-profile-buttons">
          {dummyData.buttons.map((btn, index) => (
          <div>
          <button key={index} className="middle-section-1-btn">
                {btn}
              </button>
      </div>
          ))}
        </div>

        {/* About Section */}
        <div className="middle-section-1-about-section">
          <h3>About</h3>
          <p>{dummyData.about}</p>
        </div>

        {/* Collaborators */}
        <div className="middle-section-1-collabs-section">
          <h3>Collabs</h3>
          {/* Card for to wrap the all things */}
          <div className="middle-section-1-collabratorCard">
            <div className="middle-section-1-collabratorDetails">
              {/* collaborator details */}
              <h4> {dummyData.collaborators.name}</h4>
              <div className="middle-section-1-education">
                {/* Education of the collaborator */}
                {dummyData.collaborators.education.map((val) => (
                  <h6>{val} </h6>
                ))}
              </div>
              <div className="middle-section-1-subCollabrators">
                {/* names under the education of the collabs section  */}(
                {dummyData.collaborators.subCollabrators.map((val) => (
                  <h6>{val},</h6>
                ))}
                )
              </div>
            </div>
          </div>
        </div>
        {/* paragraph div */}

        <div className="middle-section-1-paragraphAndArrow">
          <div className="middle-section-1-para ">
            <p> {dummyData.para}</p>
          </div>
        <div className="middle-section-1-icon">
        <RiArrowDropRightLine className="middle-section-1-paragrapgh-icon" />
        </div>
        </div>

        {/* Skills */}
        <div className="middle-section-1-skills-section">
          <h3>Skills</h3>
          {/* All section  */}
          <div className="middle-section-1-skill-list">
            {dummyData.skills.map((val) => (
              <div className="middle-section-1-skillsMiniDiv">{val}</div>
            ))}
          </div>
        </div>
        {/* Blur part in the bottom */}
        <div className="middle-section-1-blur">
          <div className="middle-section-1-lock">
            {/* Lock Icon */}
            <GoLock className="middle-section-1-lockIcon" />
          </div>
          {/* Headings of the Blur part */}
          <div className="middle-section-1-headings">
            <h2>Do you know privacy ?</h2>
            <h3>Connect to explore Furthur</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MiddleSection;
