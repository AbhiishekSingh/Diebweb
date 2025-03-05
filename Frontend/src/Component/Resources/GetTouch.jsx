import "./GetTouch.css";

export default function  GetTouch() {
  return (
    <div className="g-form-container">
      <div className="g-form-box">
        <h2 className="g-form-title">Get in Touch</h2>
        <form className="g-form-content">
          <div className="g-form-group">
            <label className="g-form-label">Name</label>
            <input type="text" className="g-form-input" placeholder="Enter your name" />
          </div>
          
          <div className="g-form-group">
            <label className="g-form-label">Email</label>
            <input type="email" className="g-form-input" placeholder="Enter your email" />
          </div>
          
          <div className="g-form-group">
            <label className="g-form-label">Organization</label>
            <input type="text" className="g-form-input" placeholder="Enter your organization" />
          </div>
          
          <div className="g-form-group">
            <label className="g-form-label">Designation</label>
            <input type="text" className="g-form-input" placeholder="Enter your designation" />
          </div>
          
          <button type="submit" className="g-form-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
