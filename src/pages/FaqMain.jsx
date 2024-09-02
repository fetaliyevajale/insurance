import React, { useState } from "react";

export default function FaqMain() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is insurance?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "What are the different types of insurance?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "How do I choose the right insurance for me?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "How do I file an insurance claim?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "How do I get a quote for insurance?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "Where can I get more information about insurance?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
    {
      question: "What are the benefits of having insurance?",
      answer:
        "Insurance is a contract between an insurance company and an individual or business. The insurance company agrees to pay for losses that the individual or business may suffer, in exchange for a premium paid by the individual or business.",
    },
  ];

  return (
    <div className="faqMain">
      {faqData.map((faq, index) => (
        <div className="faqMainText" key={index}>
          <div className="faqMainTextChild">
            <h1 onClick={() => handleToggle(index)}>{faq.question}</h1>
            <div className="imgFaq" onClick={() => handleToggle(index)}>
              <img
                src={openIndex === index ? "/resim27minus.png" : "/resim28.png"}
                alt={openIndex === index ? "resim27" : "resim28"}
              />
            </div>
          </div>
          {openIndex === index && <h4>{faq.answer}</h4>}
        </div>
      ))}
    </div>
  );
}
