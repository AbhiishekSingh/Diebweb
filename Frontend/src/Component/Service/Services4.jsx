import React from "react";
import "./Services4.css";

const services4 = [
  {
    title: "3 Session Anti-Bias Program",
    description:
      "Launch a comprehensive program that actually reduces biases, fosters belonging, and leaves participants with concrete tools to create more inclusive workplaces.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/3-Session-Anti-Bias-Program.png", 
  },
  {
    title: "Managing for Belonging Workshop",
    description:
      "Teach managers how to increase psychological safety, authenticity, and connection on teams.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Managing-for-Belonging-Workshop.png", 
  },
  {
    title: "Undermining Bias in Hiring Training",
    description:
      "Train hiring managers and interviewers to recognize and challenge common biases in order to consistently hire the best person for the job.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/DEIB-Committee-Optimization.png", 
  },
  {
    title: "Mentorship Program",
    description:
      "Create structured mentorship opportunities to foster career growth and inclusion.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/ERG-Launch-Support.png", 
  },
];

const Services4 = () => {
  return (
    <div className="services4-container">
      <hr className="services4-divider" />
      <h3 className="services4-title">SERVICES</h3>
      <div className="services4-grid">
        {services4.map((service, index) => (
          <div className="services4-item" key={index}>
            <img src={service.icon} alt={service.title} className="services4-icon" />
            <h4 className="services4-heading">{service.title}</h4>
            <p className="services4-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services4;
