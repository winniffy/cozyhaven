import React from "react";
import "./Locations.css";
import { motion } from "framer-motion";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Locations = ({
  locationImg1,
  locationImg2,
  locationImg3,
  locationImg4,
}) => {
  // slide images array
  const slideImages = [
    `${locationImg1}`,
    `${locationImg2}`,
    `${locationImg3}`,
    `${locationImg4}`,
  ];

  return (
    <section className="location_section">
      {/* location header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="location_header">Top Trending Locations</h4>
        <p className="vac_subtext">
          Scroll through the hottest locations we've got.
        </p>
      </motion.div>
      <article className="location_section-container">
        {/* location left box */}
        <motion.div
          className="location_left-box"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
        >
          <p className="location_left-box_header">
            Awesome 2-Bedroom Apartment in Ajah, Lagos with Free WiFi Internet.
          </p>
          <button className="location_btn">Check In - Check Out</button>
          <button className="location_btn">Guests</button>
          <button className="location_btn book_btn">Book Now</button>
        </motion.div>

        {/* location images slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
        >
          <Slide indicators duration={100000}>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <div className="location_price">NGN40,000/Day</div>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <div className="location_price">NGN50,000/Day</div>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <div className="location_price">NGN45,000/Day</div>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
                <div className="location_price">NGN60,000/Day</div>
              </div>
            </div>
          </Slide>
        </motion.div>
        {/* <motion.div
          className="location_image-container"
          style={locationImage}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="location_price">NGN40,000/Day</div>
        </motion.div> */}
      </article>
    </section>
  );
};

export default Locations;
