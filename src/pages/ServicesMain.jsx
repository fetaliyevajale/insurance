import React from "react";

function ServicesMain() {
  return (
    <div className="servicesMain">
      <div className="servicesMainLeft">
        <img src="/resim40.png" alt="resim40" />
      </div>
      <div className="serviceMainRight">
        <h2>Business insurance</h2>
        <h5>
          This type of insurance protects your business from financial losses
          due to things like fire, theft, and lawsuits. It can also cover the
          cost of your employees' medical expenses if they are injured on the
          job.
        </h5>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default ServicesMain;
