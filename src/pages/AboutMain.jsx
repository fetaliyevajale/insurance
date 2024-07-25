import React from "react";

// TeamMember komponenti
const TeamMember = ({ imgSrc, name, role, images }) => (
  <div className="aboutMainContextDiv">
    <img src={imgSrc} alt={name} />
    <h3>{name}</h3>
    <h4>{role}</h4>
    <div className="aboutMainContextSrcl">
      {images.map((src, index) => (
        <div key={index} id="context1">
          <img src={src} alt={`context-${index}`} />
        </div>
      ))}
    </div>
  </div>
);

export default function AboutMain() {
  const teamMembers = [
    {
      imgSrc: "/resim42.png",
      name: "Nolan Korsgaard",
      role: "Founder & Owners",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim46.png",
      name: "Jaylon Vaccaro",
      role: "Founder & Owners",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim47.png",
      name: "Cooper Saris",
      role: "Engineering Manager",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim48.png",
      name: "Marcus Philips",
      role: "Software Engineer",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim49.png",
      name: "Brandon Herwitz",
      role: "Life Insurance",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim50.png",
      name: "Ryan Gouse",
      role: "Auto Homeowners",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim51.png",
      name: "Miracle Dorwart",
      role: "Health and Disability",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    },
    {
      imgSrc: "/resim52.png",
      name: "Miracle Siphron",
      role: "Business Insurance",
      images: ["/resim43.png", "/resim44.png", "/resim45.png"]
    }
  ];

  return (
    <div className="aboutMain">
      <div className="aboutMainParent">
        <h1>Our Team</h1>
        <h5>
          We are a team of experienced and dedicated insurance professionals who
          are committed to helping our clients protect their assets and their
          future.
        </h5>
      </div>

      <div className="aboutMainContext">
        <div className="aboutMainContextTop">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="aboutMainContextChild">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
        <div className="aboutMainContextBottom">
          {teamMembers.slice(4).map((member, index) => (
            <div key={index} className="aboutMainContextChild">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
