import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({ heroimage }) => {
  const bgImage = {
    backgroundImage: `url(${heroimage})`,
  };

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="hero_image-container"
        style={bgImage}
      >
        <h1 className="hero_header">Where Relaxation Meets Adventure</h1>
        <p className="hero_subtext">
          “Where the serenity of a quiet retreat blends seamlessly with the
          excitement of endless adventures, creating an unforgettable experience
          for every traveler.”
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero_box"
      >
        <div className="hero_box-box">
          <h5 className="hero_box-header">Date</h5>
          <button className="hero_box-btn">Check In - Check Out</button>
        </div>
        <div className="hero_box-box hero_box-box2">
          <h5 className="hero_box-header">Location</h5>
          <button className="hero_box-btn">Lagos, Nigeria</button>
        </div>
        <div className="hero_box-box">
          <h5 className="hero_box-header">Accommodation</h5>
          <button className="hero_box-btn">Select Your Type</button>
        </div>
      </motion.article>
    </header>
  );
};

export default Hero;
