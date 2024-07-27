// src/components/InsurancePopup.js
import React from "react";
import "../index.css"; // Modal üçün stil əlavə edin

function InsurancePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h1>Insurance Popup Page</h1>
        <p>This is the insurance popup page content.</p>
      </div>
    </div>
  );
}

export default InsurancePopup;
