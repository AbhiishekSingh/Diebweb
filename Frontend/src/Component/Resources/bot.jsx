import React from "react";
import "./Bot.css";

const Bot = () => {
  return (
    <div className="resources-container1">
      <hr className="resources-divider1" />
      <h2 className="resources-title1">Resources</h2>
      <div className="resources-grid1">
        {/* Interviewbot Cards */}
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Resources-Slackbot.png" alt="Interviewbot" className="resource-image1" />
          <h3 className="resource-title1">Interviewbot</h3>
          <p className="resource-text1">
            Does your team scramble to figure out interview questions minutes before meeting with a candidate?
            Asking competency-based interview questions is proven to get superior hiring results, but it can be hard to
            put in practice. Our free Slack integration helps interviewers select effective interview questions based on
            role and level in less than 3 minutes!
          </p>
          <button className="resource-button1">Learn more</button>
        </div>
        <div className="resource-card1 change img-business">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Business-Case-for-DEIB.png" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">Business Case for DEIB</h3>
          <p className="resource-text1">
            When it comes to DEIB, there are some complex initiatives that are probably best left to experts like us.
            Presenting the business case for DEIB is not one of those things, and yet this is something we're asked to do
            constantly. So we thought: why not arm everyone with the tools they need to do this themselves?
          </p>
          <button className="resource-button1">Click here to download</button>
        </div>
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Equitable-Performance-Management-ebook.jpg" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">Business Case for DEIB</h3>
          <p className="resource-text1">
            When it comes to DEIB, there are some complex initiatives that are probably best left to experts like us.
            Presenting the business case for DEIB is not one of those things, and yet this is something we're asked to do
            constantly. So we thought: why not arm everyone with the tools they need to do this themselves?
          </p>
          <button className="resource-button1">Click here to download</button>
        </div>
        <div className="resource-card1 change chnage1 img-business1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Udemy-Course.png" alt="Interviewbot" className="resource-image1" />
          <h3 className="resource-title1">Interviewbot</h3>
          <p className="resource-text1">
            Does your team scramble to figure out interview questions minutes before meeting with a candidate?
            Asking competency-based interview questions is proven to get superior hiring results, but it can be hard to
            put in practice. Our free Slack integration helps interviewers select effective interview questions based on
            role and level in less than 3 minutes!
          </p>
          <button className="resource-button1">Learn more</button>
        </div>
        
        {/* Business Case for DEIB Cards */}
        <div className="resource-card1">
          <img src="https://s3.us-east-1.amazonaws.com/peoplism.s8/resources/_630x318_fit_center-center_none/Yellow-Gradient-Modern-Webinar-LinkedIn-Image-Ad.png" alt="Business Case for DEIB" className="resource-image1" />
          <h3 className="resource-title1">Business Case for DEIB</h3>
          <p className="resource-text1">
            When it comes to DEIB, there are some complex initiatives that are probably best left to experts like us.
            Presenting the business case for DEIB is not one of those things, and yet this is something we're asked to do
            constantly. So we thought: why not arm everyone with the tools they need to do this themselves?
          </p>
          <button className="resource-button1">Try it now</button>
        </div>
      </div>
    </div>
  );
};

export default Bot;