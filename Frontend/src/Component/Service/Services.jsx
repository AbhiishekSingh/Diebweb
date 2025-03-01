import React from "react";
import "./Services.css";

const services = [
  {
    title: "Hiring Funnel Analysis",
    description:
      "Understand each stage of your hiring funnel and how it impacts candidates from different demographics.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Undermining-Bias-in-Hiring-Training.png", 
  },
  {
    title: "Recruiting & Hiring Redesign",
    description:
      "Attract a more diverse workforce and adopt a less biased hiring process.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Hiring-Funnel-Analysis.png", 
  },
  {
    title: "Undermining Bias in Hiring Training",
    description:
      "Train hiring managers and interviewers to recognize and challenge common biases in order to consistently hire the best person for the job.",
    icon: "https://s3.us-east-1.amazonaws.com/peoplism.s8/services/_70x70_fit_center-center_none/Recruiting-Hiring-Design.png", 
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <hr className="services-divider" />
      <h3 className="services-title">SERVICES</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h4 className="service-heading">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
