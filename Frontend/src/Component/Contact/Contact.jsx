import React from "react";
import './Contact.css'
import ContactForm from "./ContactForm";

const ProgressText = () => {
  return (
    <div>
    <div className="progress-container">
      <div className="text-wrapper">
        <p className="ready-text">Ready to make</p>
        <p className="progress-text">
          <span className="highlight">progress?</span>
        </p>
      </div>
    </div>
    <ContactForm/>
    </div>
  );
};

export default ProgressText;
