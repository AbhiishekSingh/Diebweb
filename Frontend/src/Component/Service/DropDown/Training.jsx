import React from "react";
import "./Training.css"
const Training = () => {
  return (
    <div className="training-container">
      <div className="training-content">
        {/* Left Section */}
        <div className="training-text">
          <h1 className="training-title">DEIB</h1>
          <h2 className="training-subtitle">training</h2>
          <p className="training-description">
            We offer expert-designed and facilitated DEIB training, including:
          </p>
          <ul className="training-list">
            {[
              "DEIB Manager Training",
              "Anti-Bias Training",
              "Allyship & Inclusion Training",
              "Undermining Bias in Hiring Interviewer Training",
              "Preventing Sexual Harassment Training",
              "ERG Program Training",
            ].map((item, index) => (
              <li key={index} className="training-item">
                <span className="training-check">✔</span>
                {item}
              </li>
            ))}
          </ul>
          <button className="training-button">Get Started</button>
        </div>

        {/* Right Section - Illustration */}
        <div className="training-image-container">
          <img
            src="https://peoplism.com/assets/images/Peoplism_illo_2_v2-1600.avif"
            alt="Training Illustration"
            className="training-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
