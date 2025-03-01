import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      {/* Divider Line */}
      <hr className="divider1" />

      {/* Title */}
      <h1 className="form-title">SEND A MESSAGE</h1>

      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button className="toggle-btn active">General Enquiries</button>
        <button className="toggle-btn">Press Enquiries</button>
      </div>

      {/* Form */}
      <form className="form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullname" className="form-label">Full name</label>
          <input type="text" id="fullname" placeholder="Full name" className="form-input" />
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input type="email" id="email" placeholder="Email Address" className="form-input" required />
        </div>

        {/* Company */}
        <div className="form-group">
          <label htmlFor="company" className="form-label">Company</label>
          <input type="text" id="company" placeholder="Company" className="form-input" />
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" id="subject" placeholder="Subject" className="form-input" />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">How can we help?</label>
          <textarea id="message" placeholder="Write your message here..." className="form-textarea" rows="5"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Contact us</button>
      </form>
    </div>
  );
};

export default ContactForm;
