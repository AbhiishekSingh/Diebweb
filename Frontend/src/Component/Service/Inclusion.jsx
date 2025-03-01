import './Inclusion.css'
import { Link } from 'react-router-dom';
function Inclusion() {
  return (
    <div className="diversity-container-inclusion">
      {/* Horizontal Line */}
      <hr className="divider-inclusion" />

      {/* Main Content */}
      <div className="content-inclusion">
        {/* Left Section */}
        <div className="left-section-inclusion">
          <div className="toggle-title-inclusion">
            <div className="toggle-switch-inclusion">
              <div className="toggle-indicator-inclusion"></div>
            </div>
            <h2 className="title-inclusion">Inclusion
            </h2>
          </div>
          <Link to="/Contact" className="cta-button-inclusion">Get in touch</Link>
        </div>

        {/* Right Section - Testimonial */}
        <div className="testimonial-card-inclusion">
          <span className="quote-symbol-inclusion">"</span>
          <p className="testimonial-text-inclusion">
          "Lattice is a Performance Management & Engagement platform used by over 2,000 organizations. We work directly with People Teams, so we recognize how critical it is to have a DEIB lens at all times. We asked Peoplism to create that lens for us— to help us understand how to use Lattice in the most equitable way possible, train our Customer Success Team on these best practices, and provide DEIB resources for our clients and greater community."
          </p>
          <p className="author-name-inclusion">James Thomas</p>
          <p className="author-role-inclusion">Director of Recruiting, Everlaw</p>
          <div className="logo-icon-inclusion">
            <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/testimonial/_AUTOx22_contain_center-center_none/G-grammarly.png" alt="Company Logo" className="logo-image-inclusion" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inclusion;
