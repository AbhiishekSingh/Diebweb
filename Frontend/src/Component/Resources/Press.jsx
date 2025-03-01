import React from "react";
import "./Press.css";

const Press = () => {
  const articles = [
    {
      id: 1,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_408x280_fit_center-center_none/Oct22_05_CarmenDeno.jpeg",
      source: "Harvard Business Review",
      title: "Is Your Leadership Development Program Undermining Your DEI Goals?",
      buttonText: "Read article",
    },
    {
      id: 2,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_408x280_fit_center-center_none/Screen-Shot-2023-04-12-at-1.30.26-PM.png",
      source: "Unleash",
      title: "How to sell DEIB to your CEO",
      buttonText: "Read article",
    },
    {
      id: 3,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_408x280_fit_center-center_none/26walmart-dei-jkbz-superJumbo.webp",
      source: "The New York Times",
      title: "Walmart, Once Eager to Promote Diversity, Pulls Back Amid Conservative Pressure",
      buttonText: "Read article",
    },
    {
      id: 4,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_408x280_fit_center-center_none/new_parents_baby_ghps41_2022-06-10-095346_etgo.webp",
      source: "",
      title: "Why Now’s the Perfect Time to Retool Your Hiring Process and Get Creative",
      buttonText: "Read article",
    },
    {
      id: 5,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/case-studies/_408x280_fit_center-center_none/GettyImages-1335905608.jpeg",
      source: "Fortune",
      title: "High potential programs are going underground because they’re bad optics—and it’s only making",
      buttonText: "Read article",
    },
    {
      id: 6,
      image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/GettyImages-1180038737_474279_un0cee.jpeg",
      source: "",
      title: "Tool: Leadership Opportunity Selection Template",
      buttonText: "Read article",
    },
    {
        id: 7,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/AdobeStock_218521357.jpeg",
        source: "Harvard Business Review",
        title: "Is Your Leadership Development Program Undermining Your DEI Goals?",
        buttonText: "Read article",
      },
      {
        id: 8,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/p-1-this-simple-chart-will-get-you-to-rethink-your-diversity-program.jpeg",
        source: "Unleash",
        title: "How to sell DEIB to your CEO",
        buttonText: "Read article",
      },
      {
        id: 9,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/_408x280_fit_center-center_none/60f86d500729770012b9203f.jpeg",
        source: "The New York Times",
        title: "Walmart, Once Eager to Promote Diversity, Pulls Back Amid Conservative Pressure",
        buttonText: "Read article",
      },
      {
        id: 10,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/GettyImages-1276362138_473167_ie9hv9.jpeg",
        source: "",
        title: "Why Now’s the Perfect Time to Retool Your Hiring Process and Get Creative",
        buttonText: "Read article",
      },
      {
        id: 11,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/Kofman_CrowdsBias_0218.png",
        source: "Fortune",
        title: "High potential programs are going underground because they’re bad optics—and it’s only making",
        buttonText: "Read article",
      },
      {
        id: 12,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/blog-fight-diversity-fatigue.png",
        source: "",
        title: "Tool: Leadership Opportunity Selection Template",
        buttonText: "Read article",
      },
      {
        id: 13,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/p-1-this-is-how-we-fix-silicon-valleys-sexual-harassment-problem.jpeg",
        source: "Harvard Business Review",
        title: "Is Your Leadership Development Program Undermining Your DEI Goals?",
        buttonText: "Read article",
      },
      {
        id: 14,
        image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/Torch_Peoplism_DEI_Infographic-1-1-image.jpg",
        source: "Unleash",
        title: "How to sell DEIB to your CEO",
        buttonText: "Read article",
      },
  ];

  return (
    <div className="press-container">
      <hr className="press-divider" />
      <h2 className="press-title">Press</h2>
      <div className="press-grid">
        {articles.map((article, index) => (
          <div key={article.id} className="press-card" style={{ borderRight: index % 3 !== 2 ? "1px solid #ccc" : "none" }}>
            <img src={article.image} alt={article.title} className="press-image" />
            <p className="press-source">{article.source}</p>
            <h3 className="press-headline">{article.title}</h3>
            <button className="press-button">{article.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;
