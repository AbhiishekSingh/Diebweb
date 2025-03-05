import React from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Justin Brown",
    role: "Advisory Board Member - United States",
    image: "/images/Team/2.png",
  },
  {
    name: "Sunil",
    role: "Tech Expert",
    image: "/images/Team/3.jpg",
  },
  {
    name: "Preshita V",
    role: "Legal & Compliance",
    image: "/images/Team/4.jpg",
  },
  {
    name: "Koyal",
    role: "Advisory Board Member - United States",
    image: "/images/Team/5.jpg",
  },
  {
    name: "Preksha",
    role: "Growth & Strategy",
    image: "/images/Team/5.jpg",
  }
];

const Team = () => {
  const navigate = useNavigate();

  const handleConnect = (index) => {
    navigate(`/profile/${index}`);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="team-container">
      <hr className="top-divider" />
      <h2 className="team-title">The Minds Behind the Mission</h2>
      <p>At DEIB Innovations, our strength is our people—a passionate team of HR strategists, DEI experts, data analysts, and industry leaders who bring together decades of experience in corporate leadership, learning & development, psychology, and change management.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="profile-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <Link to="/profile-details" className="connect-button" onClick={() => handleConnect(index)}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
