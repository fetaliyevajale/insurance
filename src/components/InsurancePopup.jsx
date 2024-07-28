import React, { useState } from "react";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import "../index.css"; 
import LocationSelect from './LocationSelect';

function InsurancePopup({ isOpen, onClose }) {
  const [selectedTable, setSelectedTable] = useState(1);
  const [activeChild, setActiveChild] = useState(null);
  const [date, setDate] = useState(new Date());

  if (!isOpen) return null;

  const handleTableClick = (index) => {
    setSelectedTable(index);
  };

  const handleChildClick = (index) => {
    setActiveChild(index);
  };

  // Tarixi formatlamaq üçün köməkçi funksiya
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
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
              <div
                className={`table_srql ${activeChild === 1 ? 'active' : ''}`}
                onClick={() => handleChildClick(1)}
              >
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
              <div
                className={`table_srql ${activeChild === 2 ? 'active' : ''}`}
                onClick={() => handleChildClick(2)}
              >
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
              <div
                className={`table_srql ${activeChild === 3 ? 'active' : ''}`}
                onClick={() => handleChildClick(3)}
              >
                {selectedTable === 3 ? (
                  <img src="/check (2).png" alt="check (2)" />
                ) : (
                  <span>3</span>
                )}
              </div>
              <h5>Contact Details</h5>
            </div>
            <div className="inurance_border"></div>
          </div>
        </div>

        <div className="border_popup"></div>

        <div className={`insurance ${selectedTable === 1 ? 'visible' : ''}`}>
          <div className="insurance_child">
            <div
              className={`insurance_child-srql ${activeChild === 1 ? 'active' : ''}`}
              onClick={() => handleChildClick(1)}
            ></div>
            <h6>Insurance</h6>
          </div>
          <h5>This type of insurance protects you financially in the event of an accident.</h5>

          <div className="insurance_child">
            <div
              className={`insurance_child-srql ${activeChild === 2 ? 'active' : ''}`}
              onClick={() => handleChildClick(2)}
            ></div>
            <h6>Insurance</h6>
          </div>
          <h5>This type of insurance protects you financially in the event of an accident.</h5>

          <div className="insurance_child">
            <div
              className={`insurance_child-srql ${activeChild === 3 ? 'active' : ''}`}
              onClick={() => handleChildClick(3)}
            ></div>
            <h6>Insurance</h6>
          </div>
          <h5>This type of insurance protects you financially in the event of an accident.</h5>

          <div className="insurance_child">
            <div
              className={`insurance_child-srql ${activeChild === 4 ? 'active' : ''}`}
              onClick={() => handleChildClick(4)}
            ></div>
            <h6>Insurance</h6>
          </div>
          <h5>This type of insurance protects you financially in the event of an accident.</h5>

          <button className="insurance_child-srql_btn">Select Time</button>
        </div>

        <div className={`time_date ${selectedTable === 2 ? 'visible' : ''}`}>
          <p>Select Date & Time</p>
          <Calendar
            onChange={setDate}
            value={date}
          />
          <LocationSelect />
          <div className="time">
            <h3>{formatDate(date)}</h3>
            <h4></h4>
          </div>
        </div>

        <div className={`contact_info ${selectedTable === 3 ? 'visible' : ''}`}>
          <p>Contact Details: Provide your contact information or get in touch with us.</p>
        </div>
      </div>
    </div>
  );
}

export default InsurancePopup;
