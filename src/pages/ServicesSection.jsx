import React, { useState } from "react";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the different types of insurance?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
    {
      question: "How much insurance do I need?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
    {
      question: "How do I file a claim?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
    {
      question: "What are the benefits of having insurance?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
    {
      question: "What is a deductible?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
    {
      question: "What factors affect the cost of insurance?",
      answer: [
        "There are many different types of insurance, but some of the most common include:",
        "Homeowners insurance: This type of insurance protects your home and belongings from damage caused by fire, theft, and other disasters.",
        "Car insurance: This type of insurance protects you financially in the event of an accident.",
        "Life insurance: This type of insurance provides financial support to your loved ones if you die.",
        "Health insurance: This type of insurance helps pay for your medical expenses if you get sick or injured.",
      ],
    },
  ];

  return (
    <div className="ServicesSection">
      <h1>FAQs</h1>
      {faqData.map((faq, index) => (
        <div className="servicesSectionHeader" key={index}>
          <div className="servicesSectionHeaderChild">
            <h1>{faq.question}</h1>
            <img
              src={openIndex === index ? "/resim27minus.png" : "/resim28.png"}
              alt={openIndex === index ? "resim27" : "resim28"}
              onClick={() => handleToggle(index)} 
            />
          </div>

          {openIndex === index && (
            <ul className="servicesSectionUl">
              {faq.answer.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <button>Discover More</button>
    </div>
  );
}
