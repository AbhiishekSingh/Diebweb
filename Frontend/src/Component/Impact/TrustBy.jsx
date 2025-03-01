import React from "react";
import "./TrustBy.css";

export default function TrustBy() {
  const logos = [
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/backmarket.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/beeswax-logo-vector.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/Betterment-logo.svg",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/classpass-logo.svg",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/careers/_210xAUTO_fit_center-center_none/DA-Logo-primary-1.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/press/_210xAUTO_fit_center-center_none/everlaw_logo_2019.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/Facebook-logo.svg",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/grammarly.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/lattice_logo_full_color__33_Logo_2021-09-22-235205_ocrq.jpeg",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_210xAUTO_fit_center-center_none/lpfch.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/magoosh.png",
    // "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/MediaMath-Logo-2021.svg",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/talener.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/careers/_210xAUTO_fit_center-center_none/mux-logo.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/notable.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/rae-logo-circle.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_210xAUTO_fit_center-center_none/TPT_New.png",
    "https://s3.us-east-1.amazonaws.com/peoplism.s8/_210xAUTO_fit_center-center_none/threat-stack-logo.png",
    // Add more logo URLs as needed
  ];

  return (
    <div className="trusted-by-container7">
      <hr className="divider7" />
      <h2 className="header7">TRUSTED BY</h2>
      <div className="logos-container7">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
        ))}
      </div>
    </div>
  );
}