import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./box.css";

const Box = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="container-add6">
      <h1 className="title-add6">Our Integrated Model</h1>
      <p className="description-add6">
        Good HR has DEIB embedded at every turn. We help people leaders operationalize
        best-practice strategies that advance DEIB and create more efficient and high-performing
        organizations. Through <span className="underline-add6">strategy & consulting</span> and <span className="underline-add6">trainings</span>, we ensure your
        people and your organization will flourish.
      </p>

      <div className="grid-container-add6">
        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Diversity</h2>
          <p className="text-add6">
            Broaden your candidate pool and hire the best person for the job
          </p>
          <Link to="/Service" className="button-add6 diversity-add6" onClick={() => window.scrollTo(0, 0)}>
            View Services
          </Link>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Inclusion</h2>
          <p className="text-add6">
            Create a culture where everyone feels supported, valued, and able to participate
          </p>
          <button className="button-add6 inclusion-add6" onClick={() => handleNavigation("/Service")}>
            View Services
          </button>
        </div>
        <hr className="horizontal-line-add6" />

        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Equity</h2>
          <p className="text-add6">
            Develop, evaluate, promote and compensate employees fairly and objectively
          </p>
          <button className="button-add6 equity-add6" onClick={() => handleNavigation("/Service")}>
            View Services
          </button>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Belonging</h2>
          <p className="text-add6">
            Engage employees through connection and psychological safety
          </p>
          <button className="button-add6 belonging-add6" onClick={() => handleNavigation("/Service")}>
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
