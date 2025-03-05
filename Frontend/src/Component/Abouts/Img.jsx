import React from "react";
import "./Img.css";

const Img = () => {
  return (
    <div className="approach-container1">
      <h2 className="approach-title1">Our Approach: Turning Intent into Action</h2>
      <p>Real change demands more than policies—it requires a systematic, sustainable approach.</p>
      <div className="approach-content1">
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Data-driven.jpg" alt="Data-driven" className="approach-image" />
          <br />
          <h3>Assess</h3>
          <p>
          We start with deep-dive diagnostics, uncovering hidden gaps & opportunities.
          </p>
        </div>
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Human-centered.jpg" alt="Human-centered" className="approach-image image-no-3" />
          <br />
          <h3>Strategize</h3>
          <p>
          Custom solutions designed to align DEIB with business goals.          </p>
        </div>
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Impact-first.png" alt="Impact first" className="approach-image" />
          <br />
          <h3>Implement & Measure </h3>
          <p>
          Practical interventions backed by data, ensuring lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Img;
