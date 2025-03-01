import React from "react";
import "./HelpSection.css";

const HelpSection = () => {
  return (
    <div className="help-container">
      <div className="help-box">
        <h2 className="help-title">Need help?</h2>
        <p className="help-text">Book a free call with a Peoplism expert!</p>
        <button className="help-button">Let's chat</button>
      </div>
    </div>
  );
};

export default HelpSection;