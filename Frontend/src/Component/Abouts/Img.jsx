import React from "react";
import "./Img.css";

const Img = () => {
  return (
    <div className="approach-container1">
      <h2 className="approach-title1">OUR APPROACH</h2>
      <div className="approach-content1">
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Data-driven.jpg" alt="Data-driven" className="approach-image" />
          <br />
          <h3>Data-driven</h3>
          <p>
            Our programs are based on peer-reviewed research, as well as actionable insights from practitioners in the field.<br />
            We measure starting points and track progress so you can see results from your efforts.<br />
            Our expert consultants do the heavy lifting to help you make sense of your data.
          </p>
        </div>
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Human-centered.jpg" alt="Human-centered" className="approach-image image-no-3" />
          <br />
          <h3>Human-centered</h3>
          <p>
            There's a wide gap between knowing what needs to get done and actually motivating human beings to do it.<br />
            We leverage our experience in clinical psychology to break down barriers, guide difficult conversations, and motivate people to make real changes.
          </p>
        </div>
        <div className="approach-item1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_410xAUTO_contain_center-center_none/Impact-first.png" alt="Impact first" className="approach-image" />
          <br />
          <h3>Impact first</h3>
          <p>
            You can certainly keep yourself busy with a wide range of DEIB efforts, but are they actually making a difference?<br />
            We ensure that the answer is yes. That means we don’t sell services that have little impact (hello one-off trainings)<br />
            and challenge our clients to make meaningful change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Img;
