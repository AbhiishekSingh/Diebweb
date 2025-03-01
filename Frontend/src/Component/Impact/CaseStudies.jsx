import React from "react";
import "./CaseStudies.css";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "DEIB Assessment drives improvement in employee experiences of equity",
      details: "Industry: Education Technology\nEmployees: 150-200 employees\nLocation: San Francisco, California and Bangalorou, India",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 2,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Peoplism manager training transforms leaders and drives organizational change",
      details: "Industry: Philanthropy, Non-Profit\nEmployees: 100-200\nLocation: Palo Alto, CA",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 3,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Peoplism manager training transforms leaders and drives organizational change",
      details: "Industry: Philanthropy, Non-Profit\nEmployees: 100-200\nLocation: Palo Alto, CA",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    {
      id: 4,
      logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_AUTOx22_contain_center-center_none/springboardlogo.png",
      title: "Peoplism manager training transforms leaders and drives organizational change",
      details: "Industry: Philanthropy, Non-Profit\nEmployees: 100-200\nLocation: Palo Alto, CA",
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_585x420_fit_center-center_none/image001-1.jpg",
    },
    // Add more cards as needed
  ];

  return (
    <div className="case-studies-container">
      <hr className="Case-divider" />
      <h2 className="header">CASE STUDIES</h2>
      {caseStudies.map((study, index) => (
        <div key={study.id} className={`case-study ${index % 2 === 0 ? "right" : "left"}`} style={{ backgroundColor: "#f9f9f9", textAlign: "center" }}>
          <div className="content">
            <img src={study.logo} alt={study.logo} className="logo" />
            <h3 className="title">{study.title}</h3>
            <p className="details">{study.details}</p>
            <button className="read-more">Read case study</button>
          </div>
          <img src={study.image} alt={study.title} className="image" />
        </div>
      ))}
    </div>
  );
}