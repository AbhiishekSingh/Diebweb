import React from "react";
import "./ImpactSection.css";
import { Link } from "react-router-dom";

export default function ImpactSection() {
  return (
    <div className="impact-container1">
      <div className="impact-text1">
        <h2 className="impact-title1">Ready to make an impact?</h2>
        <p className="impact-subtext1">
          Join leading companies putting <strong>DEIB</strong> at the forefront of their businesses
        </p>
      </div>
      <Link to="/Contact" className="impact-button1">Get in touch</Link>
    </div>
  );
}
