import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  return (
    <div>
    <div className="profile-container">
      <div className="profile-content">
        {/* Left - Profile Image */}
        <div className="profile-image">
          <img src="/images/Team/1.jpg" alt="Shamalka Perera" />
        </div>

        {/* Right - Profile Text */}
        <div className="profile-text">
          <h2 className="profile-name">Shamalka Perera, <span className="phd">PhD</span></h2>
          <h3 className="profile-role">Principal Consultant</h3>
          <p className="profile-description">
            With an academic background in Human Resource Management (HRM), I developed a strong passion 
            for fostering positive work cultures where employees can truly reach their full potential...
          </p>
          
          <p className="profile-description">
            Reflecting on my own experience, I realized how fundamental the need to belong is...
          </p>

          <p className="profile-description">
            With extensive consulting experience in the education sector, I combine my expertise...
          </p>

          <div className="linkedin-section">
            <p>Connect with me on LinkedIn</p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>

          <div className="cta">
            <p><i>Want a rendez-vous avec moi?</i></p>
            <button className="book-session">Book a free strategy session now!</button>
          </div>
        </div>
      </div>

      {/* Social Media Icons (Fixed on the Right) */}
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon instagram" />
        </a>
      </div>
    </div>
    <div className="viridian-container">
      <h2 className="viridian-heading">Why did we choose the name 'Viridian'?</h2>
      <p className="viridian-text">
        Viridian is the name of this beautiful colour you see in the background of this section. 
        It is an intense green pigment with a bluish touch. Viridian symbolises removing toxicity 
        and thus aligns well with our vision and mission.
      </p>
    </div>
    </div>
  );
};

export default Profile;
