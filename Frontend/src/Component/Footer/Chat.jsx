import React, { useState } from "react";
import "./Chat.css"; // Import the CSS file

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <p>Please fill out the form below and we will get back to you as soon as possible.</p>
          </div>
          <div className="chat-body">
            <input type="text" placeholder="* Name" className="chat-input" />
            <input type="email" placeholder="* Email" className="chat-input" />
            <textarea placeholder="* Message" className="chat-textarea"></textarea>
            <button className="chat-submit">➤ Submit</button>
          </div>
          <p className="chat-footer">💬 <a href="#">Add free live chat to your site</a></p>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>
    </div>
  );
};

export default Chat;
