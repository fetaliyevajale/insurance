import React from "react";

export default function AboutHeader() {
  return (
    <div className="aboutHeader">
    
        <div className="aboutHeaderChild">
          <img src="/resim2.png" alt="resim2" />
        </div>
        <div className="aboutHeaderHv">
          <h1>Our Mission</h1>
          <h4>
            Our mission is to provide our clients with the peace of mind that
            comes with knowing that they are protected in the event of an
            unexpected event. We believe that everyone deserves to have access
            to affordable and comprehensive insurance coverage, and we are
            committed to helping our clients find the right insurance policies
            for their needs.
          </h4>
          <button>Contact Us</button>
        </div>
    </div>
  );
}
