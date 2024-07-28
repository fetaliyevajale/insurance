// src/components/InsurancePopup.js
import React, { useState } from "react";
import "../index.css"; // Modal üçün stil əlavə edin

function InsurancePopup({ isOpen, onClose }) {
  const [selectedTable, setSelectedTable] = useState(null);

  if (!isOpen) return null;

  const handleTableClick = (index) => {
    setSelectedTable(index);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="insurance_right">
          <h1>Book 30 Minute Call</h1>
          <h3>
            An average call usually lasts 30 minutes and you can get all your
            queries addressed during this time.
          </h3>

          <div className="insurance-popup-child">
            <div
              className={`popup_table ${selectedTable === 1 ? 'selected' : ''}`}
              onClick={() => handleTableClick(1)}
            >
              <div className="table_srql">
                {selectedTable === 1 ? (
                  <img src="/check (2).png" alt="check (2)" />
                ) : (
                  <span>1</span>
                )}
              </div>
              <h5>Insurance</h5>
            </div>

            <div
              className={`popup_table ${selectedTable === 2 ? 'selected' : ''}`}
              onClick={() => handleTableClick(2)}
            >
              <div className="table_srql">
                {selectedTable === 2 ? (
                  <img src="/check (2).png" alt="check (2)" />
                ) : (
                  <span>2</span>
                )}
              </div>
              <h5>Date & Time</h5>
            </div>

            <div
              className={`popup_table ${selectedTable === 3 ? 'selected' : ''}`}
              onClick={() => handleTableClick(3)}
            >
              <div className="table_srql">
                {selectedTable === 3 ? (
                  <img src="/check (2).png" alt="check (2)" />
                ) : (
                  <span>3</span>
                )}
              </div>
              <h5>Contact details</h5>
            </div>
            <div className="inurance_border"></div>
          </div>
        </div>
        <div className="border_popup"></div>
      </div>
    </div>
  );
}

export default InsurancePopup;
