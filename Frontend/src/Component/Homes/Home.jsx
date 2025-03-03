import React from "react";
import "./Home.css";
import Testimonials from "./Testimonials";
import { Link, useNavigate } from "react-router-dom";


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


 

const Home = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div>
    <div className="home-container">
      {/* Heading Section */}
      <div className="heading-section">
        <h1>
          Get a <span className="highlight">thriving</span> organization, {" "}
          <span className="highlight">quicker</span> and {" "}
          <span className="highlight">easier</span>.
        </h1>
        <p className="subheading">
          Peoplism is an HR & DEIB consulting firm that gets results.
        </p>
      </div>

      {/* Button Section */}
      <div className="button-section">
        <Link to="/Contact" className="partner-btn">Partner with us</Link>
        <Link to="/Service" className="services-btn">See our services</Link>
      </div>

      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-slider">
          <div className="logo-item">
            <img
              src="/images/dddd.jpeg"
              alt="Logo 1"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/betterment2.svg"
              alt="Logo 2"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/thredup.svg"
              alt="Logo 3"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/lattice.png"
              alt="Logo 4"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/_105x36_fit_center-center_none/thinx.png"
              alt="Logo 5"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://s3.us-east-1.amazonaws.com/peoplism.s8/classpass-logo.svg"
              alt="Logo 6"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <StatsSection/> */}
    <div className="stats-container">
      <div className="stats-heading">
        Work with us to  <span className="move-text">move</span> the needle
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
    {/* <Box/> */}


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

    <Testimonials/>
    <div className="sky-img-container">
      <img src="/images/sky.avif" alt="" className="sky-images"/>
    </div>
    </div>
  );
};

export default Home;
