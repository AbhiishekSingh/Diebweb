import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Equity.css';

function Equity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="diversity-container-equity">
      {/* Horizontal Line */}
      <hr className="divider-equity" />

      {/* Main Content */}
      <div className="content-equity">
        {/* Left Section */}
        <div className="left-section-equity">
          <div className="toggle-title-equity">
            <div className="toggle-switch-equity">
              <div className="toggle-indicator-equity"></div>
            </div>
            <h2 className="title-equity">Equity</h2>
          </div>
          <Link to="/Contact" className="cta-button-equity">Get in touch</Link>
          {/* New Connect Button */}
          <Link to="/NextPage" className="connect-button-equity">Connect</Link>
        </div>

        {/* Right Section - Testimonial */}
        <div className="testimonial-card-equity">
          <span className="quote-symbol-equity">"</span>
          <p className="testimonial-text-equity">
            "Lattice is a Performance Management & Engagement platform used by over 2,000 organizations. We work directly with People Teams, so we recognize how critical it is to have a DEIB lens at all times. We asked Peoplism to create that lens for us— to help us understand how to use Lattice in the most equitable way possible, train our Customer Success Team on these best practices, and provide DEIB resources for our clients and greater community."
          </p>
          <p className="author-name-equity">James Thomas</p>
          <p className="author-role-equity">Director of Recruiting, Everlaw</p>
          <div className="logo-icon-equity">
            <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_AUTOx22_contain_center-center_none/lattice.png" alt="Company Logo" className="logo-image-equity" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equity;
