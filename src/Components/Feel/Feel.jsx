import React from "react";
import "./Feel.css";
import { motion } from "framer-motion";

const Feel = ({ logoWhite, feelImg }) => {
  const feelImgBg = { backgroundImage: `url(${feelImg})` };
  return (
    <motion.div
      className="feel_container"
      style={feelImgBg}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logoWhite} alt="cozyhaven logo" className="feel_logo" />
      <p className="feel_subtext">Feel at home wherever you go</p>
    </motion.div>
  );
};

export default Feel;
