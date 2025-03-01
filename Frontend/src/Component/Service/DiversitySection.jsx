import './DiversitySection.css'
import { Link } from 'react-router-dom'
function DiversitySection() {
  return (
    <div className="diversity-container-add3">
      {/* Horizontal Line */}
      <hr className="divider-add3" />

      {/* Main Content */}
      <div className="content-add3">
        {/* Left Section */}
        <div className="left-section-add3">
          <div className="toggle-title-add3">
            <div className="toggle-switch-add3">
              <div className="toggle-indicator-add3"></div>
            </div>
            <h2 className="title-add3">Diversity</h2>
          </div>
          <Link to="/Contact" className="cta-button-add3">Get in touch</Link>
        </div>

        {/* Right Section - Testimonial */}
        <div className="testimonial-card-add3">
          <span className="quote-symbol-add3">"</span>
          <p className="testimonial-text-add3">
            "Peoplism helped us identify where we could adopt more inclusive hiring processes,
            and were instrumental in helping us roll out those changes to hiring teams. As a
            result, we've improved alignment between recruiting and hiring managers, reduced bias
            in our processes, and built a more diverse company."
          </p>
          <p className="author-name-add3">James Thomas</p>
          <p className="author-role-add3">Director of Recruiting, Everlaw</p>
          <div className="logo-icon-add3"></div>
        </div>
      </div>
    </div>
  )
}

export default DiversitySection