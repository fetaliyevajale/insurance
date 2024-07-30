import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../index.css";
import LocationSelect from "./LocationSelect";
import NewModule from "./NewModule";

function InsurancePopup({ isOpen, onClose }) {
  const [selectedTable, setSelectedTable] = useState(1);
  const [activeChild, setActiveChild] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [isNewModuleOpen, setNewModuleOpen] = useState(false);

  const handleTableClick = (index) => {
    setSelectedTable(index);
  };

  const handleChildClick = (index) => {
    setActiveChild(index);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedTime = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const openNewModule = () => {
    setNewModuleOpen(true);
    onClose(); // InsurancePopup-u bağlayır
  };

  const closeNewModule = () => setNewModuleOpen(false);

  if (!isOpen && !isNewModuleOpen) return null; 

  return (
    <>
      {!isNewModuleOpen && isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={onClose}>
              X
            </button>
            <div className="insurance_right">
              <h1>Book 30 Minute Call</h1>
              <h3>
                An average call usually lasts 30 minutes and you can get all
                your queries addressed during this time.
              </h3>

              <div className="insurance-popup-child">
                <div
                  className={`popup_table ${
                    selectedTable === 1 ? "selected" : ""
                  }`}
                  onClick={() => handleTableClick(1)}
                >
                  <div
                    className={`table_srql ${
                      activeChild === 1 ? "active" : ""
                    }`}
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
                  className={`popup_table ${
                    selectedTable === 2 ? "selected" : ""
                  }`}
                  onClick={() => handleTableClick(2)}
                >
                  <div
                    className={`table_srql ${
                      activeChild === 2 ? "active" : ""
                    }`}
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
                  className={`popup_table ${
                    selectedTable === 3 ? "selected" : ""
                  }`}
                  onClick={() => handleTableClick(3)}
                >
                  <div
                    className={`table_srql ${
                      activeChild === 3 ? "active" : ""
                    }`}
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

            <div
              className={`insurance ${
                selectedTable === 1 ? "visible" : "invisible"
              }`}
            >
              <div className="insurance_child">
                <div
                  className={`insurance_child-srql ${
                    activeChild === 1 ? "active" : ""
                  }`}
                  onClick={() => handleChildClick(1)}
                ></div>
                <h6>Insurance</h6>
              </div>
              <h5>
                This type of insurance protects you financially in the event of
                an accident.
              </h5>

              <div className="insurance_child">
                <div
                  className={`insurance_child-srql ${
                    activeChild === 2 ? "active" : ""
                  }`}
                  onClick={() => handleChildClick(2)}
                ></div>
                <h6>Insurance</h6>
              </div>
              <h5>
                This type of insurance protects you financially in the event of
                an accident.
              </h5>

              <div className="insurance_child">
                <div
                  className={`insurance_child-srql ${
                    activeChild === 3 ? "active" : ""
                  }`}
                  onClick={() => handleChildClick(3)}
                ></div>
                <h6>Insurance</h6>
              </div>
              <h5>
                This type of insurance protects you financially in the event of
                an accident.
              </h5>

              <div className="insurance_child">
                <div
                  className={`insurance_child-srql ${
                    activeChild === 4 ? "active" : ""
                  }`}
                  onClick={() => handleChildClick(4)}
                ></div>
                <h6>Insurance</h6>
              </div>
              <h5>
                This type of insurance protects you financially in the event of
                an accident.
              </h5>

              <button className="insurance_child-srql_btn">Select Time</button>
            </div>

            <div
              className={`time_date ${
                selectedTable === 2 ? "visible" : "invisible"
              }`}
            >
              <p>Select Date & Time</p>
              <Calendar onChange={setDate} value={date} />
              <LocationSelect />
              <div className="time">
                <h3>{formatDate(date)}</h3>
                <h4>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    {generateTimeOptions().map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </h4>
              </div>
              <button className="time_date_btn">Confirm</button>
            </div>

            <div
              className={`contact_info ${
                selectedTable === 3 ? "visible" : "invisible"
              }`}
            >
              <p>Contact details</p>
              <div className="contact_form">
                <form action="">
                  <label className="contact_label" htmlFor="text">
                    First Name <h2>*</h2>
                  </label>
                  <input
                    className="contact_input"
                    type="text"
                    name="text"
                    id="text"
                    placeholder="First Name"
                  />
                </form>

                <form action="">
                  <label className="contact_label1" htmlFor="text">
                    Last Name <h2>*</h2>
                  </label>
                  <input
                    className="contact_input1"
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Last Name"
                  />
                </form>
              </div>

              <form action="">
                <label className="action_label" htmlFor="email">
                  Email <h2>*</h2>
                </label>
                <input
                  className="action_contact"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
              </form>

              <form action="">
                <div className="action_number">
                  <select
                    className="select-name"
                    name="phoneCode"
                    id="phoneCode"
                  >
                    <option value="+93">Afqanıstan (+93)</option>
                    <option value="+355">Albaniya (+355)</option>
                    <option value="+213">Alcanda (+213)</option>
                    <option value="+376">Andorra (+376)</option>
                    <option value="+244">Anqola (+244)</option>
                    <option value="+1">Antigua və Barbuda (+1)</option>
                    <option value="+54">Argentina (+54)</option>
                    <option value="+374">Ermənistan (+374)</option>
                    <option value="+297">Aruba (+297)</option>
                    <option value="+61">Avstraliya (+61)</option>
                    <option value="+43">Avstriya (+43)</option>
                    <option value="+994">Azərbaycan (+994)</option>
                    <option value="+1">ABŞ və Kanada (+1)</option>
                    <option value="+20">Misir (+20)</option>
                    <option value="+251">Efiopiya (+251)</option>
                    <option value="+33">Fransa (+33)</option>
                    <option value="+49">Almaniya (+49)</option>
                    <option value="+91">Hindistan (+91)</option>
                    <option value="+62">İndoneziya (+62)</option>
                    <option value="+98">İran (+98)</option>
                    <option value="+39">İtaliya (+39)</option>
                    <option value="+81">Yaponiya (+81)</option>
                    <option value="+82">Cənubi Koreya (+82)</option>
                    <option value="+965">Küveyt (+965)</option>
                    <option value="+60">Malayziya (+60)</option>
                    <option value="+52">Meksika (+52)</option>
                    <option value="+31">Niderland (+31)</option>
                    <option value="+64">Yeni Zelandiya (+64)</option>
                    <option value="+92">Pakistan (+92)</option>
                    <option value="+51">Peru (+51)</option>
                    <option value="+63">Filippin (+63)</option>
                    <option value="+48">Polşa (+48)</option>
                    <option value="+351">Portuqaliya (+351)</option>
                    <option value="+40">Rumıniya (+40)</option>
                    <option value="+7">Rusiya (+7)</option>
                    <option value="+256">Uqanda (+256)</option>
                    <option value="+380">Ukrayna (+380)</option>
                    <option value="+971">
                      Birləşmiş Ərəb Əmirlikləri (+971)
                    </option>
                    <option value="+60">Vyetnam (+60)</option>
                  </select>
                  <label htmlFor="tel"></label>
                  <input
                    className="action-number"
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="123 456 789"
                  />
                </div>
              </form>
              <form action="" className="messsage_action">
                <input
                  className="message"
                  texare="message"
                  name="mesage"
                  id="message"
                  placeholder="How we can help?"
                />
              </form>
              <button className="message-btn" onClick={openNewModule}>
              Schedule Event
              </button>
            </div>
          </div>
        </div>
      )}

      {isNewModuleOpen && <NewModule onClose={closeNewModule} />}
    </>
  );
}

export default InsurancePopup;
