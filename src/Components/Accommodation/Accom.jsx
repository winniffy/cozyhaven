import React from "react";
import "./Accom.css";
import { motion } from "framer-motion";

const Accom = ({
  accomImg1,
  accomImg2,
  accomImg3,
  accomImg4,
  checkMarkIcon,
  heartIcon,
  starIcon,
}) => {
  // accomodation image bg style
  const accomImage1 = {
    backgroundImage: `url(${accomImg1})`,
  };
  const accomImage2 = {
    backgroundImage: `url(${accomImg2})`,
  };
  const accomImage3 = {
    backgroundImage: `url(${accomImg3})`,
  };
  const accomImage4 = {
    backgroundImage: `url(${accomImg4})`,
  };

  return (
    <motion.section
      className="accom_section"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="accom_header">
        Highly-rated Exclusive Accommodations In Lagos
      </h4>
      <p className="accom_subtext">
        Experience the ultimate getaway at a 5-star luxury home away from home,
        all without the 5-star price tag. Snag our latest discounts and
        exclusive deals now!
      </p>

      {/* accommodation cards */}
      <article className="accom_grid-container">
        {/* accommodation card 1 */}
        <div className="accom_grid-card">
          {/* accomodation card image container */}
          <div className="accom_card-img" style={accomImage1}>
            {/* accomodation card like icon */}
            <img src={heartIcon} alt="" className="accom_card-like-icon" />
            {/* accomodation card price & rating */}
            <p className="accom_price">$70/Night</p>
            <span className="accom_rating-flex">
              <img src={starIcon} alt="" className="accom_card-star-icon" />
              <p className="accom_rating">4.8 (233)</p>
            </span>
          </div>

          {/* accomodation card bottom text */}
          <div className="accom_card-bottom-container">
            <span className="accom_card-bottom-text">
              <p className="accom_card-bottom-text1">
                Bloomsbury - 1677 Mayfair Apartment in VI
              </p>
              <img
                src={checkMarkIcon}
                alt="check icon"
                className="accom_card-bottom-text1-check"
              />
            </span>
            <p className="accom_card-bottom-text2">
              4 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* accommodation card 2 */}
        <div className="accom_grid-card">
          {/* accomodation card image container */}
          <div className="accom_card-img" style={accomImage2}>
            {/* accomodation card like icon */}
            <img src={heartIcon} alt="" className="accom_card-like-icon" />
            {/* accomodation card price & rating flex */}
            <div className="accom_price_rating-flex">
              <p className="accom_price">$50/Night</p>
              <span className="accom_rating-flex">
                <img src={starIcon} alt="" className="accom_card-star-icon" />
                <p className="accom_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* accomodation card bottom text */}
          <div className="accom_card-bottom-container">
            <span className="accom_card-bottom-text">
              <p className="accom_card-bottom-text1">
                Holborn - 1677 Mayfair Apartment in VI
              </p>
              <img
                src={checkMarkIcon}
                alt="check icon"
                className="accom_card-bottom-text1-check"
              />
            </span>
            <p className="accom_card-bottom-text2">
              4 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* accommodation card 3 */}
        <div className="accom_grid-card">
          {/* accomodation card image container */}
          <div className="accom_card-img" style={accomImage3}>
            {/* accomodation card like icon */}
            <img src={heartIcon} alt="" className="accom_card-like-icon" />
            {/* accomodation card price & rating flex */}
            <div className="accom_price_rating-flex">
              <p className="accom_price">$70/Night</p>
              <span className="accom_rating-flex">
                <img src={starIcon} alt="" className="accom_card-star-icon" />
                <p className="accom_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* accomodation card bottom text */}
          <div className="accom_card-bottom-container">
            <span className="accom_card-bottom-text">
              <p className="accom_card-bottom-text1">
                Knightsbridge Penthouse -1677 Mayfair...
              </p>
              <img
                src={checkMarkIcon}
                alt="check icon"
                className="accom_card-bottom-text1-check"
              />
            </span>
            <p className="accom_card-bottom-text2">
              44 guests — 2 bedrooms — 2 beds — 2.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>

        {/* accommodation card 4 */}
        <div className="accom_grid-card">
          {/* accomodation card image container */}
          <div className="accom_card-img" style={accomImage4}>
            {/* accomodation card like icon */}
            <img src={heartIcon} alt="" className="accom_card-like-icon" />
            {/* accomodation card price & rating flex */}
            <div className="accom_price_rating-flex">
              <p className="accom_price">$110/Night</p>
              <span className="accom_rating-flex">
                <img src={starIcon} alt="" className="accom_card-star-icon" />
                <p className="accom_rating">4.8 (233)</p>
              </span>
            </div>
          </div>

          {/* accomodation card bottom text */}
          <div className="accom_card-bottom-container">
            <span className="accom_card-bottom-text">
              <p className="accom_card-bottom-text1">
                Marylebone - 1677 Mayfair Apartment in...
              </p>
              <img
                src={checkMarkIcon}
                alt="check icon"
                className="accom_card-bottom-text1-check"
              />
            </span>
            <p className="accom_card-bottom-text2">
              6 guests — 3 bedrooms — 3 beds — 3.5 baths — Wifi — Air
              conditioning — Kitchen — Washer
            </p>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default Accom;
