import React from "react";
import "./BenefitsGrid.css";
const benefits = [
  { title: "Health Care", description: "We provide competitive medical, dental and vision insurance." },
  { title: "4+ Weeks PTO", description: "You work hard. You also have a life outside of work. We offer 4 weeks (20 days) of paid time off plus 10 U.S. national holidays." },
  { title: "Paid Family Leave", description: "While building Peoplism, many of us are also building and raising baby humans. We offer 12 weeks of fully paid, gender-neutral parental leave." },
  { title: "Tech & WFH Gear", description: "Most of us work from home most of the time. Being comfortable and ergonomic is important for sustainable work from home life. We provide the gear to make work a little easier." },
  { title: "401(k)", description: "We offer the option of signing up for a 401(k)." },
  { title: "Employee Profit Sharing", description: "When we hit our financial goals, we want everyone to share in that success." },
  { title: "Learning & Development", description: "DEIB is a developing field so continuous learning is crucial for the work we do. We offer a yearly stipend for learning and professional development, and we have a budget for the team to plan L&D events for the whole group." },
  { title: "Flexibility", description: "We care about output and impact—when you get your work done is up to you!" },
  { title: "Wellness Programs", description: "We offer wellness programs to support mental and physical health." }
];

const BenefitsGrid = () => {
  return (
    <div>
      <div className="section-header-9">
        <hr className="divider-9" />
        <p className="section-title-9">OUR BENEFITS</p>
      </div>
      <div className="grid-container-9">
        {benefits.map((benefit, index) => (
          <div className="grid-item-9" key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
