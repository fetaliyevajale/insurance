import React, { useState } from "react";

const customerFAQs = [
  {
    id: 1,
    question: "What are the different types of insurance?",
    answer: "There are many different types of insurance, but some of the most common include: Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters. Car insurance: This type of insurance protects you financially in the event of an accident. Life insurance: This type of insurance provides financial support to your loved ones if you die. Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
  },
  {
    id: 2,
    question: "How much insurance do I need?",
    answer: "Homeowners insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
  },
  {
    id: 3,
    question: "How do I choose the right insurance company?",
    answer: "Car insurance protects you financially in the event of an accident.",
  },
  {
    id: 4,
    question: "How do I file a claim?",
    answer: "Life insurance provides financial support to your loved ones if you die.",
  },
  {
    id: 5,
    question: "What are the benefits of having insurance?",
    answer: "Health insurance helps pay for your medical expenses if you get sick or injured.",
  },
  {
    id: 6,
    question: "What is a deductible?",
    answer: "Insurance provides financial protection in case of unexpected events such as accidents, illnesses, or property damage.",
  },
];

function FooterAside() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  return (
    <div className="FooterAside">
      <h2>FAQs</h2>
      {customerFAQs.map((faq) => (
        <div className="footerAsideParent" key={faq.id}>
          <div className="RootDiv">
            <div className="parentdiv">
              <h2>{faq.question}</h2>
              <div id="image" onClick={() => toggleFAQ(faq.id)}>
                {openFAQ === faq.id ? (
                  <img src="/resim27minus.png" alt="Collapse" />
                ) : (
                  <img src="/resim28.png" alt="Expand" />
                )}
              </div>
            </div>
            {openFAQ === faq.id && (
              <div className="tableeH">
                <h4>There are many different types of insurance, but some of the most common include:</h4>
                <h5>{faq.answer}</h5>
              </div>
            )}
          </div>
        </div>
      ))}
        <button className="btnfoot">Discover More</button>
    </div>
    
  );
}

export default FooterAside;
