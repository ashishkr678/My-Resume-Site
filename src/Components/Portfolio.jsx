import React from "react";
import image from "../images/programming-computer.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "E-Commerce Website",
    description:
      "Crafting an advanced e-commerce solution with MERN Stack & Razorpay. From seamless user experience to secure transactions, trackable orders, and efficient admin management – all in one powerful web application.",
    url: "https://e-commerce-website-delta-three.vercel.app/",
  },
  {
    title: "Chess Game",
    description:
      "Master chess with our interactive game featuring move tracking, undo options, and more! Built with Python Chess, HTML, JavaScript & Flask for a seamless and engaging experience.",
    url: "https://chess-game-opal-theta.vercel.app/ ",
  },
  {
    title: "Blog Website",
    description:
      "Explore our MERN-stack blog featuring secure JWT authentication, multiple posts, and a responsive design for seamless reading and posting. Join us today for a user-friendly blogging experience!",
    url: "https://blog-pearl-kappa.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my education, skills, experience and abilities.",
    url: "https://github.com/ashishkr678/My-Resume-pdf",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#040b19" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", paddingLeft: "2rem" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
