import React, { useRef } from "react";
import "./Impact.css";
import CaseStudies from "./CaseStudies";
import TrustBy from "./TrustBy";
import ImpactSection from "./ImpactSection";

export default function Impact() {
  // Create refs for the sections
  const caseStudiesRef = useRef(null);
  const clientsRef = useRef(null);

  // Function to scroll smoothly to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="impact-container">
        <div className="impact-title">
          <h1 className="impact-light">Our</h1>
          <span className="impact-bold italic">
            impact
            <span className="impact-underline">
              <img src="" alt="" />
            </span>
          </span>
        </div>

        {/* Buttons for scrolling */}
        <div className="impact-buttons">
          <button className="impact-button" onClick={() => scrollToSection(caseStudiesRef)}>
            Case Studies
          </button>
          <button className="impact-button" onClick={() => scrollToSection(clientsRef)}>
            Clients
          </button>
        </div>
      </div>

      {/* Sections to scroll to */}
      <div ref={caseStudiesRef}>
        <CaseStudies />
      </div>
      <div ref={clientsRef}>
        <TrustBy />
      </div>

      <ImpactSection />
    </div>
  );
}
