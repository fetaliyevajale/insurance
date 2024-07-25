
import React, { useState } from "react";

export default function Main() {
  return (
    <div>
      
      <div className="main">
        <div className="image">
          <img src="/resim12.png" alt="resim12" />
        </div>

        <div className="table">
          <h2>What are the benefits of having insurance?</h2>

          <div className="mainTop">
            <div id="image">
              <img src="/resim13.png" alt="resim13" />
            </div>

            <h4>Financial protection</h4>
          </div>
          <p>
            Insurance can help protect you financially from unexpected events.
          </p>
          <div className="border"></div>

          <div className="mainTop">
            <div id="image">
              <img src="/resim13.png" alt="resim13" />
            </div>

            <h4>Peace of mind</h4>
          </div>
          <p>
            Having insurance can give you peace of mind knowing that you are
            protected in the event of a loss.
          </p>
          <div className="border"></div>

          <div className="mainTop">
            <div id="image">
              <img src="/resim13.png" alt="resim13" />
            </div>

            <h4>Compliance</h4>
          </div>
          <p>
            In some cases, insurance is required by law. For example, most
            states require drivers to have auto insurance.
          </p>
          <div className="border"></div>
        </div>
      </div>

    </div>
  )
}

