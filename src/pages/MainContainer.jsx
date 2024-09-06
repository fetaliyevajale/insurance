import React from 'react';

function MainContainer({ showDescriptions, toggleDescription }) {
  return (
    <div className="mainContainer">

      
      <div className="mainContainerDiv1">
         <div className="rov-main">
         <h1>We’re committed to keeping your information secure.</h1>
         </div>
        <h5>
          With a 10-point security protocol and data encryption in place, we
          continuously work to protect your account with the highest standards
          available.
        </h5>
        <div className="mainContainerDiv1Table">
  <div
    className={`containerRoot ${showDescriptions.ssl ? "active" : ""}`}
  >
    <div className="containerRow">
      <h1>SSL Encryption</h1>
      <div className="img16">
        {showDescriptions.ssl ? (
          <img
            src="/resim16.png"
            alt="resim16"
            onClick={() => toggleDescription("ssl")}
          />
        ) : (
          <img
            src="/resim17.png"
            alt="resim17"
            onClick={() => toggleDescription("ssl")}
          />
        )}
      </div>
    </div>
    <h6 className={showDescriptions.ssl ? "visible" : "hidden"}>
      Our website and app are both secured with 256-bit encryption.
    </h6>
  </div>

  <div
    className={`containerRoot ${showDescriptions.account ? "active" : ""}`}
  >
    <div className="containerRow">
      <h1>Account Safeguards</h1>
      <div className="img16">
        {showDescriptions.account ? (
          <img
            src="/resim16.png"
            alt="resim16"
            onClick={() => toggleDescription("account")}
          />
        ) : (
          <img
            src="/resim17.png"
            alt="resim17"
            onClick={() => toggleDescription("account")}
          />
        )}
      </div>
    </div>
    <h6 className={showDescriptions.account ? "visible" : "hidden"}>
      Our website and app are both secured with 256-bit encryption.
    </h6>
  </div>

  <div
    className={`containerRoot ${showDescriptions.bank ? "active" : ""}`}
  >
    <div className="containerRow">
      <h1>Bank-Level Security</h1>
      <div className="img16">
        {showDescriptions.bank ? (
          <img
            src="/resim16.png"
            alt="resim16"
            onClick={() => toggleDescription("bank")}
          />
        ) : (
          <img
            src="/resim17.png"
            alt="resim17"
            onClick={() => toggleDescription("bank")}
          />
        )}
      </div>
    </div>
    <h6 className={showDescriptions.bank ? "visible" : "hidden"}>
      Our website and app are both secured with 256-bit encryption.
    </h6>
  </div>

  <div
    className={`containerRoot ${showDescriptions.privacy ? "active" : ""}`}
  >
    <div className="containerRow">
      <h1>Privacy and Control</h1>
      <div className="img16">
        {showDescriptions.privacy ? (
          <img
            src="/resim16.png"
            alt="resim16"
            onClick={() => toggleDescription("privacy")}
          />
        ) : (
          <img
            src="/resim17.png"
            alt="resim17"
            onClick={() => toggleDescription("privacy")}
          />
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
