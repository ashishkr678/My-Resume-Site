import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Ashish Kumar",
  title: "Web Developer & Data Analyst",
  email: "ashishkumat818@gmail.com",
  gitHub: "ashishkr678",
  instagram: "s_ashish01",
  linkedIn: "ashish-kr01",
  medium: "",
  twitter: "s_ashish01",
  youTube: "",
};

const primaryColor = "#081529";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
