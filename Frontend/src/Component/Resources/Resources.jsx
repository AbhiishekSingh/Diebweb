import React, { useRef } from "react";
import "./Resources.css";
import Bot from "./bot";
import Press from "./Press";
import HelpSection from "./HelpSection";
import BlogGrid from "./BlogGrid";

const Resources = () => {
  // ✅ Create Refs for Sections
  const botRef = useRef(null);
  const pressRef = useRef(null);
  const blogRef = useRef(null);

  // ✅ Scroll Function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* ✅ Header Section with Buttons */}
      <div className="resources-container">
        <div className="resources-text">
          Resources by <br /> us for <span className="italic-text">you <span className="underline"></span></span>
        </div>
        <div className="button-group">
          <button className="resource-button" onClick={() => scrollToSection(botRef)}>Resources</button>
          <button className="resource-button" onClick={() => scrollToSection(pressRef)}>Press</button>
          <button className="resource-button" onClick={() => scrollToSection(blogRef)}>Blog</button>
        </div>
      </div>

      {/* ✅ Sections with Attached Refs */}
      <div ref={botRef}>
        <Bot />
      </div>

      <div ref={pressRef}>
        <Press />
      </div>

      <HelpSection />
      <div ref={blogRef}>
        <BlogGrid />
      </div>

    </div>
  );
};

export default Resources;
