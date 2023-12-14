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
  return (
    <section className="perks_section">
      {/* location header */}
      <h4 className="perks_header">Perks & Prestige</h4>
      <p className="perks_subtext">
        Where Every Stay is infused with Luxury and Distinction.
      </p>
      <article className="perks_section-grid_container">
        <div className="perks_card-1">
          <img src={wifi} alt="wifi icon" className="perks_card-icon" />
          <h4 className="perks_card-header">WiFi</h4>
          <p className="perks_card-subtext">Stay connected seamlessly.</p>
        </div>
      </article>
    </section>
  );
};

export default Perks;
