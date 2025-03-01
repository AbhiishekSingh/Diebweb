import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import Box from "./Box";
import StatsSection from "./StatsSection";

const Home = () => {
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
    <StatsSection/>
    <Box/>
    <Testimonials/>
    <div className="sky-img-container">
      <img src="/images/sky.avif" alt="" className="sky-images"/>
    </div>
    </div>
  );
};

export default Home;
