import React from "react";
import "./About.css";
import Img from "./Img";
import Team from "./Team";

const About = () => {
  return (
    <div>
    <div className="who-we-are-container1">
      {/* Section Title */}
      <div className="title-container1">
        <h1 className="title1">
          Who we <span className="highlight1">are</span>
        </h1>
      </div>

      {/* Description */}
      <p className="description1">
        Peoplism consultants are subject matter experts with deep experience in HR, learning and development, psychology, change management, and data science.
      </p>

      {/* Divider */}
      <hr className="divider-abouts" />
    </div>
    <Img/>
    <Team/>
    </div>
  );
};

export default About;
