import React from "react";
import "./Services3.css";

const services3 = [
  {
    title: "Hiring Funnel Analysis",
    description:
      "Understand each stage of your hiring funnel and how it impacts candidates from different demographics.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Inclusion-Allyship-Workshop.png", 
  },
  {
    title: "Recruiting & Hiring Redesign",
    description:
      "Attract a more diverse workforce and adopt a less biased hiring process.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Managing-for-Inclusion-Workshops.png", 
  },
  {
    title: "Undermining Bias in Hiring Training",
    description:
      "Train hiring managers and interviewers to recognize and challenge common biases in order to consistently hire the best person for the job.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Sexual-Harassment-Training.png", 
  },
  {
    title: "Mentorship Program",
    description:
      "Create structured mentorship opportunities to foster career growth and inclusion.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/DEIB-Executive-Alignment.png", 
  },
];

const Services3 = () => {
  return (
    <div className="services3-container">
      <hr className="services3-divider" />
      <h3 className="services3-title">SERVICES</h3>
      <div className="services3-grid">
        {services3.map((service, index) => (
          <div className="services3-item" key={index}>
            <img src={service.icon} alt={service.title} className="services3-icon" />
            <h4 className="services3-heading">{service.title}</h4>
            <p className="services3-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services3;
