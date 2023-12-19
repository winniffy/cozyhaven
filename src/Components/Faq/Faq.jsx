import React, { useState } from "react";
import "./Faq.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";

const Faq = () => {
  // faqs data
  const faqsData = [
    {
      title: "Are there family-friendly apartments in Lagos?",
      details:
        "Yes! We have over 20 apartments with more than 2 bedrooms perfect for families looking for a comfortable and convenient stay in Lagos.",
    },
    {
      title: "How much does it cost to stay in a villa in Lagos?",
      details:
        "On average, it would cost you about NGN50,000 but that heavily depends on your taste.",
    },
    {
      title: "Are there pet-friendly vacation rentals in Lagos?",
      details:
        "Yes, of course. We won't stop your pets from enjoying the good times we provide - as long as we're safe.",
    },
    {
      title: "Are there hotels with a dedicated workspace in Lagos?",
      details:
        "Yes, we have personal and office workspaces available for you or your organization.",
    },
    {
      title: "Are there Lagos vacation rentals on Airbnb with pools?",
      details:
        "Yes, we have different varieties of pools and pool games available.",
    },
  ];

  // state for each Faq item
  const [openFaq, setOpenFaq] = useState(Array(faqsData.length).fill(false));

  const handleToggle = (index) => {
    // Copy the current state
    const newFaqState = [...openFaq];
    // Toggle the state of the clicked Faq item
    newFaqState[index] = !newFaqState[index];
    // Update the state
    setOpenFaq(newFaqState);
  };

  return (
    <section className="faq_container">
      <h4 className="faq_header">Frequently Asked Questions</h4>

      {faqsData.map(({ title, details }, index) => (
        // faq item
        <div className="faq">
          {/* faq title */}
          <div
            className="faq_title"
            onClick={() => handleToggle(index)}
            key={index}
          >
            <div className="faq_title-head">{title}</div>
            <div className="faq_icon">
              {openFaq[index] ? <RemoveIcon /> : <AddIcon />}
            </div>
          </div>
          {/* faq details */}
          {openFaq[index] && (
            <motion.div
              className="faq_details-container"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <p className="faq_details">{details}</p>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
