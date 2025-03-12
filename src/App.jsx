import React from "react";
import CenteredLayout from "./CenterLayout/CenteredLayout";
import MiddleSection from "./MiddleSection/MiddleSection";



const dummyData = {
  profilePic:  "https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?w=203&h=307&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  name: "Himanshu Choudhary",
  title: "Building Uniisphere | Masters Union",
  connections: 248,
  collabs: 78,
  about: "The actual idea of Uniisphere was of the Founder Himanshu who worked for months...",
  collaborators: {
    name:"Viraj Verma",
    education:["UPES",'MBA'],
    subCollabrators:["Tarun","Himanshu","Kartikey"]
  },
  skills: ["UI/UX", "Java", "CSS", "C++", "Python", "Photoshop"],
  buttons: ["Masters Union", "SBM"]
};

const App = () => {
  return (
    <CenteredLayout>
      <MiddleSection dummyData={dummyData} />
    </CenteredLayout>
  );
};

export default App;
