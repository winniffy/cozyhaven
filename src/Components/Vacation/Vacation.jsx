import React from "react";
import "./Vacation.css";
import { motion } from "framer-motion";

const Vacation = ({
  vacImg1,
  vacImg2,
  vacImg3,
  vacImg4,
  heartIcon,
  starIcon,
}) => {
  // vacation image bg style
  const vacImage1 = {
    backgroundImage: `url(${vacImg1})`,
  };
  const vacImage2 = {
    backgroundImage: `url(${vacImg2})`,
  };
  const vacImage3 = {
    backgroundImage: `url(${vacImg3})`,
  };
  const vacImage4 = {
    backgroundImage: `url(${vacImg4})`,
  };

  return (
    <motion.section
      className="vacay_section"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="vacay_header">More Vacation Homes to Explore In Lagos</h4>
      <p className="vac_subtext">
        Guests concur that these lodgings excel in location, hygiene, and
        beyond. This is where your vacation should be - your home away from
        home.
      </p>

      {/* vacmodation cards */}
      <article className="vac_grid-container">
        {/* vacmodation card 1 */}
        <div className="vac_grid-card">
          {/* vacodation card image container */}
          <div className="vac_card-img" style={vacImage1}>
            {/* vacodation card like icon */}
            <img src={heartIcon} alt="" className="vac_card-like-icon" />
            {/* vacodation card price & rating */}
            <p className="vac_price">$70/Night</p>
            <span className="vac_rating-flex">
              <img src={starIcon} alt="" className="vac_card-star-icon" />
              <p className="vac_rating">4.8 (233)</p>
            </span>
          </div>

          {/* vacodation card bottom text */}
          <div className="vac_card-bottom-container">
            <span className="vac_card-bottom-text">
              <p className="vac_card-bottom-text1">
                Adigun Apartment Ajegunle Alagbado Area...
              </p>
            </span>
            <p className="vac_card-bottom-text2">
              4 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* vacmodation card 2 */}
        <div className="vac_grid-card">
          {/* vacodation card image container */}
          <div className="vac_card-img" style={vacImage2}>
            {/* vacodation card like icon */}
            <img src={heartIcon} alt="" className="vac_card-like-icon" />
            {/* vacodation card price & rating flex */}
            <div className="vac_price_rating-flex">
              <p className="vac_price">$50/Night</p>
              <span className="vac_rating-flex">
                <img src={starIcon} alt="" className="vac_card-star-icon" />
                <p className="vac_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* vacodation card bottom text */}
          <div className="vac_card-bottom-container">
            <span className="vac_card-bottom-text">
              <p className="vac_card-bottom-text1">
                Kobz Ilesanmi Residential Block Lagos
              </p>
            </span>
            <p className="vac_card-bottom-text2">
              4 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* vacmodation card 3 */}
        <div className="vac_grid-card">
          {/* vacodation card image container */}
          <div className="vac_card-img" style={vacImage3}>
            {/* vacodation card like icon */}
            <img src={heartIcon} alt="" className="vac_card-like-icon" />
            {/* vacodation card price & rating flex */}
            <div className="vac_price_rating-flex">
              <p className="vac_price">$70/Night</p>
              <span className="vac_rating-flex">
                <img src={starIcon} alt="" className="vac_card-star-icon" />
                <p className="vac_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* vacodation card bottom text */}
          <div className="vac_card-bottom-container">
            <span className="vac_card-bottom-text">
              <p className="vac_card-bottom-text1">
                Obanikoro Seun Mex Idumota Ladiron Busstop...
              </p>
            </span>
            <p className="vac_card-bottom-text2">
              44 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* vacmodation card 4 */}
        <div className="vac_grid-card">
          {/* vacodation card image container */}
          <div className="vac_card-img" style={vacImage4}>
            {/* vacodation card like icon */}
            <img src={heartIcon} alt="" className="vac_card-like-icon" />
            {/* vacodation card price & rating flex */}
            <div className="vac_price_rating-flex">
              <p className="vac_price">$110/Night</p>
              <span className="vac_rating-flex">
                <img src={starIcon} alt="" className="vac_card-star-icon" />
                <p className="vac_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* vacodation card bottom text */}
          <div className="vac_card-bottom-container">
            <span className="vac_card-bottom-text">
              <p className="vac_card-bottom-text1">
                Asihonmi Specialty Admiralty Way Igando
              </p>
            </span>
            <p className="vac_card-bottom-text2">
              6 guests — 3 bedrooms — 3 beds — 3.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>
      </article>

      <a href="#">
        <button className="vac_btn">Load More Properties</button>
      </a>
    </motion.section>
  );
};

export default Vacation;
