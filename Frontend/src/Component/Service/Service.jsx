import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Home from "../Homes/Home";
import Assessment from "./Assessment";
import DiversitySection from "./DiversitySection";
import Services from "./Services";
import Equity from "./Equity";
import Services2 from "./Services2";
import Inclusion from "./Inclusion";
import Services3 from "./Services3";
import Belonging from "./Belonging";
import Services4 from "./Services4";
import { data, redirect, replace } from "react-router-dom";
const Service = () => {
  return (
    <div>
    <div className="dei-container">
      <div className="dei-content">
        <h1 className="dei-heading">
          Your DEI <br /> journey starts <br />
          <span className="dei-highlight">here</span>
        </h1>
        <p className="dei-description">
          Our most successful clients begin with our DEIB Assessment & Roadmap. 
          We help you understand how you’re doing across all areas of DEIB, 
          learn specific actions for improvement, and take the first steps.
        </p>
      </div>
    </div>
   <div className="service-image"> <img className="image1" src="https://peoplism.com/assets/images/services-illo-1300.avif" alt="" /> </div> 
     <div className="deib-container">
      <div className="deib-content">
        <h2 className="deib-title">DEIB Assessment & Roadmap</h2>
        <p className="deib-description">
          We start by taking an expert lens to the processes and policies that most affect DEIB.
          We involve your people every step of the way to generate buy-in, enthusiasm, and increase 
          readiness for change. Finally, we work with you to create a comprehensive and long-term plan 
          to drive DEIB forward at your organization.
        </p>
        <Link to="/Contact" className="deib-button">Partner with us</Link>
      </div>
    </div>
    <Assessment/>
    <div className="next-container">
      <h2 className="next-title">What comes next</h2>
      <p className="next-text">
        Some clients work to implement their roadmap completely on their own, but most
        take on a few initiatives themselves, and then turn to our DEI consultants and
        comprehensive suite of services for expert-led and pressure-tested solutions.
      </p>
    </div>
    <div class="picture-img">
        <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/services/peoplism-services-diagram.svg" alt="" />
    </div>
    <DiversitySection/>
    <Services/>
    <Equity/>
    <Services2/>
    <Inclusion/>
    <Services3/>
    <Belonging/>
    <Services4/>
    </div>

  );
};

export default Service;
