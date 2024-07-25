import React from "react";

const values = [
  {
    imgSrc: "/resim53.png",
    title: "Integrity",
    description: "We are committed to providing our clients with honest.",
  },
  {
    imgSrc: "/resim54.png",
    title: "Excellence",
    description: "We strive to provide our clients with the highest level.",
  },
  {
    imgSrc: "/resim55.png",
    title: "Innovation",
    description: "We are looking for new ways to improve our services",
  },
  {
    imgSrc: "/resim56.png",
    title: "Community",
    description: "We are committed to supporting our communities.",
  },
];

export default function AboutSection() {
  return (
    <div className="aboutSection">
      <h1>Our Values</h1>
      <div className="aboutSectionChild">
        {values.map((value, index) => (
          <div key={index} className="aboutSectionSqr">
            <div className="aboutSectionImg">
              <img src={value.imgSrc} alt={value.title} />
            </div>
            <div className="aboutSectionText">
              <h3>{value.title}</h3>
              <h4>{value.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
