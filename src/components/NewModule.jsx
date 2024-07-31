import React from "react";
import "../index.css";

function NewModule({ onClose }) {
  return (
    <div className="new-module-overlay">
      <div className="new-module-content">
        <button className="new-module-close" onClick={onClose}>
        Back to Home
        </button>
        <h1 className="newModulH1">
          <h2 className="newModulH2">
            <img src="/tick-circle.png" alt="tick-circle" />
          </h2>
        </h1>

        <h3 className="newModulH3">Booking Successful!</h3>
        <h4 className="newModulH4">
          We'd love to call with you for 30 minutes to learn more about your
          goals and see how our product can help you achieve them.
        </h4>
        <button className="new-module-close" onClick={onClose}>
        Back to Home
        </button>
        {}
      </div>
    </div>
  );
}

export default NewModule;
