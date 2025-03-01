import React, { useState } from "react";
import "./Assessment.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const assessments = [
  {
    title: "Exactly what we needed to go from good intentions to execution",
    text: `Peoplism's 360 DEIB assessment was exactly what we needed to go from 
      good intentions to execution when it comes to D&I efforts. Our org structure 
      is complicated, and Peoplism was able to completely customize their intake 
      process so that we could have usable insights for all portions of our workforce. 
      They have given us clear concrete next steps, and provided us with all the 
      support and resources needed as we prepare to tackle them.`,
    footer: "- Lori Medeiros, VP of HR, Nurx",
    companyLogo: "nurx_logo.png",
    image: "/images/sky.avif",
  },
  {
    title: "Peoplism's assessment was thorough, insightful, and highly actionable",
    text: `Peoplism's assessment was thorough, insightful, and highly actionable. 
      Their recommendations helped us operationalize our efforts into executable 
      processes and think in new ways about how we approach D&I. As the head of HR, 
      I am already seeing the impact on our team, in our hiring pipeline, and in our 
      approach to performance management. I highly recommend the assessment to any 
      HR team serious about D&I results.`,
    footer: "- Kathleen DeShields, Head of HR",
    companyLogo: "threatstack_logo.png",
    image: "/images/sky.avif",
  },
];

const Assessment = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const prevSlide = () => {
    setDirection("left");
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? assessments.length - 1 : prev - 1));
    }, 300); // Delay to match transition
  };

  const nextSlide = () => {
    setDirection("right");
    setTimeout(() => {
      setIndex((prev) => (prev === assessments.length - 1 ? 0 : prev + 1));
    }, 300); // Delay to match transition
  };

  return (
    <div className="assessment-container">
      <hr className="top-line" />
      <div className="header-section">
        <h3 className="section-title">ASSESSMENT & ROADMAP IMPACT</h3>
        <div className="arrow-buttons">
          <button className="arrow left" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="arrow right" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="card-container">
        <div className={`assessment-card slide-${direction}`}>
          <FaQuoteLeft className="quote-icon" />
          <h2>{assessments[index].title}</h2>
          <p>{assessments[index].text}</p>
          <hr className="card-divider" />
          <div className="company-footer">
            <img src={assessments[index].companyLogo} alt="Company Logo" />
            <span>{assessments[index].footer}</span>
          </div>
        </div>
        <div className={`assessment-image slide-${direction}`}>
          <img src={assessments[index].image} alt="Assessment" />
        </div>
      </div>
    </div>
  );
};

export default Assessment;
