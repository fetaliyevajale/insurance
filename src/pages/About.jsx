import React from "react";
import AboutHeader from "./AboutHeader";
import AboutMain from "./AboutMain";
import AboutSection from "./AboutSection";
import AboutFooter from "./AboutFooter";
function About() {
  return (
    <div className="about">
      <div className="aboutChild">
        <button>ABOUT US</button>
        <h1>
          We are a leading provider of insurance solutions for individuals and
          businesses
        </h1>
      </div>
      <AboutHeader />
      <AboutMain />
      <AboutSection />
      <AboutFooter />
    </div>
  );
}

export default About;
