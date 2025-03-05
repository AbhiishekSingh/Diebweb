import React, { useState } from "react";
import "./Header.css"; // Import the CSS file
import { Link } from 'react-router-dom';
// import logo from './assets/dddd.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="nav-logo">
        <img src="/images/dddd.jpeg"  alt="Logo" />
        <span>DEIB Innovation</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="nav-mobile-menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <li><Link to="/">Home</Link></li>
        <li className="nav-dropdown">
          <li><Link to="/service">Services</Link></li>
          {/* <div className="nav-dropdown-menu">
            <Link to="/strategy&consulting">Strategy & Consulting</Link>
            <Link to="/traning">Traning</Link>
          </div> */}
        </li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/career">Careers</Link></li>
        <li><Link to="/impact">Impact</Link></li>
       
       
      </ul>

      {/* Contact Button */}
      <button className="nav-contact-btn"><Link to="/contact" className="nav-contact-btn">Contact</Link></button>
    </nav>
  );
};

export default Header;