import { useState } from "react";
import "./TalentList.css";

export default function TalentList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="talent-container">
      <hr className="talent-divider" />
      <div className="talent-header">
        <h2 className="talent-heading">Join our talent list</h2>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "x" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="talent-content">
          <p className="talent-text">
            We don't currently have any openings at Peoplism, but we would love to connect when a new role opens up.
            Please email us at <a href="mailto:info@peoplism.com">info@peoplism.com</a> to be added to our talent list and we will email you when new roles are available.
          </p>
          <button className="talent-button">Email us</button>
        </div>
      )}
    </div>
  );
}