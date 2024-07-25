import React from "react";
import FaqMain from "./FaqMain";
import FaqFooter from "./FaqFooter";

function Faq() {
  return (
    <div className="faq">
      <button className="faqS">FAQs</button>
      <h1>Frequently Asked Questions</h1>
      <h4>
        We understand that you may have some questions about insurance. We have
        compiled a list of frequently asked questions to help you get the
        information you need. If you have any other questions, please do not
        hesitate to contact us.
      </h4>
      < FaqMain/>
      <FaqFooter/>
    </div>
  );
}

export default Faq;
