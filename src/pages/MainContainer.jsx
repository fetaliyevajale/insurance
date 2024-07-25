import React from 'react';

function MainContainer({ showDescriptions, toggleDescription }) {
  return (
    <div className="mainContainer">
      <div className="mainContainerDiv1">
        <h1>We’re committed to keeping your information secure.</h1>
        <h5>
          With a 10-point security protocol and data encryption in place, we
          continuously work to protect your account with the highest standards
          available.
        </h5>
        <div className="mainContainerDiv1Table">
          <div
            className={`containerRoot ${
              showDescriptions.ssl ? "active" : ""
            }`}
            onClick={() => toggleDescription("ssl")}
          >
            <div className="containerRow">
              <h1>SSL Encryption</h1>
              <div className="img16">
                {showDescriptions.ssl ? (
                  <img src="/resim16.png" alt="resim16" />
                ) : (
                  <img src="/resim17.png" alt="resim17" />
                )}
              </div>
            </div>
            <h6 className={showDescriptions.ssl ? "visible" : "hidden"}>
              Our website and app are both secured with 256-bit encryption.
            </h6>
          </div>

          <div
            className={`containerRoot ${
              showDescriptions.account ? "active" : ""
            }`}
            onClick={() => toggleDescription("account")}
          >
            <div className="containerRow">
              <h1>Account Safeguards</h1>
              <div className="img16">
                {showDescriptions.account ? (
                  <img src="/resim16.png" alt="resim16" />
                ) : (
                  <img src="/resim17.png" alt="resim17" />
                )}
              </div>
            </div>
            <h6 className={showDescriptions.account ? "visible" : "hidden"}>
              Our website and app are both secured with 256-bit encryption.
            </h6>
          </div>

          <div
            className={`containerRoot ${
              showDescriptions.bank ? "active" : ""
            }`}
            onClick={() => toggleDescription("bank")}
          >
            <div className="containerRow">
              <h1>Bank-Level Security</h1>
              <div className="img16">
                {showDescriptions.bank ? (
                  <img src="/resim16.png" alt="resim16" />
                ) : (
                  <img src="/resim17.png" alt="resim17" />
                )}
              </div>
            </div>
            <h6 className={showDescriptions.bank ? "visible" : "hidden"}>
              Our website and app are both secured with 256-bit encryption.
            </h6>
          </div>

          <div
            className={`containerRoot ${
              showDescriptions.privacy ? "active" : ""
            }`}
            onClick={() => toggleDescription("privacy")}
          >
            <div className="containerRow">
              <h1>Privacy and Control</h1>
              <div className="img16">
                {showDescriptions.privacy ? (
                  <img src="/resim16.png" alt="resim16" />
                ) : (
                  <img src="/resim17.png" alt="resim17" />
                )}
              </div>
            </div>
            <h6 className={showDescriptions.privacy ? "visible" : "hidden"}>
              Our website and app are both secured with 256-bit encryption.
            </h6>
          </div>
        </div>
      </div>

      <div className="mainContainerDiv2">
        <img src="/resim15.png" alt="resim15" />
      </div>
    </div>
  );
}

export default MainContainer;
