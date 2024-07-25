import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import MainContainer from "./MainContainer";
import Content from "./Content";
import Section from "./Section";
import Footer from "./Footer";
import FooterAside from "./FooterAside";
import FooterFoot from "./FooterFoot";
export default function Home() {
  const navigate = useNavigate();
  const [showDescriptions, setShowDescriptions] = useState({
    ssl: false,
    account: false,
    bank: false,
    privacy: false,
  });

  const handleGetStart = () => {
    navigate("/insurance-popup");
  };

  const toggleDescription = (key) => {
    setShowDescriptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="home">
      <div className="homeTop container">
        <div className="HomeRight">
          <h1>Let us help you protect your assets</h1>
          <h5>
            We work with you to customize a policy that fits your budget and
            your needs. And we're always available to help if you have a claim.
          </h5>

          <button className="HomeBtn" onClick={handleGetStart}>
            Get start
          </button>
        </div>

        <div className="HomeLeft">
          <img src="/resim2.png" alt="resim2" />
        </div>
      </div>

      <div className="homeTopLink">
        <div className="homeTopLinkResim1">
          <img src="/resim3.png" alt="resim3" />
        </div>
        <div className="homeTopLinkResim2">
          <img src="/resim4.png" alt="resim4" />
        </div>
        <div className="homeTopLinkResim3">
          <img src="/resim5.png" alt="resim5" />
        </div>
        <div className="homeTopLinkResim3">
          <img src="/resim6.png" alt="resim6" />
        </div>
        <div className="homeTopLinkResim3">
          <img src="/resim7.png" alt="resim7" />
        </div>
      </div>

      <div className="HomeTopH1">
        <h1>What are the different types of insurance?</h1>
      </div>

      <div className="HomeTopSquare">
        <div className="HomeTopSquare1">
          <p id="Sqrp1">
            <img src="/resim8.png" alt="resim8" />
          </p>
          <h5>Car insurance</h5>
          <h6>
            This type of insurance protects you financially in the event of an
            accident. 
          </h6>
        </div>

        <div className="HomeTopSquare1">
          <p id="Sqrp1">
            <img src="/resim9.png" alt="resim9" />
          </p>
          <h5>Life insurance</h5>
          <h6>
            This type of insurance provides financial support to your loved ones
            if you die.
          </h6>
        </div>

        <div className="HomeTopSquare1">
          <p id="Sqrp1">
            <img src="/resim10.png" alt="resim10" />
          </p>
          <h5>Business insurance</h5>
          <h6>
            This type of insurance protects your business from financial losses
            due to things{" "}
          </h6>
        </div>

        <div className="HomeTopSquare1">
          <p id="Sqrp1">
            <img src="/resim11.png" alt="resim11" />
          </p>
          <h5>Health insurance</h5>
          <h6>
            This type of insurance helps pay for your medical expenses if you
            get sick or injured.
          </h6>
        </div>
      </div>
      <Main />
      <MainContainer
        showDescriptions={showDescriptions}
        toggleDescription={toggleDescription}
      />
      <Content />
      <Section />
      <Footer />
      <FooterAside/>
      < FooterFoot />
    </div>
  );
}
