import React from "react";
import "./Services2.css";

const services2 = [
  {
    title: "Hiring Funnel Analysis",
    description:
      "Understand each stage of your hiring funnel and how it impacts candidates from different demographics.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Pay-Equity-Analysis.png", 
  },
  {
    title: "Recruiting & Hiring Redesign",
    description:
      "Attract a more diverse workforce and adopt a less biased hiring process.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Performance-Management-Design.png", 
  },
  {
    title: "Undermining Bias in Hiring Training",
    description:
      "Train hiring managers and interviewers to recognize and challenge common biases in order to consistently hire the best person for the job.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Managing-for-Equity-Workshops.png", 
  },
  {
    title: "Undermining Bias in Hiring Training",
    description:
      "Train hiring managers and interviewers to recognize and challenge common biases in order to consistently hire the best person for the job.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Mentorship-Program.png", 
  },
];

const Services2 = () => {
  return (
    <div className="services2-container">
      <hr className="services2-divider" />
      <h3 className="services2-title">SERVICES</h3>
      <div className="services2-grid">
        {services2.map((service, index) => (
          <div className="services2-item" key={index}>
            <img src={service.icon} alt={service.title} className="services2-icon" />
            <h4 className="services2-heading">{service.title}</h4>
            <p className="services2-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services2;