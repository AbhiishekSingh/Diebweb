// import React, { useState } from "react";
// import { FaTwitter, FaLinkedin } from "react-icons/fa";
// import "./User.css";

// const teamMembers = [
//   {
//     name: "Amber Madison, LMHC",
//     role: "Co-founder",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A6039.jpg",
//     details: `Amber is a licensed therapist, award-winning lecturer, and nationally noted author...`,
//     questions: [
//       {
//         emoji: "🌙",
//         question: "Night or day?",
//         answer: "Night all the way. I love summer nights staying out until sunrise.",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/ambermadison",
//       linkedin: "https://linkedin.com/in/ambermadison",
//     },
//   },
//   {
//     name: "Genevieve McGahey",
//     role: "Senior Consultant",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A5969.jpg",
//     details: `Genevieve is a dedicated consultant with years of experience in DEIB...`,
//     questions: [
//       {
//         emoji: "🎭",
//         question: "What is something new you dream of trying/learning?",
//         answer: "Acting. I did a bit of theatre in college, and I’d love to get back into it!",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/genevievec",
//       linkedin: "https://linkedin.com/in/genevievec",
//     },
//   },
//   {
//     name: "Nancy Yuen, Ph.D.",
//     role: "Manager",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A5837.jpg",
//     details: `Nancy is a DEIB strategist with a Ph.D. in Sociology...`,
//     questions: [
//       {
//         emoji: "📖",
//         question: "Favorite book?",
//         answer: "‘The Color Purple’ by Alice Walker – it changed my perspective on storytelling.",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/nancyyuen",
//       linkedin: "https://linkedin.com/in/nancyyuen",
//     },
//   },
//   {
//     name: "Amber Madison, LMHC",
//     role: "Co-founder",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A6039.jpg",
//     details: `Amber is a licensed therapist, award-winning lecturer, and nationally noted author...`,
//     questions: [
//       {
//         emoji: "🌙",
//         question: "Night or day?",
//         answer: "Night all the way. I love summer nights staying out until sunrise.",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/ambermadison",
//       linkedin: "https://linkedin.com/in/ambermadison",
//     },
//   },
//   {
//     name: "Genevieve McGahey",
//     role: "Senior Consultant",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A5874.jpg",
//     details: `Genevieve is a dedicated consultant with years of experience in DEIB...`,
//     questions: [
//       {
//         emoji: "🎭",
//         question: "What is something new you dream of trying/learning?",
//         answer: "Acting. I did a bit of theatre in college, and I’d love to get back into it!",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/genevievec",
//       linkedin: "https://linkedin.com/in/genevievec",
//     },
//   },
//   {
//     name: "Nancy Yuen, Ph.D.",
//     role: "Manager",
//     image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/team/_264x264_contain_center-center_none/web-RT-8Y4A5837.jpg",
//     details: `Nancy is a DEIB strategist with a Ph.D. in Sociology...`,
//     questions: [
//       {
//         emoji: "📖",
//         question: "Favorite book?",
//         answer: "‘The Color Purple’ by Alice Walker – it changed my perspective on storytelling.",
//       },
//     ],
//     social: {
//       twitter: "https://twitter.com/nancyyuen",
//       linkedin: "https://linkedin.com/in/nancyyuen",
//     },
//   }, 
// ];

// const Team = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleDetails = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="team-container">
//   <hr className="top-divider" />
//   <div className="team-grid">
//     {teamMembers.map((member, index) => (
//       <div key={index} className="team-member">
//         <img src={member.image} alt={member.name} className="profile-image" />
//         <h3 className="member-name">{member.name}</h3>
//         <p className="member-role">{member.role}</p>
//         <button className="expand-button" onClick={() => toggleDetails(index)}>
//           {expandedIndex === index ? "✕" : "+"}
//         </button>

//         {/* Details section stays inside but follows layout rules */}
//         {expandedIndex === index && (
//           <div className="details-container">
//             <div className="details-left">
//               <h4 className="connect-heading">Connect</h4>
//               <div className="social-links">
//                 <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
//                   <img src="/twitter-icon.png" alt="Twitter" className="social-icon" />
//                 </a>
//                 <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
//                   <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
//                 </a>
//               </div>
//             </div>
//             <div className="details-right">
//               <p className="details-text">{member.details}</p>
//               {member.questions.map((q, idx) => (
//                 <div key={idx} className="question-answer">
//                   <span className="emoji">{q.emoji}</span>
//                   <strong>{q.question}</strong>
//                   <p>{q.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </div>

//   );
// };

// export default Team;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Neetu Mehta ",
    role: "A DEI Catalyst, HR Strategist, and Changemaker",
    image: "/images/Team/1.jpg",
  },
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
  },
  {
    name: "Shyambahadur Prajapati",
    role: "Hr",
    image: "/images/Team/6.enc",
  },
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
      <h2 className="team-title">Our Team</h2>
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
