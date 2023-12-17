import React from "react";
import "./Perks.css";
import { motion } from "framer-motion";

const Perks = ({
  wifi,
  security,
  netflix,
  towel,
  dstv,
  tv,
  sheet,
  kitchen,
}) => {
  // cards animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.section
      className="perks_section"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* perks header */}
      <h4 className="perks_header">Perks & Prestige</h4>
      <p className="perks_subtext">
        Where Every Stay is infused with Luxury and Distinction.
      </p>
      {/* cards grid container */}
      <motion.article
        className="perks_section-grid_container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* card 1 */}
        <motion.div className="perks_card perks_card-1" variants={item}>
          <img src={wifi} alt="wifi icon" className="perks_card-icon" />
          <h4 className="perks_card-header">WiFi</h4>
          <p className="perks_card-subtext">Stay connected seamlessly.</p>
        </motion.div>
        {/* card 2 */}
        <motion.div className="perks_card perks_card-2" variants={item}>
          <img src={security} alt="security icon" className="perks_card-icon" />
          <h4 className="perks_card-header">24/7 Security</h4>
          <p className="perks_card-subtext">Your safety, our priority.</p>
        </motion.div>
        {/* card 3 */}
        <motion.div className="perks_card perks_card-3" variants={item}>
          <img src={netflix} alt="netflix icon" className="perks_card-icon" />
          <h4 className="perks_card-header">Netflix</h4>
          <p className="perks_card-subtext">
            Netflix for endless entertainment.
          </p>
        </motion.div>
        {/* card 4 */}
        <motion.div className="perks_card perks_card-4" variants={item}>
          <img src={towel} alt="towel icon" className="perks_card-icon" />
          <h4 className="perks_card-header">Clean Towels</h4>
          <p className="perks_card-subtext">Fresh towels, always ready.</p>
        </motion.div>
        {/* card 5 */}
        <motion.div className="perks_card perks_card-5" variants={item}>
          <img src={dstv} alt="dstv icon" className="perks_card-icon" />
          <h4 className="perks_card-header">DSTV</h4>
          <p className="perks_card-subtext">
            Enjoy DStv's Premium Entertainment.
          </p>
        </motion.div>
        {/* card 6 */}
        <motion.div className="perks_card perks_card-6" variants={item}>
          <img src={tv} alt="tv icon" className="perks_card-icon" />
          <h4 className="perks_card-header">Smart TV</h4>
          <p className="perks_card-subtext">
            Stream & Relax with Smart TVs in Every Room.
          </p>
        </motion.div>
        {/* card 7 */}
        <motion.div className="perks_card perks_card-7" variants={item}>
          <img
            src={sheet}
            alt="clean sheets icon"
            className="perks_card-icon"
          />
          <h4 className="perks_card-header">Clean Sheets</h4>
          <p className="perks_card-subtext">
            Freshly Laundered Bed Sheets for a Restful Stay.
          </p>
        </motion.div>
        {/* card 8 */}
        <motion.div className="perks_card perks_card-8" variants={item}>
          <img src={kitchen} alt="kitchen icon" className="perks_card-icon" />
          <h4 className="perks_card-header">Kitchen</h4>
          <p className="perks_card-subtext">
            Fully-Equipped Kitchens for Culinary Comfort.
          </p>
        </motion.div>
      </motion.article>
    </motion.section>
  );
};

export default Perks;
