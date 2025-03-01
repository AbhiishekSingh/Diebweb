// import React from "react";
// import "./Header.css"; // Import the CSS file

// const Header = () => {
//   return (
//     <nav className="nav-container">
//       {/* Logo */}
//       <div className="nav-logo">
//         <img src="/logo.png" alt="Logo" />
//         <span>peoplism</span>
//       </div>

//       {/* Navigation Links */}
//       <ul className="nav-links">
//         <li><a href="#">Home</a></li>
//         <li className="nav-dropdown">
//           <a href="#">Services</a>
//           <div className="nav-dropdown-menu">
//             <a href="#">Strategy & Consulting</a>
//             <a href="#">Training</a>
//           </div>
//         </li>
//         <li><a href="#">Resources</a></li>
//         <li><a href="#">About us</a></li>
//         <li><a href="#">Careers</a></li>
//         <li><a href="#">Impact</a></li>
//       </ul>

//       {/* Contact Button */}
//       <button className="nav-contact-btn">Contact us</button>
//     </nav>
//   );
// };

// export default Header;

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
        {/* <li><Link to="/service">Service</Link></li> */}
        <li><Link to="/about-us">About us</Link></li>
        <li className="nav-dropdown">
          <a href="/Service">Services</a>
          <div className="nav-dropdown-menu">
            <Link to="/strategy&consulting">Strategy & Consulting</Link>
            <Link to="/traning">Traning</Link>
          </div>
        </li>
        <li><Link to="/impact">Impact</Link></li>
        <li><Link to="/career">Careers</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>

      {/* Contact Button */}
      <button className="nav-contact-btn"><Link to="/contact" className="nav-contact-btn">Contact</Link></button>
    </nav>
  );
};

export default Header;
