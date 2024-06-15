import React from "react";
import image from "../images/milad-fakurian-tAWh-oWTSZE-unsplash.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a Web application developer & Data analyst student studying at GITA Autonmous College. I enjoy creating unique and responsive web applications in creative ways. I also do data analysis on varieties of data to extract the usefull insights from the raw data.";

const skillsList = [
  "MERN Stack Developer",
  "User experience",
  "Responsive Design",
  "Api Testing",
  "Selenium Web Scraping",
  "Data Preprocessing",
  "Data Visualization",
  "Deployment",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web Development & Data Analyst experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#040b19",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          opacity: "90%",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "white",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
