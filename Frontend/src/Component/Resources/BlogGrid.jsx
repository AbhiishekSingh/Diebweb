import React from "react";
import "./Blog.css"; // Import the CSS file

const blogs = [
  {
    title: "How to Reduce Bias in Performance Reviews: Steps for Managers",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/manager.jpg",
  },
  {
    title: "4 Components of an Effective DEI Strategy and How To Achieve Them",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/microsoft-365-MFK0JpFU13U-unsplash-1.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/jason-goodman-Oalh2MojUuk-unsplash-1.jpeg",
  },
  {
    title: "How to Run an Effective DEI Survey: A Comprehensive Guide",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/allgo-an-app-for-plus-size-people-eqlRthvN188-unsplash.jpg",
  },
  {
    title: "Sharpening Your Focus: How to Set Powerful DEI Survey Goals",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/side-view-people-studying-together.jpg",
  },
  {
    title: "DEI Training: What, Why and How?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/christina-wocintechchat-com-0hGVZGBnW7U-unsplash-1.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/krakenimages-376KN_ISplE-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/amy-hirschi-JaoVGh5aJ3E-unsplash-1_2023-02-17-142551_bcql.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/christina-wocintechchat-com-4PU-OC8sW98-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/christina-wocintechchat-com-eF7HN40WbAQ-unsplash-1.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/jason-goodman-vbxyFxlgpjM-unsplash-1.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/jud-mackrill-Of_m3hMsoAA-unsplash-1.jpeg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/joshua-woods-hUREQwNYiZQ-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/elisa-ventur-bmJAXAz6ads-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/christina-wocintechchat-com-rCyiK4_aaWw-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/michal-matlon-SVtgXcGrARo-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/kyle-glenn-nXt5HtLmlgE-unsplash.jpg",
  },
  {
    title: "DEI Assessment: What Is It, and Why Should You Run One?",
    image: "https://s3.us-east-1.amazonaws.com/peoplism.s8/hero/_408x280_fit_center-center_none/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
  },
];

const BlogGrid = () => {
  return (
    <div className="blog-container">
      <hr className="top-line" />
      <h2 className="blog-header">BLOG</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
            <button className="blog-button">Read blog post</button>
            <div className="vertical-line"></div> {/* Vertical line on the right */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
