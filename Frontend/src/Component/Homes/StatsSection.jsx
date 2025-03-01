import React from "react";
import "./StatsSection.css";

const statsData = [
  {
    percentage: "+27%",
    description: "Employees agree leadership values creating an inclusive culture",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-1.png", // Replace with actual logo URL
  },
  {
    percentage: "+19%",
    description: "Employees believe performance management is fair and objective",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-2.png", // Replace with actual logo URL
  },
  {
    percentage: "+86%",
    description: "Employees report a greater sense of belonging",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-3.png", // Replace with actual logo URL
  },
];

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stats-heading">
        Work with us to <br /> <span className="move-text">move</span> the needle
      </div>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-card">
            <h2 className="stats-percentage">{stat.percentage}</h2>
            <p className="stats-description">{stat.description}</p>
            <img src={stat.logo} alt="Company Logo" className="stats-logo" />
            {index < statsData.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
