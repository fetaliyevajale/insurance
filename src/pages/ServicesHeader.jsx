import React from "react";

function ServicesHeader() {
  return (
    <div className="servicesHeader">
      <div className="servicesHeaderLeft">
        <h2>Life insurance</h2>
        <h5>
          This type of insurance provides financial support to your loved ones
          if you die. It can be used to pay off debts, cover funeral expenses,
          or provide for your children's education.
        </h5>
        <button>Get Started</button>
      </div>

      <div className="servicesHeaderRight">
      <img src="/resim39.png" alt="resim39" />
      </div>
    </div>
  );
}

export default ServicesHeader;
